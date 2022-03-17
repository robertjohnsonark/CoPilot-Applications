using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Security;
using System.Text;
using System.Web.Mvc;
using WebMatrix.WebData;
using OfficeOpenXml;
using OfficeOpenXml.Style;
using CoPilot.Models;
using CoPilot.ViewModels;

namespace CoPilot.Controllers
{

    [Authorize]
    public class OrderController : BaseController
    {
        private static readonly char[] Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToArray();

        //
        // GET: /Order/Index

        public ActionResult Index()
        {
            using (var db = new EntitiesContext())
            {
                int userId;
                UserProfile user = db.UserProfiles.FirstOrDefault(u => u.UserName.ToLower() == User.Identity.Name.ToLower());
                if (user != null)
                {
                    userId = user.UserId;
                    var orders =
                        db.Orders.Where(o => o.UserId == userId).OrderByDescending(o => o.OrderDate).ToList();
                    return View(orders);
                }
                else
                {
                    return HttpNotFound();
                }
            }
        }

        //
        // POST: /Order/AddToCart/5/1/

        [HttpPost]
        public ActionResult AddToCart(int id, int count)
        {
            using (var db = new EntitiesContext())
            {
                // check for user login errors
                int userId = WebSecurity.CurrentUserId;
                string username = db.UserProfiles.FirstOrDefault(u => u.UserId == userId)?.UserName;
                if ((userId == -1) || (username == null))
                {
                    return HttpNotFound();
                }
                // Retrieve the product from the database
                var addedProduct = db.Products.Single(product => product.ProductId == id);
                // Add it to the market basket
                var cart = ShoppingCart.GetCart(db, this.HttpContext);
                cart.AddToCart(addedProduct, count);
                db.SaveChanges();
                // return updated market basketinfo
                var results = new ShoppingCartMiniModel
                {
                    UserName = username,
                    CartCount = cart.GetCartItems().Count(),
                    CartSummary = string.Join("\n", cart.GetCartItems().Distinct()),
                    CartTotal = cart.GetTotal()
                };
                return Json(results);
            }
        }

        //
        // AJAX: /Order/RemoveFromCart/5

        [HttpPost]
        public ActionResult RemoveFromCart(int productId)
        {
            using (var db = new EntitiesContext())
            {
                // Retrieve the current user's market basket
                var cart = ShoppingCart.GetCart(db, this.HttpContext);
                if (cart.GetCount() > 0)
                {
                    // Get the name of the product to display confirmation
                    string productName = db.Carts.Single(item => item.RecordId == productId).Product.Title;
                    // Remove from cart
                    int itemCount = cart.RemoveFromCart(productId);
                    db.SaveChanges();
                    // string removed = (itemCount > 0) ? " 1 copy of " : string.Empty;
                    // Determine if remaining order details have weight
                    var allDetails = (from c in db.Carts where c.CartId == cart.ShoppingCartId select c).Include("Product");
                    int? checkWeight = 0;
                    checkWeight = (from o in allDetails where o.Product.SoldByWeight == true select o).Count();
                    bool hasWeight = checkWeight > 0;
                    // Display the confirmation message
                    var results = new ShoppingCartUpdateViewModel
                    {
                        Message = productName + " has been removed from your market basket.",
                        HasWeight = hasWeight,
                        CartTotal = cart.GetTotal(),
                        CartCount = cart.GetCount(),
                        ItemCount = itemCount,
                        DeleteId = productId
                    };
                    return Json(results);
                }
                else
                {
                    var results = new ShoppingCartUpdateViewModel
                    {
                        Message = "Your market basket is empty!",
                        HasWeight = false,
                        CartTotal = 0,
                        CartCount = 0,
                        ItemCount = 0,
                        DeleteId = 0
                    };
                    return Json(results);
                }
            }
        }

        //
        // AJAX: /Order/UpdateOrder/5

        [HttpPost]
        public ActionResult UpdateOrder(int orderId)
        {
            using (var db = new EntitiesContext())
            {
                // Retrieve the current user's market basket
                var cart = ShoppingCart.GetCart(db, this.HttpContext);
                // Update the Order
                Order order = db.Orders.Find(orderId);
                cart.UpdateOrderFromBasket(order);
                // Display the confirmation message
                bool isValid = OrderUpdate(orderId);
                if (isValid)
                {
                }
                return RedirectToAction("Details", new { id = order.OrderId });
            }
        }

        //
        // GET: /OrderReports/

        public ActionResult OrderReports()
        {
            using (var db = new EntitiesContext())
            {
                var orderDetails = db.OrderDetails.ToList();
                return View(orderDetails);
            }
        }

        //
        // GET: /Order/Edit/5

        public ActionResult Edit(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                ViewBag.StatusMessage = "";
                Order order = db.Orders.Find(id);
                if (order == null)
                {
                    return HttpNotFound();
                }
                order.OrderDetails = db.OrderDetails.Include("Product.Partner").Where(a => a.OrderId == id).ToList();
                // Validate customer owns this order
                var cart = ShoppingCart.GetCart(db, this.HttpContext);
                // Set up our ViewModel
                // Models/ShoppingCart.cs contains the cart.Get methods
                var cartItems = cart.GetCartItems();
                List<ProductSummary> products = new List<ProductSummary>();
                foreach (var cartItem in cartItems)
                {
                    products.Add(new ProductSummary
                    {
                        RecordId = cartItem.RecordId,
                        ProductId = cartItem.ProductId,
                        PartnerId = cartItem.Product.PartnerId,
                        SoldByWeight = cartItem.Product.SoldByWeight,
                        PartnerName = cartItem.Product.Partner.Name,
                        Title = cartItem.Product.Title,
                        Count = cartItem.Count,
                        Units = cartItem.Product.Units,
                        Price = cartItem.Product.Price,
                        Total = (cartItem.Count * cartItem.Product.Price)
                    });
                }
                if (products.Any())
                {
                    ViewBag.StatusMessage = "You have items in your cart";
                }
                // add user info 
                int userId = -1;
                UserProfile user = null;
                userId = WebSecurity.CurrentUserId;
                if (userId != -1)
                {
                    user = db.UserProfiles.FirstOrDefault(up => up.UserId == userId);
                    ViewBag.UserId = userId;
                    ViewBag.FullName = user.FullName;
                    ViewBag.FirstName = user.FirstName;
                    ViewBag.LastName = user.LastName;
                    ViewBag.EmailAddress = user.EmailAddress;
                    ViewBag.Phone = user.Phone;
                }
                return View(order);
            }
        }

