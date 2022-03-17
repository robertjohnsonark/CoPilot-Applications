using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace CoPilot.Models 
{
    public class Product {
        [ScaffoldColumn(false)]
        public int ProductId { get; set; }
        public int CategoryId { get; set; }
        public int PartnerId { get; set; }

        public bool SoldByWeight { get; set; }

        [Required]
        [StringLength(160, MinimumLength = 2)]
        public string Title { get; set; }

        [StringLength(4096)]
        public string Description { get; set; }

        [StringLength(40)]
        public string Units { get; set; }

        [Required]
        [Range(0.01, 500.00)]
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }

        [StringLength(1024)]
        public string Notes { get; set; }

        public Boolean Highlighted { get; set; }
        
        [DisplayName("Product Art URL")]
        [StringLength(1024)]
        public string ProductArtUrl { get; set; }

        [Required]
        [DisplayName("Status")]
        public ProductStatus Status { get; set; }

        public virtual Category Category { get; set; }
        public virtual Partner Partner { get; set; }
        public string ContentList { get; set; }
    }
}
