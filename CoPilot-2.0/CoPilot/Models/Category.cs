using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace CoPilot.Models
{
    public  class Category
    {
        [DisplayName("Id")]
        public int CategoryId { get; set; }

        [Required]
        [MaxLength(50, ErrorMessage = "Category Name cannot be longer than 30 characters.")]
        [DisplayName("Category")]
        public string Name { get; set; }
        
        [Required]
        [MaxLength(50, ErrorMessage = "Category Description cannot be longer than 30 characters.")]
        [DisplayName("Description")]
        public string Description { get; set; }
        
        [Required]
        [DisplayName("Status")]
        public PartnerStatus Status { get; set; }

        public List<Product> Products { get; set; }

        public string ContentList { get; set; }
    }
}
