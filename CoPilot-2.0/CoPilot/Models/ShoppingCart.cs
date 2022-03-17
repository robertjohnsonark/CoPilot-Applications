using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CoPilot.Models
{
    public partial class ShoppingCart
    {
        readonly EntitiesContext _db;
        public string ShoppingCartId { get; set; }

        public ShoppingCart(EntitiesContext db)
        {
            _db = db;
        }

        public const string CartSessionKey = "CartId";

        // We're using HttpContextBase to allow access to cookies.
        public string GetCartId(HttpContextBase context)
        {
            if (context.Session[CartSessionKey] == null)
            {
                if (!string.IsNullOrWhiteSpace(context.User.Identity.Name))
                {
                    context.Session[CartSessionKey] = context.User.Identity.Name;
                }
                else
                {
                    // Generate a new random GUID using System.Guid class
                    Guid tempCartId = Guid.NewGuid();
                    // Send tempCartId back to client as a cookie
                    context.Session[CartSessionKey] = tempCartId.ToString();
                }
            }
            return context.Session[CartSessionKey].ToString();
        }

        // When a user has logged in, migrate their market basket to
        // be associated with their username
        public void MigrateCart(string userName)
        {
            var shoppingCart = _db.Carts.Where(c => c.CartId == ShoppingCartId);
            foreach (Cart item in shoppingCart)
            {
                item.CartId = userName;
            }

        }

        public static ShoppingCart GetCart(EntitiesContext db, HttpContextBase context)
        {
            var cart = new ShoppingCart(db);
            cart.ShoppingCartId = cart.GetCartId(context);
            return cart;
        }

        // Helper method to simplify market basket calls
        public static ShoppingCart GetCart(EntitiesContext db, Controller controller)
        {
            return GetCart(db, controller.HttpContext);
        }

        public void AddToCart(Product product, int count)
        {
            // Get the matching cart and product instances
            var cartItem = _db.Carts.SingleOrDefault(c => c.CartId == ShoppingCartId && c.ProductId == product.ProductId);
            if (cartItem == null)
            {
                // Create a new cart item if no cart item exists
                cartItem = new Cart
                {
                    ProductId = product.ProductId,
                    CartId = ShoppingCartId,
                    Count = count,
                    DateCreated = DateTime.Now
                };

                _db.Carts.Add(cartItem);
            }
            else
            {
                // If the item does exist in the cart, then add one to the quantity
                cartItem.Count += count;
            }
        }

        public int RemoveFromCart(int id)
        {
            // Get the cart
            var cartItem = _db.Carts.Single(cart => cart.CartId == ShoppingCartId && cart.RecordId == id);
            int itemCount = 0;
            if (cartItem != null)
            {
                if (cartItem.Count > 1)
                {
                    cartItem.Count--;
                    itemCount = cartItem.Count;
                }
                else
                {
                    _db.Carts.Remove(cartItem);
                }

            }
            return itemCount;
        }

        public void EmptyCart()
        {
            var cartItems = _db.Carts.Where(cart => cart.CartId == ShoppingCartId);
            foreach (var cartItem in cartItems)
            {
                _db.Carts.Remove(cartItem);
            }
        }

        public List<Cart> GetCartItems()
        {
            return _db.Carts.Where(cart => cart.CartId == ShoppingCartId).OrderBy(a => a.Product.Title).ToList();
        }

        public int GetCount()
        {
            // Get the count of each item in the cart and sum them up
            int? count = (from cartItems in _db.Carts where cartItems.CartId == ShoppingCartId select (int?)cartItems.Count).Sum();
            // Return 0 if all entries are null
            return count ?? 0;
        }

        public decimal GetTotal()
        {
            // Multiply product price by count of that product to get 
            // the current price for each of those products in the cart
            // sum all product price totals to get the cart total
            decimal? total = (from cartItems in _db.Carts where cartItems.CartId == ShoppingCartId select (int?)cartItems.Count * cartItems.Product.Price).Sum();
            return total ?? decimal.Zero;
        }

        public int CreateOrder(Order order)
        {
            decimal orderTotal = 0;
            var cartItems = GetCartItems();
            // Iterate over the items in the cart, adding the order details for each
            foreach (var item in cartItems)
            {
                var product = _db.Products.Find(item.ProductId);
                var orderDetail = new OrderDetail
                {
                    ProductId = item.ProductId,
                    OrderId = order.OrderId,
                    UnitPrice = product.Price,
                    Quantity = item.Count,
                };
                // Set the order total of the market basket
                orderTotal += (item.Count * item.Product.Price);
                _db.OrderDetails.Add(orderDetail);
            }
            // Set the order's total to the orderTotal count
            order.Total = orderTotal;
            // Empty the market basket
            EmptyCart();
            // Return the OrderId as the confirmation number
            return order.OrderId;
        }

        public int UpdateOrderFromBasket(Order order)
        {
            var cartItems = _db.Carts.Where(cart => cart.CartId == ShoppingCartId).ToList();
            foreach (Cart cartItem in cartItems)
            {
                var orderDetails = _db.OrderDetails.Where(a => a.OrderId == order.OrderId && a.ProductId == cartItem.ProductId).ToList();
                // check if product is already in the cart
                if (orderDetails.Any())
                {
                    foreach (OrderDetail details in orderDetails)
                    {
                        details.Quantity += cartItem.Count;
                    }
                }
                else
                {
                    var product = _db.Products.Find(cartItem.ProductId);
                    var orderDetail = new OrderDetail
                    {
                        ProductId = cartItem.ProductId,
                        OrderId = order.OrderId,
                        UnitPrice = product.Price,
                        Quantity = cartItem.Count,
                    };
                    // Set the order total of the market basket
                    _db.OrderDetails.Add(orderDetail);
                }
            }
            _db.SaveChanges();
            // Set the order's total to the orderTotal count
            decimal orderTotal = 0;
            var orderDetails2 = _db.OrderDetails.Where(a => a.OrderId == order.OrderId).ToList();
            // check if product is already in the cart
            if (orderDetails2.Any())
            {
                orderTotal += orderDetails2.Sum(details => (details.Quantity * details.UnitPrice));
            }
            order.Total = orderTotal;
            // Empty the market basket
            EmptyCart();
            _db.SaveChanges();
            // Return the OrderId as the confirmation number
            return order.OrderId;
        }
    }
}
