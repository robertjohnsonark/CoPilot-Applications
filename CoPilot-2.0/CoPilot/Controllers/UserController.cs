using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;
using System.Web.Security;
using System.Web.UI;
using CoPilot.Models;
using CoPilot.ViewModels;
using WebMatrix.WebData;
using System.Diagnostics;
using System.Web.WebPages;

// using CoPilot.Filters;

namespace CoPilot.Controllers
{
    [Authorize(Roles = "Administrator")]
    public class UserController : BaseController
    {
        //
        // GET: /User/Index/A

        public ActionResult Index(string index)
        {
            using (var db = new EntitiesContext())
            {
                UserSettings settings = this.GetSettingsFromCookie();
                // Debug.WriteLine($"User Index Begin: {settings.EditUserIndex},{index}");
                if (!index.IsEmpty()) settings.EditUserIndex = index;
                else index = settings.EditUserIndex;
                IQueryable<UserProfile> userProfiles = db.UserProfiles.Where(u => u.LastName.StartsWith(index)).OrderBy(u => u.LastName).ThenBy(u => u.FirstName);
                if (!settings.ShowHidden)
                {
                    userProfiles = userProfiles.Where(u => u.Status != UserStatus.Discontinued);
                }
                // Debug.WriteLine($"User Index End: {settings.EditUserIndex},{index}");
                this.SaveSettingsToCookie(settings);
                return View(userProfiles.ToList());
            }
        }

        //
        // AJAX: /User/BuildUserProfiles/

        [HttpPost]
        public ActionResult BuildUserProfiles()
        {
            using (var db = new EntitiesContext())
            {
                List<EmailList> emailList = db.EmailResults.ToList();
                System.Diagnostics.Debug.WriteLine($"User.BuildUserProfiles-{"EmailList table record count: "}{emailList.Count}");
                foreach (var email in emailList)
                {
                    System.Diagnostics.Debug.WriteLine($"User.BuildUserProfiles-{"Checking UserProfile: "}{email.EmailAddress}");
                    List<UserProfile> up = db.UserProfiles.Where(u => u.EmailAddress == email.EmailAddress.Trim()).Where(u => u.Status == UserStatus.Discontinued).ToList();
                    if (up.Count > 0)
                    {
                        foreach (var u in up)
                        {
                            System.Diagnostics.Debug.WriteLine($"User.BuildUserProfiles-{"Trying UserProfile email: "}{email.EmailAddress},{u.UserName},{u.Status}");
                            if (u.Status == UserStatus.Discontinued)
                            {
                                var userName = u.UserName;
                                string[] allRoles = Roles.GetRolesForUser(userName);
                                Roles.RemoveUserFromRoles(userName, allRoles);
                                ((SimpleMembershipProvider)Membership.Provider).DeleteAccount(userName);
                                Membership.Provider.DeleteUser(userName, true); // deletes record from webpages_Membership table
                                Membership.DeleteUser(userName, true); // deletes record from UserProfile table
                                System.Diagnostics.Debug.WriteLine($"User.BuildUserProfiles-{"Deleted UserProfile:"}{userName}");
                            }
                        }
                    }
                    else
                    {
                        try
                        {
                            string userName = email.EmailAddress;
                            string firstName = email.FirstName;
                            string lastName = email.LastName;
                            string userEmail = email.EmailAddress;
                            // --select EmailAddress, 'Public', FirstName, LastName, EmailAddress, '000-000-0000', 'None', 'Fayetteville', 'AR', '72701', 'United States', 4, '' from EmailLists
                            if (!WebSecurity.UserExists(userName)) { 
                                WebSecurity.CreateUserAndAccount(
                                    userName,
                                    "WtM!#%2016",
                                    new
                                    {
                                        UserRole = "Public",
                                        FirstName = firstName,
                                        LastName = lastName,
                                        EmailAddress = userEmail,
                                        Phone = "479-999-9999",
                                        StreetAddress = "1041 South School Street",
                                        City = "Fayetteville",
                                        State = "AR",
                                        PostalCode = "72703",
                                        Country = "United States",
                                        Status = UserStatus.Active,
                                        ContentList = ""
                                    });
                                if (!Roles.GetRolesForUser(userName).Contains("Public")) {
                                    Roles.AddUsersToRoles(new[] { userName }, new[] { "Public" });
                                    System.Diagnostics.Debug.WriteLine($"User.BuildUserProfiles-{"Added UserProfile:"},{userName}");
                                }
                            }
                        }
                        catch (System.Exception ex)
                        {
                            System.Diagnostics.Debug.WriteLine($"User.BuildUserProfiles-{"Added UserProfile:"},{email.EmailAddress}{ex.Message}");
                        }
                    }
                }
                ActionStatusViewModel vm = new ActionStatusViewModel();
                vm.Message = "This is a message.";
                return Json(vm);
            }
        }

        //
        // GET: /User/Details/5

        public ActionResult Details(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                UserProfile user = db.UserProfiles.Find(id);
                if (user == null)
                {
                    return HttpNotFound();
                }
                return View(user);
            }
        }

        //
        // GET: /User/Create

        public ActionResult Create()
        {
            ViewBag.Message = "This is a message.";
            return View(new UserProfile());
        }

        //
        // POST: /User/Create

