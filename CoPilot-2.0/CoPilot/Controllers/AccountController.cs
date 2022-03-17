using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Text;
using System.Transactions;
using System.Web.Mvc;
using System.Web.Security;
using CoPilot.Models;
using DotNetOpenAuth.AspNet;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Web.WebPages.OAuth;
using WebMatrix.WebData;
using ActionResult = System.Web.Mvc.ActionResult;
using AllowAnonymousAttribute = System.Web.Mvc.AllowAnonymousAttribute;
using AuthorizeAttribute = System.Web.Mvc.AuthorizeAttribute;
using ControllerContext = System.Web.Mvc.ControllerContext;
using HttpPostAttribute = System.Web.Mvc.HttpPostAttribute;

// using System.Data;
// using CoPilot.Filters;

namespace CoPilot.Controllers
{
    [Authorize]
    public class AccountController : BaseController
    {
        //
        // GET: /Account/Login

        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        //
        // POST: /Account/Login

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginModel model, string returnUrl)
        {
            if (ModelState.IsValid && WebSecurity.Login(model.UserName, model.Password, persistCookie: model.RememberMe))
            {
                // Migrate the user's market basket
                MigrateShoppingCart(model.UserName);
                return RedirectToLocal(returnUrl);
            }

            // If we got this far, something failed, redisplay form
            ModelState.AddModelError("", "The user name or password provided is incorrect.");
            return View(model);
        }

        //
        // GET: /Account/Logoff

        [AllowAnonymous]
        public ActionResult Logoff()
        {
            WebSecurity.Logout();
            using (var db = new EntitiesContext())
            {
                // Disassociate market basket items with logged-in user
                var cart = ShoppingCart.GetCart(db, HttpContext);
                cart.EmptyCart();
                db.SaveChanges();
                return RedirectToAction("Index", "Home");
            }
        }