        //
        // POST: /Order/Edit/

        [HttpPost]
        public ActionResult Edit(List<OrderDetailsUpdateViewModel> model)
        {
            using (var db = new EntitiesContext())
            {
                int orderId = 0;
                foreach (var detail in model)
                {
                    OrderDetail orderDetail = db.OrderDetails.Find(detail.OrderDetailId);
                    if (orderDetail != null)
                    {
                        orderDetail.Quantity = detail.Quantity;
                        orderId = orderDetail.OrderId;
                        db.SaveChanges();
                    }
                }
                // Multiply product price by count of that product to get 
                // the current price for each of those products in the cart
                // sum all product price totals to get the cart total
                Order order = db.Orders.Find(orderId);
                decimal? total = decimal.Zero;
                total =
                    (from o in db.OrderDetails
                     where o.OrderId == orderId
                     select (int?)o.Quantity * o.Product.Price).Sum();
                if (total == null)
                {
                    total = decimal.Zero;
                }
                order.Total = (decimal)total;
                db.Entry(order).State = EntityState.Modified;
                db.SaveChanges();

                var results = new
                {
                    id = orderId
                };
                return Json(results);
                // return RedirectToAction("Complete", "Order",  new { id = orderId });
            }
        }

        //
        // GET: /Order/Details/5