        [HttpPost]
        public ActionResult Create(UserProfile user)
        {
            using (var db = new EntitiesContext())
            {
                if (ModelState.IsValid)
                {
                    // TODO: check if UserName exists
                    List<UserProfile> up = db.UserProfiles.Where(u => u.UserName == user.UserName.Trim()).ToList();
                    if ((up != null) && (up.Count > 0))
                    {
                    }
                    // TODO: check if EmailAddress exists
                    up = db.UserProfiles.Where(u => u.EmailAddress == user.EmailAddress.Trim()).ToList();
                    if ((up != null) && (up.Count > 0))
                    {
                    }
                    user.UserRole = "Active";
                    db.UserProfiles.Add(user);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }
                ViewBag.Message = "This is a message.";
                return View(user);
            }
        }

        //
        // GET: /User/Edit/5

        public ActionResult Edit(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                UserProfile user = db.UserProfiles.Find(id);
                AccountEditModel model = new AccountEditModel();
                if (user == null)
                {
                    return HttpNotFound();
                }
                else
                {
                    model.UserId = user.UserId;
                    model.UserName = user.UserName;
                    model.LastName = user.LastName;
                    model.FirstName = user.FirstName;
                    model.EmailAddress = user.EmailAddress;
                    model.Phone = user.Phone;
                    model.StreetAddress = user.StreetAddress;
                    model.City = user.City;
                    model.State = user.State;
                    model.PostalCode = user.PostalCode;
                    model.Country = user.Country;
                    if (Roles.GetRolesForUser(user.UserName).Contains("Administrator"))
                    {
                        model.UserType  = UserType.Administrator;
                    }
                    else if (Roles.GetRolesForUser(user.UserName).Contains("Partner"))
                    {
                        model.UserType = UserType.Partner;
                    }
                    else if (Roles.GetRolesForUser(user.UserName).Contains("Customer"))
                    {
                        model.UserType = UserType.Customer;
                    }
                    else if (Roles.GetRolesForUser(user.UserName).Contains("Public"))
                    {
                        model.UserType = UserType.Public;
                    }
                    model.Status = user.Status;
                }
                return View(model);
            }
        }

        //
        // POST: /User/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(AccountEditModel model)
        {
            using (var db = new EntitiesContext())
            {
                if (ModelState.IsValid)
                {
                    UserProfile user = db.UserProfiles.Find(model.UserId);
                    UserType userType = UserType.Unknown;
                    user.UserName = model.UserName;
                    user.LastName = model.LastName;
                    user.FirstName = model.FirstName;
                    user.EmailAddress = model.EmailAddress;
                    user.Phone = model.Phone;
                    user.StreetAddress = model.StreetAddress;
                    user.City = model.City;
                    user.State = model.State;
                    user.PostalCode = model.PostalCode;
                    user.Country = model.Country;
                    if (Roles.GetRolesForUser(user.UserName).Contains("Administrator"))
                    {
                        userType = UserType.Administrator;
                    }
                    else if (Roles.GetRolesForUser(user.UserName).Contains("Partner"))
                    {
                        userType = UserType.Partner;
                    }
                    else if (Roles.GetRolesForUser(user.UserName).Contains("Customer"))
                    {
                        userType = UserType.Customer;
                    }
                    else if (Roles.GetRolesForUser(user.UserName).Contains("Public"))
                    {
                        userType = UserType.Public;
                    }
                    db.Entry(user).State = EntityState.Modified;
                    db.SaveChanges();
                    if (userType == UserType.Unknown)
                    {
                        // the user role is unknown, that's bad
                    }
                    else if ((userType != model.UserType) && (WebSecurity.CurrentUserId != user.UserId))
                    {
                        // change the user role
                        string[] allRoles = Roles.GetRolesForUser(user.UserName);
                        Roles.RemoveUserFromRoles(user.UserName, allRoles);
                        Roles.AddUsersToRoles(new[] { user.UserName }, new[] { model.UserType.ToString() });
                    }
                    return RedirectToAction("Index");
                }
                return View(model);
            }
        }

        //
        // GET: /User/Delete/5

        public ActionResult Delete(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                UserProfile user = db.UserProfiles.Find(id);
                if (user == null)
                {
                    return HttpNotFound();
                }
                return View(user);
            }
        }

        //
        // POST: /User/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            using (var db = new EntitiesContext())
            {
                UserProfile user = db.UserProfiles.Find(id);
                if (user != null)
                {
                    List<Order> orders = db.Orders.Where(o => o.UserId == id).ToList();
                    if ((orders.Count == 0) && !Roles.GetRolesForUser(user.UserName).Contains("Administrator"))
                    {
                        string[] allRoles = Roles.GetRolesForUser(user.UserName);
                        Roles.RemoveUserFromRoles(user.UserName, allRoles);

                        ((SimpleMembershipProvider)Membership.Provider).DeleteAccount(user.UserName);
                        Membership.Provider.DeleteUser(user.UserName, true); // deletes record from webpages_Membership table
                        Membership.DeleteUser(user.UserName, true); // deletes record from UserProfile table
                    }
                }

                return RedirectToAction("Index");
            }
        }

        //
        // GET: /Account/ResetPassword

        [AllowAnonymous]
        public ActionResult ResetPassword(int userId)
        {
            ResetPasswordModel model = new ResetPasswordModel();
            using (var db = new EntitiesContext())
            {
                UserProfile user = db.UserProfiles.Find(userId);
                if (user != null)
                {
                    // Generate password token that will be used in the email link to authenticate user
                    var token = WebSecurity.GeneratePasswordResetToken(user.UserName);
                    // Generate the html link sent via email
                    model.Password = "WtM#@2050";
                    model.ConfirmPassword = "WtM#@2050";
                    model.ReturnToken = token;
                    return View(model);
                }
            }
            return HttpNotFound();
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
    }
}