        //
        // GET: /Account/Register

        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        //
        // AJAX: /Account/Register

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Register(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                using (var db = new EntitiesContext())
                {
                    if (WebSecurity.UserExists(model.UserName))
                    {
                        // if this username exists and it is a Customer, Vendor or Administrator offer to reset the password
                        // NOT in the Public role
                        if (!Roles.GetRolesForUser(model.UserName).Contains("Public"))
                        {
                            // username already exists offer to reset password
                            return Json(new
                            {
                                success = false,
                                message = "UserNameExists"
                            });
                        }
                    }
                    string emailAddress = db.UserProfiles.FirstOrDefault(u => u.EmailAddress == model.EmailAddress)?.EmailAddress;
                    if (!string.IsNullOrWhiteSpace(emailAddress))
                    {
                        string userName = db.UserProfiles.FirstOrDefault(u => u.EmailAddress == model.EmailAddress)?.UserName;
                        if (Roles.GetRolesForUser(userName).Contains("Public"))
                        {
                            // the user is a Public role trying to register, offer to change the user role by sending an email to the manager
                            // username already exists offer to reset password
                            return Json(new
                            {
                                success = false,
                                message = "RequestAccountChange"
                            });
                        }
                        else 
                        {
                            // the user is trying to register an account that already has an UserProfile with this email address 
                            // offer to send that username to their email account in our records
                            return Json(new
                            {
                                success = false,
                                message = "EmailUserName"
                            });
                            // return PartialView("_EmailUserName", $"The Email Address {emailAddress} already exists, did you forget your account user name?");
                        }
                    }
                }
                // Attempt to register the user
                try
                {
                    WebSecurity.CreateUserAndAccount(model.UserName, model.Password, new
                    {
                        model.FirstName,
                        model.LastName,
                        model.EmailAddress,
                        model.Phone,
                        model.StreetAddress,
                        model.City,
                        model.State,
                        model.PostalCode,
                        Country = "United States",
                        Status = PartnerStatus.Active
                    });
                    WebSecurity.Login(model.UserName, model.Password);
                    if (!Roles.GetRolesForUser(model.UserName).Contains("Customer"))
                        Roles.AddUsersToRoles(new[] {model.UserName}, new[] {"Customer"});

                    // Migrate the newly registered user's market basket
                    MigrateShoppingCart(model.UserName);
                    // return success to client ajax OnSuccess function
                    return Json(new
                    {
                        success = true,
                        message = "Registration Successful, you will be redirected to the market login page now."
                    });
                }
                catch (MembershipCreateUserException e)
                {
                    ModelState.AddModelError("", ErrorCodeToString(e.StatusCode));
                }
            }
            // If we got this far, something failed, return failure to client ajax OnSuccess function
            return Json(new
            {
                success = false,
                message = "Registration Failed!"
            });
        }

        private void MigrateShoppingCart(string userName)
        {
            using (var db = new EntitiesContext())
            {
                // Associate market basket items with logged-in user
                var cart = ShoppingCart.GetCart(db, HttpContext);
                cart.MigrateCart(userName);
                db.SaveChanges();
                Session[ShoppingCart.CartSessionKey] = userName;
            }
        }


        //
        // POST: /Account/Disassociate

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Disassociate(string provider, string providerUserId)
        {
            string ownerAccount = OAuthWebSecurity.GetUserName(provider, providerUserId);
            ManageMessageId? message = null;

            // Only disassociate the account if the currently logged in user is the owner
            if (ownerAccount == User.Identity.Name)
            {
                // Use a transaction to prevent the user from deleting their last login credential
                using (var scope = new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.Serializable }))
                {
                    bool hasLocalAccount = OAuthWebSecurity.HasLocalAccount(WebSecurity.GetUserId(User.Identity.Name));
                    if (hasLocalAccount || OAuthWebSecurity.GetAccountsFromUserName(User.Identity.Name).Count > 1)
                    {
                        OAuthWebSecurity.DeleteAccount(provider, providerUserId);
                        scope.Complete();
                        message = ManageMessageId.RemoveLoginSuccess;
                    }
                }
            }

            return RedirectToAction("ChangePassword", new { Message = message });
        }

        public string Create(RegisterModel model)
        {
            string renderHtml = RenderPartialViewToString("PartailViewName", model);
            return renderHtml;
        }

        protected string RenderPartialViewToString(string viewName, object model)
        {
            if (string.IsNullOrEmpty(viewName))
                viewName = ControllerContext.RouteData.GetRequiredString("action");

            ViewData.Model = model;

            using (StringWriter sw = new StringWriter())
            {
                ViewEngineResult viewResult = ViewEngines.Engines.FindPartialView(ControllerContext, viewName);
                ViewContext viewContext = new ViewContext(ControllerContext, viewResult.View, ViewData, TempData, sw);
                viewResult.View.Render(viewContext, sw);
                return sw.GetStringBuilder().ToString();
            }
        }

        //
        // POST: /Account/RequestAccountChange

        [HttpPost]
        [AllowAnonymous]
        public ActionResult RequestAccountChange(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                // SendEmail
                StringBuilder body = new StringBuilder();
                // Email user information to the manager account
                string subject = "Wren Thicket Market Message";
                body.Append("<b>Attention: An account upgrade from Public to Customer has been requested.</b>"); body.Append("<br/>");
                body.Append("UserName: " + model.UserName); body.Append("<br/>");
                body.Append("FirstName: " + model.FirstName); body.Append("<br/>");
                body.Append("LastName: " + model.LastName); body.Append("<br/>");
                body.Append("EmailAddress: " + model.EmailAddress); body.Append("<br/>");
                body.Append("Phone: " + model.Phone); body.Append("<br/>");
                body.Append("StreetAddress: " + model.StreetAddress); body.Append("<br/>");
                body.Append("State: " + model.State); body.Append("<br/>");
                body.Append("PostalCode: " + model.PostalCode); body.Append("<br/>");
                body.Append("Country: " + model.Country); body.Append("<br/>");
                body.Append("Password: " + model.Password); body.Append("<br/>");
                body.Append("ConfirmPassword: " + model.ConfirmPassword); body.Append("<br/>");
                body.Append("<b>Manager please update the user data for the account with the info in this email."); body.Append("<br/>");
                body.Append("And convert the role from Public to Customer.</b>"); body.Append("<br/>");
                // Attempt to send the email
                try
                {
                    SendEmail("manager@wrenthicketmarket.com", subject.ToString(), body.ToString(), @"");
                }
                catch (Exception e)
                {
                    System.Diagnostics.Debug.WriteLine($"SendEmail Exception: {e.Message}");
                }
                return Json(new
                {
                    success = true
                });
            }
            else
            {
                return Json(new
                {
                    success = false
                });
            }
        }

        //
        // GET: Account/EmailUserName

        [AllowAnonymous]
        public ActionResult EmailUserName()
        {
            return View();
        }

        // POST: Account/LostPassword

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult EmailUserName(LostPasswordModel model)
        {
            if (ModelState.IsValid)
            {
                MembershipUser user;
                string emailAddress = "";
                using (var context = new EntitiesContext())
                {
                    var foundUserName = (from u in context.UserProfiles
                                         where u.EmailAddress == model.Email
                                         select u.UserName).FirstOrDefault();
                    if (foundUserName != null)
                    {
                        user = Membership.GetUser(foundUserName.ToString());
                    }
                    else
                    {
                        user = null;
                    }
                    emailAddress = (from u in context.UserProfiles
                                    where u.EmailAddress == model.Email
                                    select u.EmailAddress).FirstOrDefault();
                    if (emailAddress != null)
                    {
                    }
                }
                if (user != null)
                {
                    string marketLink = "<a href='www.wrenthicketmarket.com'>Wren Thicket Market</a>";
                    // Email market user name
                    string subject = "Wren Thicket Market Message";
                    string body = "Your market user name is: " + user.UserName + "<br/>";
                    body += "We received a request to send you your market account user name for the " + marketLink;
                    // Attempt to send the email
                    try
                    {
                        SendEmail(emailAddress.ToString(), subject.ToString(), body.ToString(), @"");
                    }
                    catch (Exception e)
                    {
                        ModelState.AddModelError("", "Issue sending email: " + e.Message);
                    }
                }
                else // Email not found
                {
                    /* Note: You may not want to provide the following information
                    * since it gives an intruder information as to whether a
                    * certain email address is registered with this website or not.
                    * If you're really concerned about privacy, you may want to
                    * forward to the same "Success" page regardless whether an
                    * user was found or not. This is only for illustration purposes.
                    */
                    ModelState.AddModelError("", "No user found by that email.");
                }
            }

            string messages = string.Join("; ", ModelState.Values
                                        .SelectMany(x => x.Errors)
                                        .Select(x => x.ErrorMessage));
            ViewBag.StatusMessage = messages;

            if (ViewBag.StatusMessage == "")
            {
                ViewBag.StatusMessage = "An email was sent to your account with a password reset link, please follow the link to reset your password.";
            }

            /* You may want to send the user to a "Success" page upon the successful
            * sending of the reset email link. Right now, if we are 100% successful
            * nothing happens on the page. :P
            */
            return View(model);
        }

        //
        // GET: Account/LostPassword

        [AllowAnonymous]
        public ActionResult LostPassword()
        {
            return View();
        }

        // POST: Account/LostPassword

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult LostPassword(LostPasswordModel model)
        {
            if (ModelState.IsValid)
            {
                MembershipUser user;
                string emailAddress = "";
                using (var context = new EntitiesContext())
                {
                    var foundUserName = (from u in context.UserProfiles
                                         where u.EmailAddress == model.Email
                                         select u.UserName).FirstOrDefault();
                    if (foundUserName != null)
                    {
                        user = Membership.GetUser(foundUserName.ToString());
                    }
                    else
                    {
                        user = null;
                    }
                    emailAddress = (from u in context.UserProfiles
                                         where u.EmailAddress == model.Email
                                         select u.EmailAddress).FirstOrDefault();
                    if (emailAddress != null)
                    {
                    }
                }
                if (user != null)
                {
                    // Generate password token that will be used in the email link to authenticate user
                    var token = WebSecurity.GeneratePasswordResetToken(user.UserName);
                    // Generate the html link sent via email
                    string resetLink = "<a href='"
                       + Url.Action("ResetPassword", "Account", new { rt = token }, "http")
                       + "'>Reset Password Link</a>";

                    // Email stuff
                    string subject = "Reset your password for wrenthicketmarket.com";
                    string body = "Your reset password link: " + resetLink;

                    // Attempt to send the email
                    try
                    {
                        SendEmail(emailAddress.ToString(), subject.ToString(), body.ToString(), @"");
                    }
                    catch (Exception e)
                    {
                        ModelState.AddModelError("", "Issue sending email: " + e.Message);
                    }
                }
                else // Email not found
                {
                    /* Note: You may not want to provide the following information
                    * since it gives an intruder information as to whether a
                    * certain email address is registered with this website or not.
                    * If you're really concerned about privacy, you may want to
                    * forward to the same "Success" page regardless whether an
                    * user was found or not. This is only for illustration purposes.
                    */
                    ModelState.AddModelError("", "No user found by that email.");
                }
            }

            string messages = string.Join("; ", ModelState.Values
                                        .SelectMany(x => x.Errors)
                                        .Select(x => x.ErrorMessage));
            ViewBag.StatusMessage = messages;

            if (ViewBag.StatusMessage == "")
            {
                ViewBag.StatusMessage = "An email was sent to your account with a password reset link, please follow the link to reset your password.";
            }

            /* You may want to send the user to a "Success" page upon the successful
            * sending of the reset email link. Right now, if we are 100% successful
            * nothing happens on the page. :P
            */
            return View(model);
        }

        //
        // GET: /Account/ResetPassword

        [AllowAnonymous]
        public ActionResult ResetPassword(string rt)
        {
            ResetPasswordModel model = new ResetPasswordModel();
            model.ReturnToken = rt;
            return View(model);
        }

        //
        // POST: /Account/ResetPassword

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult ResetPassword(ResetPasswordModel model)
        {
            if (ModelState.IsValid)
            {
                bool resetResponse = WebSecurity.ResetPassword(model.ReturnToken, model.Password);
                if (resetResponse)
                {
                    ViewBag.Message = "Successfully Changed";
                }
                else
                {
                    ViewBag.Message = "Sorry, the password reset did not work correctly, please contact the market manager.";
                }
            }
            return View(model);
        }

        //
        // GET: /Account/ChangePassword

        public ActionResult ChangePassword(ManageMessageId? message)
        {
            ViewBag.StatusMessage =
                message == ManageMessageId.ChangePasswordSuccess ? "Your password has been changed."
                : message == ManageMessageId.SetPasswordSuccess ? "Your password has been set."
                : message == ManageMessageId.RemoveLoginSuccess ? "The external login was removed."
                : "";
            ViewBag.HasLocalPassword = OAuthWebSecurity.HasLocalAccount(WebSecurity.GetUserId(User.Identity.Name));
            ViewBag.ReturnUrl = Url.Action("ChangePassword");
            return View();
        }

        //
        // POST: /Account/ChangePassword

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ChangePassword(LocalPasswordModel model)
        {
            bool hasLocalAccount = OAuthWebSecurity.HasLocalAccount(WebSecurity.GetUserId(User.Identity.Name));
            ViewBag.HasLocalPassword = hasLocalAccount;
            ViewBag.ReturnUrl = Url.Action("ChangePassword");
            if (hasLocalAccount)
            {
                if (ModelState.IsValid)
                {
                    // ChangePassword will throw an exception rather than return false in certain failure scenarios.
                    bool changePasswordSucceeded;
                    try
                    {
                        changePasswordSucceeded = WebSecurity.ChangePassword(User.Identity.Name, model.OldPassword, model.NewPassword);
                    }
                    catch (Exception)
                    {
                        changePasswordSucceeded = false;
                    }

                    if (changePasswordSucceeded)
                    {
                        return RedirectToAction("ChangePassword", new { Message = ManageMessageId.ChangePasswordSuccess });
                    }
                    else
                    {
                        ModelState.AddModelError("", "The current password is incorrect or the new password is invalid.");
                    }
                }
            }
            else
            {
                // User does not have a local password so remove any validation errors caused by a missing
                // OldPassword field
                ModelState state = ModelState["OldPassword"];
                if (state != null)
                {
                    state.Errors.Clear();
                }

                if (ModelState.IsValid)
                {
                    try
                    {
                        WebSecurity.CreateAccount(User.Identity.Name, model.NewPassword);
                        return RedirectToAction("ChangePassword", new { Message = ManageMessageId.SetPasswordSuccess });
                    }
                    catch (Exception e)
                    {
                        ModelState.AddModelError("", e);
                    }
                }
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        //
        // GET: /User/Edit/5

        public ActionResult Edit()
        {
            using (var db = new EntitiesContext())
            {
                int id = -1;
                if (WebSecurity.IsAuthenticated)
                {
                    id = WebSecurity.CurrentUserId;
                }
                UserProfile user = db.UserProfiles.Find(id);
                if (user == null)
                {
                    return HttpNotFound();
                }
                return View(user);
            }
        }

        //
        // POST: /User/Edit/5

        [HttpPost]
        public ActionResult Edit(UserProfile user)
        {
            using (var db = new EntitiesContext())
            {
                if (ModelState.IsValid)
                {
                    UserProfile userProfile = db.UserProfiles.Find(user.UserId);
                    userProfile.LastName = user.LastName;
                    userProfile.FirstName = user.FirstName;
                    userProfile.UserName = user.UserName;
                    userProfile.UserRole = "Active";
                    userProfile.StreetAddress = user.StreetAddress;
                    userProfile.EmailAddress = user.EmailAddress;
                    userProfile.City = user.City;
                    userProfile.State = user.State;
                    userProfile.Country = user.Country;
                    userProfile.PostalCode = user.PostalCode;
                    userProfile.Phone = user.Phone;
                    db.Entry(userProfile).State = EntityState.Modified;
                    db.SaveChanges();
                    return RedirectToAction("Index", "Home");
                }
                return View(user);
            }
        }

        //
        // GET: /Account/UserProfile

        public ActionResult UserProfile(UserProfileMessageId? message)
        {
            ViewBag.StatusMessage =
                message == UserProfileMessageId.ChangePasswordSuccess ? "Your password has been changed."
                : message == UserProfileMessageId.SetPasswordSuccess ? "Your password has been set."
                : message == UserProfileMessageId.RemoveLoginSuccess ? "The external login was removed."
                : "";
            ViewBag.HasLocalPassword = OAuthWebSecurity.HasLocalAccount(WebSecurity.GetUserId(User.Identity.Name));
            ViewBag.ReturnUrl = Url.Action("ChangePassword");
            return View();
        }

        //
        // POST: /Account/UserProfile

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult UserProfile(UserProfile model)
        {
            bool hasLocalAccount = OAuthWebSecurity.HasLocalAccount(WebSecurity.GetUserId(User.Identity.Name));
            ViewBag.HasLocalPassword = hasLocalAccount;
            ViewBag.ReturnUrl = Url.Action("UserProfile");
            if (hasLocalAccount)
            {
                if (ModelState.IsValid)
                {
                    // ChangePassword will throw an exception rather than return false in certain failure scenarios.
                    bool changeUserProfileSucceeded;
                    try
                    {
                        // changeUserProfileSucceeded = WebSecurity.ChangePassword(User.Identity.Name, model.OldPassword, model.NewPassword);
                        changeUserProfileSucceeded = true;
                    }
                    catch (Exception)
                    {
                        changeUserProfileSucceeded = false;
                    }

                    if (changeUserProfileSucceeded)
                    {
                        return RedirectToAction("ChangePassword", new { Message = UserProfileMessageId.ChangePasswordSuccess });
                    }
                    else
                    {
                        ModelState.AddModelError("", "The current password is incorrect or the new password is invalid.");
                    }
                }
            }
            else
            {
                // User does not have a local password so remove any validation errors caused by a missing
                // OldPassword field
                ModelState state = ModelState["OldPassword"];
                if (state != null)
                {
                    state.Errors.Clear();
                }

                if (ModelState.IsValid)
                {
                    try
                    {
                        // WebSecurity.CreateAccount(User.Identity.Name, model.NewPassword);
                        return RedirectToAction("ChangePassword", new { Message = UserProfileMessageId.SetPasswordSuccess });
                    }
                    catch (Exception e)
                    {
                        ModelState.AddModelError("", e);
                    }
                }
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        //
        // POST: /Account/ExternalLogin

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult ExternalLogin(string provider, string returnUrl)
        {
            return new ExternalLoginResult(provider, Url.Action("ExternalLoginCallback", new { ReturnUrl = returnUrl }));
        }

        //
        // GET: /Account/ExternalLoginCallback

        [AllowAnonymous]
        public ActionResult ExternalLoginCallback(string returnUrl)
        {
            AuthenticationResult result = OAuthWebSecurity.VerifyAuthentication(Url.Action("ExternalLoginCallback", new { ReturnUrl = returnUrl }));
            if (!result.IsSuccessful)
            {
                return RedirectToAction("ExternalLoginFailure");
            }

            if (OAuthWebSecurity.Login(result.Provider, result.ProviderUserId, createPersistentCookie: false))
            {
                return RedirectToLocal(returnUrl);
            }

            if (User.Identity.IsAuthenticated)
            {
                // If the current user is logged in add the new account
                OAuthWebSecurity.CreateOrUpdateAccount(result.Provider, result.ProviderUserId, User.Identity.Name);
                return RedirectToLocal(returnUrl);
            }
            else
            {
                // User is new, ask for their desired membership name
                string loginData = OAuthWebSecurity.SerializeProviderUserId(result.Provider, result.ProviderUserId);
                ViewBag.ProviderDisplayName = OAuthWebSecurity.GetOAuthClientData(result.Provider).DisplayName;
                ViewBag.ReturnUrl = returnUrl;
                return View("ExternalLoginConfirmation", new RegisterExternalLoginModel { UserName = result.UserName, ExternalLoginData = loginData });
            }
        }

        //
        // POST: /Account/ExternalLoginConfirmation

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult ExternalLoginConfirmation(RegisterExternalLoginModel model, string returnUrl)
        {
            using (var db = new EntitiesContext())
            {
                string provider = null;
                string providerUserId = null;

                if (User.Identity.IsAuthenticated ||
                    !OAuthWebSecurity.TryDeserializeProviderUserId(model.ExternalLoginData, out provider,
                        out providerUserId))
                {
                    return RedirectToAction("ChangePassword");
                }

                if (ModelState.IsValid)
                {
                    // Insert a new user into the database
                    UserProfile user =
                        db.UserProfiles.FirstOrDefault(u => u.UserName.ToLower() == model.UserName.ToLower());
                    // Check if user already exists
                    if (user == null)
                    {
                        // Insert name into the profile table
                        db.UserProfiles.Add(new UserProfile { UserName = model.UserName });
                        db.SaveChanges();

                        OAuthWebSecurity.CreateOrUpdateAccount(provider, providerUserId, model.UserName);
                        OAuthWebSecurity.Login(provider, providerUserId, createPersistentCookie: false);

                        return RedirectToLocal(returnUrl);
                    }
                    else
                    {
                        ModelState.AddModelError("UserName",
                            "User name already exists. Please enter a different user name.");
                    }
                }

                ViewBag.ProviderDisplayName = OAuthWebSecurity.GetOAuthClientData(provider).DisplayName;
                ViewBag.ReturnUrl = returnUrl;
                return View(model);
            }
        }

        //
        // GET: /Account/ExternalLoginFailure

        [AllowAnonymous]
        public ActionResult ExternalLoginFailure()
        {
            return View();
        }

        [AllowAnonymous]
        [ChildActionOnly]
        public ActionResult ExternalLoginsList(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return PartialView("_ExternalLoginsListPartial", OAuthWebSecurity.RegisteredClientData);
        }

        [ChildActionOnly]
        public ActionResult RemoveExternalLogins()
        {
            ICollection<OAuthAccount> accounts = OAuthWebSecurity.GetAccountsFromUserName(User.Identity.Name);
            List<ExternalLogin> externalLogins = (from account in accounts
                                                  let clientData = OAuthWebSecurity.GetOAuthClientData(account.Provider)
                                                  select new ExternalLogin
                                                  {
                                                      Provider = account.Provider,
                                                      ProviderDisplayName = clientData.DisplayName,
                                                      ProviderUserId = account.ProviderUserId,
                                                  }).ToList();

            ViewBag.ShowRemoveButton = externalLogins.Count > 1 || OAuthWebSecurity.HasLocalAccount(WebSecurity.GetUserId(User.Identity.Name));
            return PartialView("_RemoveExternalLoginsPartial", externalLogins);
        }

        private ActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }

        internal class ExternalLoginResult : ActionResult
        {
            public ExternalLoginResult(string provider, string returnUrl)
            {
                Provider = provider;
                ReturnUrl = returnUrl;
            }

            public string Provider { get; private set; }
            public string ReturnUrl { get; private set; }

            public override void ExecuteResult(ControllerContext context)
            {
                OAuthWebSecurity.RequestAuthentication(Provider, ReturnUrl);
            }
        }

        private static string ErrorCodeToString(MembershipCreateStatus createStatus)
        {
            // See http://go.microsoft.com/fwlink/?LinkID=177550 for
            // a full list of status codes.
            switch (createStatus)
            {
                case MembershipCreateStatus.DuplicateUserName:
                    return "User name already exists. Please enter a different user name.";

                case MembershipCreateStatus.DuplicateEmail:
                    return "A user name for that e-mail address already exists. Please enter a different e-mail address.";

                case MembershipCreateStatus.InvalidPassword:
                    return "The password provided is invalid. Please enter a valid password value.";

                case MembershipCreateStatus.InvalidEmail:
                    return "The e-mail address provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidAnswer:
                    return "The password retrieval answer provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidQuestion:
                    return "The password retrieval question provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidUserName:
                    return "The user name provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.ProviderError:
                    return "The authentication provider returned an error. Please verify your entry and try again. If the problem persists, please contact your system administrator.";

                case MembershipCreateStatus.UserRejected:
                    return "The user creation request has been canceled. Please verify your entry and try again. If the problem persists, please contact your system administrator.";

                default:
                    return "An unknown error occurred. Please verify your entry and try again. If the problem persists, please contact your system administrator.";
            }
        }
    }
}
