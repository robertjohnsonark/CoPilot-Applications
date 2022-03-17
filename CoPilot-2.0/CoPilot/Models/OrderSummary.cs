using System;
using System.ComponentModel.DataAnnotations;

namespace CoPilot.Models 
{
    public class OrderSummary {
        public int UserId { get; set; }
        public int PartnerId { get; set; }
        public string PartnerName { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public DateTime OrderDate { get; set; }
        public int ProductId { get; set; }
        public string ProductTitle { get; set; }
        public int Quantity { get; set; }
        public string Units { get; set; }
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }
        [DataType(DataType.Currency)]
        public decimal Total { get; set; }
    }

    public class VendorOrderSummary
    {
        public string PartnerName { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public DateTime OrderDate { get; set; }
        public string ProductTitle { get; set; }
        public int Quantity { get; set; }
        public string Units { get; set; }
        public decimal Price { get; set; }
        public decimal Total { get; set; }
    }

    public class VendorProductSummary
    {
        public string PartnerName { get; set; }
        public string ProductTitle { get; set; }
        public string Units { get; set; }
        public int Quantity { get; set; }
    }

    public class CustomerOrderSummary
    {
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string PartnerName { get; set; }
        public DateTime OrderDate { get; set; }
        public string ProductTitle { get; set; }
        public int Quantity { get; set; }
        public string Units { get; set; }
        public decimal Price { get; set; }
        public decimal Total { get; set; }
    }
}
