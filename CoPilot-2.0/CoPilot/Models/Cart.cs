using System;
using System.ComponentModel.DataAnnotations;

namespace CoPilot.Models
{
    public class Cart
    {
        [Key]
        public int RecordId { get; set; }
        public string CartId { get; set; }
        public int ProductId { get; set; }
        public int Count { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DateCreated { get; set; }
        public virtual Product Product { get; set; }
    }
}