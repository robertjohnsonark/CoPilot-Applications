using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using CoPilot.Models;

namespace CoPilot.ViewModels
{
    public class ShoppingCartViewModel
    {
        public int RecordId { get; set; }
        public string CartId { get; set; }
        public int OrderId { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DateCreated { get; set; }
        public bool HasWeight { get; set; }
        public int CartCount { get; set; }
        public string CartSummary { get; set; }
        public decimal CartTotal { get; set; }
        public List<ProductSummary> CartItems { get; set; }
    }
}