        public ActionResult Details(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                Order order = db.Orders.Find(id);
                if (order == null)
                {
                    return HttpNotFound();
                }
                order.OrderDetails = db.OrderDetails.Include("Product.Partner").Where(a => a.OrderId == id).ToList();
                // add user info 
                int userId = -1;
                userId = WebSecurity.CurrentUserId;
                if (userId != -1)
                {
                    UserProfile user = db.UserProfiles.FirstOrDefault(up => up.UserId == userId);
                    ViewBag.UserId = userId;
                    ViewBag.FullName = user.FullName;
                    ViewBag.FirstName = user.FirstName;
                    ViewBag.LastName = user.LastName;
                    ViewBag.EmailAddress = user.EmailAddress;
                    ViewBag.Phone = user.Phone;
                }
                return View(order);
            }
        }

        //
        // GET: /Order/Delete/5

        public ActionResult Delete(int id = 0)
        {
            using (var db = new EntitiesContext())
            {
                Order order = db.Orders.Find(id);
                if (order == null)
                {
                    return HttpNotFound();
                }
                else
                {
                    return View(order);
                }
            }
        }

        //
        // POST: /Order/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            using (var db = new EntitiesContext())
            {
                bool isValid = OrderDeleteEmail(id);
                Order order = db.Orders.Find(id);
                db.Orders.Remove(order);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }

        //
        // AJAX: /Order/RemoveFromOrder/5/2

        [HttpPost]
        public ActionResult RemoveFromOrder(int orderId, int orderDetailsId)
        {
            using (var db = new EntitiesContext())
            {
                int productId = 0;
                string message = "Unknown Error";
                // Validate customer owns this order
                Order order = db.Orders.FirstOrDefault(o => o.OrderId == orderId && o.UserName == User.Identity.Name);
                if (order != null)
                {
                    OrderDetail detail = db.OrderDetails.Find(orderDetailsId);
                    productId = detail.ProductId;
                    db.OrderDetails.Remove(detail);
                    db.SaveChanges();
                    // Multiply product price by count of that product to get 
                    // the current price for each of those products in the cart
                    // sum all product price totals to get the cart total
                    decimal? total = decimal.Zero;
                    total =
                        (from o in db.OrderDetails
                         where o.OrderId == orderId
                         select (int?)o.Quantity * o.Product.Price).Sum();
                    if (total == null)
                    {
                        total = decimal.Zero;
                    }
                    order.Total = (decimal)total;
                    db.Entry(order).State = EntityState.Modified;
                    db.SaveChanges();
                }
                if (productId > 0)
                {
                    Product product = db.Products.Find(productId);
                    message = String.Format("One {0} has been removed from your market basket.", product.Title);
                }
                // Determine if remaining order details have weight
                var allDetails = (from o in db.OrderDetails where o.OrderId == orderId select o).Include("Product");
                int? checkWeight = 0;
                checkWeight = (from o in allDetails where o.Product.SoldByWeight == true select o).Count();
                bool hasWeight = checkWeight > 0;
                // Display the confirmation message
                var results = new OrderDetailsRemoveViewModel
                {
                    Message = message,
                    HasWeight = hasWeight,
                    ItemCount = 0,
                    OrderTotal = order.Total,
                    DeleteId = orderDetailsId
                };
                return Json(results);
            }
        }

        //
        // GET: /Order/Review

        public ActionResult Review()
        {
            using (var db = new EntitiesContext())
            {
                ViewBag.StatusMessage = "";
                var cart = ShoppingCart.GetCart(db, this.HttpContext);
                // Set up our ViewModel
                // Models/ShoppingCart.cs contains the cart.Get methods
                bool chkHasWeight = false;
                var cartItems = cart.GetCartItems();
                List<ProductSummary> products = new List<ProductSummary>();
                foreach (var cartItem in cartItems)
                {
                    products.Add(new ProductSummary
                    {
                        RecordId = cartItem.RecordId,
                        ProductId = cartItem.ProductId,
                        PartnerId = cartItem.Product.PartnerId,
                        SoldByWeight = cartItem.Product.SoldByWeight,
                        PartnerName = cartItem.Product.Partner.Name,
                        Title = cartItem.Product.Title,
                        Count = cartItem.Count,
                        Units = cartItem.Product.Units,
                        Price = cartItem.Product.Price,
                        Total = (cartItem.Count * cartItem.Product.Price)
                    });
                    if (cartItem.Product.SoldByWeight) chkHasWeight = true;
                }
                var model = new ShoppingCartViewModel
                {
                    HasWeight = chkHasWeight,
                    CartItems = products,
                    CartTotal = cart.GetTotal(),
                    CartCount = cartItems.Count,
                };
                // add user info
                int userId = -1;
                UserProfile user = null;
                userId = WebSecurity.CurrentUserId;
                if (userId != -1)
                {
                    user = db.UserProfiles.FirstOrDefault(up => up.UserId == userId);
                    ViewBag.UserId = userId;
                    ViewBag.FullName = user.FullName;
                    ViewBag.FirstName = user.FirstName;
                    ViewBag.LastName = user.LastName;
                    ViewBag.EmailAddress = user.EmailAddress;
                    ViewBag.Phone = user.Phone;
                }
                // check if we already have orders here
                // Validate customer owns this order
                Order order =
                    db.Orders.Where(o => o.EventId == AppEvent.EventId)
                        .FirstOrDefault(o => o.UserName == user.UserName);
                if (cartItems.Count == 0)
                {
                    ViewBag.StatusMessage = "Your basket is empty!";
                }
                else if (order != null)
                {
                    ViewBag.StatusMessage = "You already have an order open for this market. Click the Add Basket to Order button below to add additional items to your total pre-order.";
                }
                else
                {
                    Debug.WriteLine("No Current Order: {0}", DateTime.Now.ToLongTimeString());
                }

                if (order != null)
                {
                    model.OrderId = order.OrderId;
                    order.OrderDetails = db.OrderDetails.Where(a => a.OrderId == order.OrderId).ToList();
                    Debug.WriteLine("Exisiting Order: {0} {1} {2} {3}", order.LastName, order.OrderId, order.OrderDate, order.EmailAddress);
                }

                Debug.WriteLine("Review Cart: {0} {1} {2} {3}", model.CartId, model.DateCreated, model.CartCount,
                    model.CartTotal);
                // Return the view
                return View(model);
            }
        }

        //
        // GET: /Order/Checkout/

        public ActionResult Confirm()
        {
            using (var db = new EntitiesContext())
            {
                // Lookup user UserName in the database
                UserProfile user =
                    db.UserProfiles.FirstOrDefault(u => u.UserName.ToLower() == User.Identity.Name.ToLower());

                Order order =
                    db.Orders.Where(o => o.EventId == AppEvent.EventId)
                        .FirstOrDefault(o => o.UserName == user.UserName) ?? new Order();
                var cart = ShoppingCart.GetCart(db, this.HttpContext);
                order.Total = cart.GetTotal();
                if (user != null)
                {
                    ViewBag.UserId = user.UserId;
                    ViewBag.FullName = user.FullName;
                    ViewBag.FirstName = user.FirstName;
                    ViewBag.LastName = user.LastName;
                    ViewBag.EmailAddress = user.EmailAddress;
                    ViewBag.Phone = user.Phone;
                    order.EventId = AppEvent.EventId;
                    order.UserId = user.UserId;
                    order.UserName = user.UserName;
                    order.LastName = user.LastName;
                    order.FirstName = user.FirstName;
                    order.Address = user.StreetAddress;
                    order.City = user.City;
                    order.State = user.State;
                    order.PostalCode = user.PostalCode;
                    order.Country = user.Country;
                    order.Phone = user.Phone;
                    order.EmailAddress = user.EmailAddress;
                }
                else
                {
                    ModelState.AddModelError("UserName", "Error, order user name does not exist.");
                }
                return View(order);
            }
        }

        //
        // POST: /Checkout/AddressAndPayment

        [HttpPost]
        public ActionResult Confirm(FormCollection values)
        {
            using (var db = new EntitiesContext())
            {

                // Lookup user UserName in the database
                UserProfile user =
                    db.UserProfiles.FirstOrDefault(u => u.UserName.ToLower() == User.Identity.Name.ToLower());
                if (user == null)
                {
                    //Invalid - redisplay with errors
                    return View();
                }
                // Validate customer owns this order
                Order order =
                    db.Orders.Where(o => o.EventId == AppEvent.EventId)
                        .FirstOrDefault(o => o.UserName == user.UserName) ?? new Order();
                TryUpdateModel(order);
                try
                {
                    order.EventId = AppEvent.EventId;
                    order.UserId = user.UserId;
                    order.UserName = User.Identity.Name;
                    order.LastName = user.LastName;
                    order.FirstName = user.FirstName;
                    order.Address = user.StreetAddress;
                    order.City = user.City;
                    order.State = user.State;
                    order.PostalCode = user.PostalCode;
                    order.Country = user.Country;
                    order.Phone = user.Phone;
                    order.EmailAddress = user.EmailAddress;
                    order.OrderDate = DateTime.Now;
                    DateTime timeNow = DateTime.Now;
                    try
                    {
                        TimeZoneInfo centralZone = TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time");
                        DateTime centralTimeNow = TimeZoneInfo.ConvertTime(timeNow, TimeZoneInfo.Local,
                            centralZone);
                        Debug.WriteLine("{0} {1} corresponds to {2} {3}.",
                            timeNow,
                            TimeZoneInfo.Local.IsDaylightSavingTime(timeNow)
                                ? TimeZoneInfo.Local.DaylightName
                                : TimeZoneInfo.Local.StandardName,
                            centralTimeNow,
                            centralZone.IsDaylightSavingTime(centralTimeNow)
                                ? centralZone.DaylightName
                                : centralZone.StandardName);
                        order.OrderDate = centralTimeNow;
                    }
                    // Handle exception 
                    // 
                    // As an alternative to simply displaying an error message, an alternate Eastern 
                    // Standard Time TimeZoneInfo object could be instantiated here either by restoring 
                    // it from a serialized string or by providing the necessary data to the 
                    // CreateCustomTimeZone method. 
                    catch (TimeZoneNotFoundException)
                    {
                        Debug.WriteLine("The Eastern Standard Time Zone cannot be found on the local system.");
                    }
                    catch (InvalidTimeZoneException)
                    {
                        Debug.WriteLine("The Eastern Standard Time Zone contains invalid or missing data.");
                    }
                    catch (SecurityException)
                    {
                        Debug.WriteLine(
                            "The application lacks permission to read time zone information from the registry.");
                    }
                    catch (OutOfMemoryException)
                    {
                        Debug.WriteLine(
                            "Not enough memory is available to load information on the Eastern Standard Time zone.");
                    }
                    // If we weren't passing FindSystemTimeZoneById a literal string, we also  
                    // would handle an ArgumentNullException.
                    //Add the Order
                    db.Orders.Add(order);

                    //Process the order
                    var cart = ShoppingCart.GetCart(db, this.HttpContext);
                    cart.CreateOrder(order);

                    // Save all changes
                    db.SaveChanges();

                    return RedirectToAction("Complete", new { id = order.OrderId });
                }

                catch
                {
                    //Invalid - redisplay with errors
                    return View(order);
                }
            }
        }

        //
        // GET: /Checkout/Complete

        public ActionResult Complete(int id)
        {
            using (var db = new EntitiesContext())
            {
                bool isValid = OrderUpdate(id);
                if (isValid)
                {
                    Order order = db.Orders.Find(id);
                    order.OrderDetails = db.OrderDetails.Include("Product.Partner").Where(a => a.OrderId == id).ToList();
                    // Lookup user UserName in the database
                    UserProfile user = db.UserProfiles.FirstOrDefault(u => u.UserName.ToLower() == User.Identity.Name.ToLower());
                    if (user != null)
                    {
                        ViewBag.UserId = user.UserId;
                        ViewBag.FullName = user.FullName;
                        ViewBag.FirstName = user.FirstName;
                        ViewBag.LastName = user.LastName;
                        ViewBag.EmailAddress = user.EmailAddress;
                        ViewBag.Phone = user.Phone;
                    }
                    return View(order);
                }
                else
                {
                    return View("Error");
                }
            }
        }

        // /OrderUpdate/5

        public bool OrderUpdate(int orderId)
        {
            using (var db = new EntitiesContext())
            {
                // Validate customer owns this order
                bool isValid = db.Orders.Any(o => o.OrderId == orderId && o.UserName == User.Identity.Name);
                decimal grandTotalPrice = 0;
                string itemTotalPrice = "";
                string grandTotalPriceString = "";
                bool hasWeight = false;
                if (isValid)
                {
                    UserProfile user =
                        db.UserProfiles.FirstOrDefault(u => u.UserName.ToLower() == User.Identity.Name.ToLower());
                    StringBuilder sb = new StringBuilder();
                    sb.Append("<html>");
                    sb.AppendFormat("<p>THANK-YOU {0} FOR YOUR PRE-ORDER!</p>", user.FullName);
                    sb.Append("<p>Your pre-ordered items will be available on Saturday between 9AM and 12 Noon");
                    sb.Append(" at the Wren Thicket Market location, 1041 S. School Ave. in Fayetteville.</p>");
                    sb.Append("<p>Please visit each farm or artisan’s table to pick up the pre-ordered items.</p>");
                    sb.Append(
                        "<p>If a vendor is unable to be at the market that day, please check with the manager, your pre-order will likely be there.</p>");
                    sb.Append("<p>Payment is made directly to the farm or artisan at pick up. Payment can be cash ");
                    sb.Append("or check. Some vendors do accept credit/debit cards. SNAP/EBT customers please ");
                    sb.Append("see the market manager before visiting farm vendors.</p>");
                    sb.Append("<p>Any questions or comments please email Deb, market manager, ");
                    sb.Append(
                        "<span><a href=\"mailto:manager@wrenthicketmarket.com\">Manager@WrenThicketMarket.com</a></span>");
                    sb.Append("<p>Pre Order Market Basket</p>");
                    Order order = db.Orders.Find(orderId);
                    order.OrderDetails = db.OrderDetails.Where(a => a.OrderId == orderId).ToList();
                    // Loop over order details
                    sb.Append("<table border=1>");
                    sb.Append(
                        "<tr style='font-weight: bold'><td width=200>Partner</td><td width=200>Product</td><td width=80>Quantity</td><td width=80>Price (each)</td><td width=80>Total Price</td></tr>");
                    foreach (OrderDetail detail in order.OrderDetails)
                    {
                        sb.Append("<tr>");
                        grandTotalPrice = grandTotalPrice + (detail.Quantity * detail.UnitPrice);
                        if (detail.Product.SoldByWeight)
                        {
                            hasWeight = true;
                            itemTotalPrice = "TBD";
                        }
                        else
                        {
                            itemTotalPrice = (detail.Quantity * detail.UnitPrice).ToString("C");
                        }
                        sb.Append(
                            String.Format(
                                "<td>{0}</td><td>{1}</td><td>{2}</td><td style='text-align: right;'>{3}</td><td style='text-align: right;'>{4}</td>",
                                detail.Product.Partner.Name, detail.Product.Title, detail.Quantity,
                                detail.UnitPrice, itemTotalPrice));
                        sb.Append("</tr>");
                    }
                    grandTotalPriceString = hasWeight ? "TBD" : grandTotalPrice.ToString("C");
                    sb.Append(
                        String.Format(
                            "<tr><td></td><td></td><td></td><td></td><td style='text-align: right;'>{0}</td></tr>",
                            grandTotalPriceString));
                    sb.Append("</table>");
                    sb.Append(
                        "<p><b>TBD: Please note! Most meat prices are per pound, actual price will vary depending on weight of package.</b></p>");
                    sb.Append("</html>");
                    SendEmail(@"manager@wrenthicketmarket.com", @"Wren Thicket Market Order", sb.ToString(), @"");
                    SendEmail(user.EmailAddress, @"Wren Thicket Market Order", sb.ToString(), @"");
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        // /OrderDeleteEmail/5

        public bool OrderDeleteEmail(int orderId)
        {
            using (var db = new EntitiesContext())
            {
                // Validate customer owns this order
                bool isValid = db.Orders.Any(o => o.OrderId == orderId && o.UserName == User.Identity.Name);
                if (isValid)
                {
                    UserProfile user =
                        db.UserProfiles.FirstOrDefault(u => u.UserName.ToLower() == User.Identity.Name.ToLower());
                    StringBuilder sb = new StringBuilder();
                    sb.Append("<html>");
                    sb.Append("<p><b>Your order has been cancelled!</b></p>");
                    sb.Append("<p>If you have any questions or comments please email Deb, market manager, ");
                    sb.Append(
                        "<span><a href=\"mailto:manager@wrenthicketmarket.com\">Manager@WrenThicketMarket.com</a></span>");
                    sb.Append("</html>");
                    SendEmail(@"manager@wrenthicketmarket.com", @"Wren Thicket Market Order", sb.ToString(), @"");
                    SendEmail(user.EmailAddress, @"Wren Thicket Market Order Cancelled", sb.ToString(), @"");
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        //
        // GET: /WeeklyOrderReport/

        public ActionResult WeeklyOrderReport()
        {
            using (var db = new EntitiesContext())
            {
                List<Order> orders = new List<Order>();
                List<OrderSummary> orderSummary = new List<OrderSummary>();
                orders = db.Orders.Where(g => g.EventId == AppEvent.EventId).OrderBy(g => g.OrderDate).ToList();
                foreach (var order in orders)
                {
                    var orderDetails = db.OrderDetails.Where(g => g.OrderId == order.OrderId).ToList();
                    foreach (var detail in orderDetails)
                    {
                        orderSummary.Add(new OrderSummary
                        {
                            ProductTitle = detail.Product.Title,
                            PartnerName = detail.Product.Partner.Name,
                            OrderDate = order.OrderDate,
                            LastName = order.LastName,
                            FirstName = order.FirstName,
                            Total = detail.Quantity * detail.UnitPrice,
                            Quantity = detail.Quantity,
                            Price = detail.UnitPrice,
                            UserId = order.UserId
                        });
                    }
                }
                return View(orderSummary);
            }
        }

        //
        // GET: /WeeklyVendorReport/

        public ActionResult WeeklyVendorReport()
        {
            using (var db = new EntitiesContext())
            {
                List<Partner> partners = new List<Partner>();
                List<OrderSummary> orderSummary = new List<OrderSummary>();
                partners = db.Partners.OrderBy(g => g.Name).ToList();
                foreach (var partner in partners)
                {
                    var orderDetails =
                        db.OrderDetails.Include("Order")
                            .Include("Product")
                            .Where(g => g.Order.EventId == AppEvent.EventId)
                            .Where(g => g.Product.PartnerId == partner.PartnerId)
                            .ToList();
                    foreach (var detail in orderDetails)
                    {
                        orderSummary.Add(new OrderSummary
                        {
                            ProductTitle = detail.Product.Title,
                            PartnerName = detail.Product.Partner.Name,
                            OrderDate = detail.Order.OrderDate,
                            LastName = detail.Order.LastName,
                            FirstName = detail.Order.FirstName,
                            Total = detail.Quantity * detail.UnitPrice,
                            Quantity = detail.Quantity,
                            Price = detail.UnitPrice,
                            UserId = detail.Order.UserId
                        });
                    }
                }
                return View(orderSummary);
            }
        }

        public static Int32 ToOneBasedIndex(String name)
        {
            return name.ToUpper().Aggregate(0, (column, letter) => 26 * column + letter - 'A' + 1);
        }

        /// <summary>
        /// Gets the Excel-style column letter for the specified numerical index (e.g. 4 is D, 26 is Z, 27 is AA, 28 is AB...).
        /// </summary>
        /// <param name="columnName">The numerical index of the column.</param>
        /// <returns>The corresponding Excel-style column letter.</returns>
        public long GetColumnNumber(String columnName)
        {
            char[] chars = columnName.ToUpper().ToCharArray();

            return (long)(Math.Pow(26, chars.Count() - 1)) *
                (System.Convert.ToInt32(chars[0]) - 64) +
                ((chars.Count() > 2) ? GetColumnNumber(columnName.Substring(1, columnName.Length - 1)) :
                ((chars.Count() == 2) ? (System.Convert.ToInt32(chars[chars.Count() - 1]) - 64) : 0));
        }

        /// <summary>
        /// Gets the Excel-style column letter for the specified numerical index (e.g. 4 is D, 26 is Z, 27 is AA, 28 is AB...).
        /// </summary>
        /// <param name="column">The numerical index of the column.</param>
        /// <returns>The corresponding Excel-style column letter.</returns>
        private static string GetColumnLetter(int column)
        {
            if (column <= Letters.Length)
            {
                return Letters[column - 1].ToString();
            }

            var number = column;
            string letter = string.Empty;

            while (number > 0)
            {
                var remainder = (number - 1) % Letters.Length;
                letter = Letters[remainder] + letter;
                number = (number - remainder) / Letters.Length;
            }

            return letter;
        }

        public ActionResult SendManagerReport()
        {
            using (var db = new EntitiesContext())
            {
                // get the Customers report data
                int count = 1;
                List<Order> orders = new List<Order>();
                List<CustomerOrderSummary> customerOrderSummary = new List<CustomerOrderSummary>();
                orders = db.Orders.Where(g => g.EventId == AppEvent.EventId).OrderBy(g => g.OrderDate).ToList();
                foreach (var order in orders)
                {
                    int itemCount = 0;
                    decimal subTotal = 0;
                    var orderDetails = db.OrderDetails.Where(g => g.OrderId == order.OrderId).ToList();
                    foreach (var detail in orderDetails)
                    {
                        customerOrderSummary.Add(new CustomerOrderSummary
                        {
                            LastName = order.LastName,
                            FirstName = order.FirstName,
                            PartnerName = detail.Product.Partner.Name,
                            OrderDate = order.OrderDate,
                            ProductTitle = detail.Product.Title,
                            Quantity = detail.Quantity,
                            Units = detail.Product.Units,
                            Price = detail.UnitPrice,
                            Total = detail.Quantity * detail.UnitPrice
                        });
                        int index = customerOrderSummary.Count;
                        if (itemCount > 0)
                        {
                            customerOrderSummary[index - 1].LastName = "";
                            customerOrderSummary[index - 1].FirstName = "";
                        }
                        itemCount += detail.Quantity;
                        subTotal += detail.Quantity * detail.UnitPrice;
                    }
                    // added customer count to Totals row
                    customerOrderSummary.Add(new CustomerOrderSummary
                    {
                        LastName = count.ToString() + " - " + "Total",
                        FirstName = "",
                        PartnerName = "",
                        OrderDate = AppEvent.EventDateTime,
                        ProductTitle = "",
                        Quantity = itemCount,
                        Units = "",
                        Price = 0,
                        Total = subTotal
                    });
                    count++;
                }

                // build Vendor Order Details data
                List<VendorOrderSummary> vendorOrderSummary = new List<VendorOrderSummary>();
                List<Partner> partners = db.Partners.OrderBy(g => g.Name).ToList();
                foreach (var partner in partners)
                {
                    int itemCount = 0;
                    decimal subTotal = 0;
                    var orderDetails =
                        db.OrderDetails.Include("Order")
                            .Include("Product")
                            .Where(g => g.Order.EventId == AppEvent.EventId)
                            .Where(g => g.Product.PartnerId == partner.PartnerId)
                            .ToList();
                    foreach (var detail in orderDetails)
                    {
                        vendorOrderSummary.Add(new VendorOrderSummary
                        {
                            PartnerName = detail.Product.Partner.Name,
                            LastName = detail.Order.LastName,
                            FirstName = detail.Order.FirstName,
                            OrderDate = detail.Order.OrderDate,
                            ProductTitle = detail.Product.Title,
                            Quantity = detail.Quantity,
                            Units = detail.Product.Units,
                            Price = detail.UnitPrice,
                            Total = detail.Quantity * detail.UnitPrice
                        });
                        int index = vendorOrderSummary.Count;
                        if (itemCount > 0)
                        {
                            vendorOrderSummary[index - 1].PartnerName = "";
                        }
                        itemCount += detail.Quantity;
                        subTotal += detail.Quantity * detail.UnitPrice;
                    }
                    if (itemCount > 0)
                    {
                        vendorOrderSummary.Add(new VendorOrderSummary
                        {
                            PartnerName = "Total",
                            LastName = "",
                            FirstName = "",
                            OrderDate = AppEvent.EventDateTime,
                            ProductTitle = "",
                            Quantity = itemCount,
                            Units = "",
                            Price = 0,
                            Total = subTotal
                        });
                    }
                }

                // build Vendor Product Details data
                List<VendorProductSummary> vendorProductSummary = new List<VendorProductSummary>();
                foreach (var partner in partners)
                {
                    var orderDetails =
                        db.OrderDetails.Where(
                            g => g.Product.PartnerId == partner.PartnerId && g.Order.EventId == AppEvent.EventId)
                            .OrderBy(g => g.Product.Title)
                            .ToList();

                    var partnerDetails = from detail in orderDetails
                                         group detail by new { ProductTitle = detail.Product.Title, Units = detail.Product.Units } into grouping
                                         select new { grouping.Key.ProductTitle, grouping.Key.Units, Quantity = grouping.Sum(s => s.Quantity) };
                    int i = 0;
                    foreach (var detail in partnerDetails)
                    {
                        var partnerName = partner.Name;
                        if (i > 0) partnerName = "";
                        vendorProductSummary.Add(new VendorProductSummary
                        {
                            PartnerName = partnerName,
                            ProductTitle = detail.ProductTitle,
                            Units = detail.Units,
                            Quantity = detail.Quantity
                        });
                        i++;
                    }
                }

                byte[] bytes;

                using (ExcelPackage excelPackage = new ExcelPackage())
                {
                    // Create the Customers report worksheet
                    ExcelWorksheet wsCustomers = excelPackage.Workbook.Worksheets.Add("Customer Orders");
                    DataTable dt = new DataTable();
                    // Get Customers CustomerOrderSummary Properties (column names)
                    var props = typeof(CustomerOrderSummary).GetProperties();
                    // Add Customers CustomerOrderSummary Properties (column names) to DataTable
                    dt.Columns.AddRange(
                      props.Select(p => new DataColumn(p.Name, p.PropertyType)).ToArray()
                    );
                    // Copy Customers CustomerOrderSummary rows to DataTable
                    customerOrderSummary.ToList().ForEach(i => dt.Rows.Add(props.Select(p => p.GetValue(i, null)).ToArray()));
                    // Load the datatable into the sheet, starting from cell A1. Print the column names on row 1
                    wsCustomers.Cells["A1"].LoadFromDataTable(dt, true);
                    // Format wsCustomers

                    // Format the header for column A-L
                    using (ExcelRange rng = wsCustomers.Cells["A1:I1"])
                    {
                        rng.Style.Font.Bold = true;
                        // Set Pattern for the background to Solid
                        rng.Style.Fill.PatternType = ExcelFillStyle.Solid;
                        // Set color to light grey
                        rng.Style.Fill.BackgroundColor.SetColor(Color.FromArgb(200, 200, 200));
                        rng.Style.Font.Color.SetColor(Color.Black);
                    }
                    // Format Columns 8 and 9 as currency
                    using (ExcelRange col = wsCustomers.Cells[2, 8, 2 + dt.Rows.Count, 9])
                    {
                        col.Style.Numberformat.Format = "$###,###,##0.00";
                        col.Style.HorizontalAlignment = ExcelHorizontalAlignment.Right;
                    }
                    var start = wsCustomers.Dimension.Start;
                    var end = wsCustomers.Dimension.End;
                    for (int row = start.Row + 1; row <= end.Row; row++)
                    {
                        // Row by row...
                        //for (int col = start.Column; col <= end.Column; col++)
                        //{ // ... Cell by cell...
                        //    object cellValue = wsVendors.Cells[row, col].Text; // This got me the actual value I needed.
                        //}
                        object cellValue = wsCustomers.Cells[row, 8].Value; // This got me the actual value I needed.
                        if (Convert.ToSingle(cellValue) == 0.0)
                        {
                            wsCustomers.Cells[row, 4].Value = "";
                            wsCustomers.Cells[row, 8].Value = "";
                            wsCustomers.Cells[row, 1, row, 9].Style.Fill.PatternType =
                                OfficeOpenXml.Style.ExcelFillStyle.Solid;
                            wsCustomers.Cells[row, 1, row, 9].Style.Fill.BackgroundColor.SetColor(Color.LightGray);
                        }
                        cellValue = wsCustomers.Cells[row, 9].Value; // This got me the actual value I needed.
                        // logic flaw, find the empty row
                        if (Convert.ToSingle(cellValue) == 0.0)
                        {
                            wsCustomers.DeleteRow(row);
                        }
                    }
                    // Format Column 4 as Custom Date
                    using (ExcelRange col = wsCustomers.Cells[2, 4, 2 + dt.Rows.Count, 4])
                    {
                        col.Style.Numberformat.Format = "MM/dd/yyyy HH:mm";
                        col.Style.HorizontalAlignment = ExcelHorizontalAlignment.Right;
                    }
                    wsCustomers.Cells.AutoFitColumns();

                    // Create the Vendors report worksheet
                    ExcelWorksheet wsVendors = excelPackage.Workbook.Worksheets.Add("Vendor Orders");
                    dt = new DataTable();
                    // Get Vendor OrderSummary Properties (column names)
                    props = typeof(VendorOrderSummary).GetProperties();
                    // Add Vendor OrderSummary Properties (column names) to DataTable
                    dt.Columns.AddRange(
                      props.Select(p => new DataColumn(p.Name, p.PropertyType)).ToArray()
                    );
                    // Copy Vendor OrderSummary rows to DataTable
                    vendorOrderSummary.ToList().ForEach(i => dt.Rows.Add(props.Select(p => p.GetValue(i, null)).ToArray()));
                    // Load the datatable into the sheet, starting from cell A1. Print the column names on row 1
                    wsVendors.Cells["A1"].LoadFromDataTable(dt, true);
                    // Format the header for column A-L
                    using (ExcelRange rng = wsVendors.Cells["A1:I1"])
                    {
                        rng.Style.Font.Bold = true;
                        // Set Pattern for the background to Solid
                        rng.Style.Fill.PatternType = ExcelFillStyle.Solid;
                        // Set color to light grey
                        rng.Style.Fill.BackgroundColor.SetColor(Color.FromArgb(200, 200, 200));
                        rng.Style.Font.Color.SetColor(Color.Black);
                    }
                    // Format Columns 8 and 9 as currency
                    using (ExcelRange col = wsVendors.Cells[2, 8, 2 + dt.Rows.Count, 9])
                    {
                        col.Style.Numberformat.Format = "$###,###,##0.00";
                        col.Style.HorizontalAlignment = ExcelHorizontalAlignment.Right;
                    }
                    start = wsVendors.Dimension.Start;
                    end = wsVendors.Dimension.End;
                    for (int row = start.Row + 1; row <= end.Row; row++)
                    { // Row by row...
                        //for (int col = start.Column; col <= end.Column; col++)
                        //{ // ... Cell by cell...
                        //    object cellValue = wsVendors.Cells[row, col].Text; // This got me the actual value I needed.
                        //}
                        object cellValue = wsVendors.Cells[row, 8].Value; // This got me the actual value I needed.
                        if (Convert.ToSingle(cellValue) == 0.0)
                        {
                            wsVendors.Cells[row, 4].Value = "";
                            wsVendors.Cells[row, 8].Value = "";
                            wsVendors.Cells[row, 1, row, 9].Style.Fill.PatternType = OfficeOpenXml.Style.ExcelFillStyle.Solid;
                            wsVendors.Cells[row, 1, row, 9].Style.Fill.BackgroundColor.SetColor(Color.LightGray);
                        }
                    }
                    // Format Column 4 as Custom Date
                    using (ExcelRange col = wsVendors.Cells[2, 4, 2 + dt.Rows.Count, 4])
                    {
                        col.Style.Numberformat.Format = "MM/dd/yyyy HH:mm";
                        col.Style.HorizontalAlignment = ExcelHorizontalAlignment.Right;
                    }
                    wsVendors.Cells.AutoFitColumns();

                    // Create the Vendors report worksheet
                    ExcelWorksheet wsVendorProducts = excelPackage.Workbook.Worksheets.Add("Vendor Products");
                    dt = new DataTable();
                    // Get Vendor Product Summary Properties (column names)
                    props = typeof(VendorProductSummary).GetProperties();
                    // Add Vendor Product Summary Properties (column names) to DataTable
                    dt.Columns.AddRange(
                      props.Select(p => new DataColumn(p.Name, p.PropertyType)).ToArray()
                    );
                    // Copy Vendor OrderSummary rows to DataTable
                    vendorProductSummary.ToList().ForEach(i => dt.Rows.Add(props.Select(p => p.GetValue(i, null)).ToArray()));
                    // Load the datatable into the sheet, starting from cell A1. Print the column names on row 1
                    wsVendorProducts.Cells["A1"].LoadFromDataTable(dt, true);
                    // Format the header for column A-L
                    using (ExcelRange rng = wsVendorProducts.Cells["A1:D1"])
                    {
                        rng.Style.Font.Bold = true;
                        // Set Pattern for the background to Solid
                        rng.Style.Fill.PatternType = ExcelFillStyle.Solid;
                        // Set color to light grey
                        rng.Style.Fill.BackgroundColor.SetColor(Color.FromArgb(200, 200, 200));
                        rng.Style.Font.Color.SetColor(Color.Black);
                    }
                    start = wsVendorProducts.Dimension.Start;
                    end = wsVendorProducts.Dimension.End;
                    for (int row = start.Row + 1; row <= end.Row; row++)
                    { // Row by row...
                        //for (int col = start.Column; col <= end.Column; col++)
                        //{ // ... Cell by cell...
                        //    object cellValue = wsVendors.Cells[row, col].Text; // This got me the actual value I needed.
                        //}
                        object cellValue = wsVendorProducts.Cells[row, 1].Text; // This got me the actual value I needed.
                        if (cellValue.ToString() != "")
                        {
                            wsVendorProducts.Cells[row, 1, row, 4].Style.Fill.PatternType = OfficeOpenXml.Style.ExcelFillStyle.Solid;
                            wsVendorProducts.Cells[row, 1, row, 4].Style.Fill.BackgroundColor.SetColor(Color.LightGray);
                        }
                    }
                    wsVendorProducts.Cells.AutoFitColumns();

                    // copy bytes from Excel object
                    bytes = excelPackage.GetAsByteArray();
                }

                int eventId = db.Events.Max(i => i.EventId);
                Event appEvent = db.Events.First(x => x.EventId == eventId);
                string eventFileName = $"Weekly Manager Report-{appEvent.EventDateTime.ToString("yyyy-MM-dd")}.xlsx";
                string mimeType = @"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                SendEmail(@"manager@wrenthicketmarket.com", eventFileName, eventFileName, eventFileName, bytes, mimeType);
                // SendEmail(@"tomparker@personaltelemetry.com", eventFileName, eventFileName, eventFileName, bytes, mimeType);
                return RedirectToAction("Edit", "AppSettings");
                /*
                var cd = new System.Net.Mime.ContentDisposition
                {
                    Inline = true,
                    FileName = eventFileName
                };
                Response.AppendHeader("Content-Disposition", cd.ToString());
                return File(bytes, mimeType, cd.FileName);
                */
            }
        }

        //
        // GET: /SendWeeklyOrderReport/

        public ActionResult SendWeeklyOrderReport()
        {
            SendSimpleVendorReport();
            return RedirectToAction("Edit", "AppSettings");
        }

        private void SendSimpleVendorReport()
        {
            using (var db = new EntitiesContext())
            {
                StringBuilder sb = new StringBuilder();
                string vendorName;
                string customerName = "";
                string productTitle = "";
                string productUnits = "";
                string subject;
                int i, iMax;
                bool hasOrders;
                List<Order> orders = new List<Order>();
                List<OrderDetail> orderDetails = new List<OrderDetail>();
                List<Partner> partners = new List<Partner>();
                orders = db.Orders.Where(g => g.EventId == AppEvent.EventId).OrderBy(g => g.OrderDate).ToList();
                partners = db.Partners.OrderBy(p => p.Name).ToList();
                foreach (var partner in partners)
                {
                    hasOrders = false;
                    sb.Clear();
                    sb.Append("<html>");
                    sb.Append("<body>");
                    sb.Append("<p><b>Customer Orders</b></p>");
                    foreach (var order in orders)
                    {
                        orderDetails =
                            db.OrderDetails.Include("Product").Where(
                                g => g.Product.PartnerId == partner.PartnerId && g.Order.OrderId == order.OrderId)
                                .OrderBy(g => g.Product.Title)
                                .ToList();
                        if (orderDetails.Count > 0)
                        {
                            sb.Append("<p>");
                            i = 1;
                            iMax = orderDetails.Count;
                            customerName = order.FirstName + " " + order.LastName + " - ";
                            sb.Append(customerName);
                            foreach (var detail in orderDetails)
                            {
                                sb.Append($"{detail.Quantity} - {detail.Product.Units} - {detail.Product.Title}");
                                if (i < iMax)
                                {
                                    sb.Append(", ");
                                    i++;
                                }
                            }
                            sb.Append("</p>");
                            hasOrders = true;
                        }
                    }
                    // second report
                    sb.Append("<p><b>Product Totals</b></p>");
                    int j, jMax;
                    orderDetails =
                        db.OrderDetails.Where(
                            g => g.Product.PartnerId == partner.PartnerId && g.Order.EventId == AppEvent.EventId)
                            .OrderBy(g => g.Product.Title).ThenBy(g => g.Product.Units)
                            .ToList();
                    if (orderDetails.Count > 0)
                    {
                        j = 0;
                        jMax = orderDetails.Count;
                        i = 0;
                        productTitle = orderDetails[i].Product.Title;
                        productUnits = orderDetails[i].Product.Units;
                        foreach (var detail in orderDetails)
                        {
                            if ((productTitle != detail.Product.Title) || (productUnits != detail.Product.Units))
                            {
                                // Debug.WriteLine("Details: {0},{1},{2},{3}", partner.Name, i, productTitle, productUnits);
                                sb.Append("<p>");
                                sb.Append($"{productTitle} - {productUnits} - {i}");
                                sb.Append("</p>");
                                productTitle = detail.Product.Title;
                                productUnits = detail.Product.Units;
                                i = detail.Quantity;
                            }
                            else
                            {
                                i += detail.Quantity;
                            }
                            j++;
                        }
                        if (j == jMax)
                        {
                            productTitle = orderDetails[j - 1].Product.Title;
                            productUnits = orderDetails[j - 1].Product.Units;
                            // Debug.WriteLine("Last Details: {0},{1},{2},{3}", partner.Name, i, productTitle, productUnits);
                            sb.Append("<p>");
                            sb.Append($"{productTitle} - {productUnits} - {i}");
                            sb.Append("</p>");
                        }
                        hasOrders = true;
                    }
                    if (hasOrders)
                    {
                        sb.Append("</body>");
                        sb.Append("</html>");
                        vendorName = partner.Name;
                        subject = $"Wren Thicket Market Weekly Order Report - {vendorName}";
                        SendEmail(@"manager@wrenthicketmarket.com", subject.ToString(), sb.ToString(), @"");
                        // SendEmail(@"tomparker@personaltelemetry.com", subject.ToString(), sb.ToString(), @"");
                    }
                }
            }
        }
    }
}