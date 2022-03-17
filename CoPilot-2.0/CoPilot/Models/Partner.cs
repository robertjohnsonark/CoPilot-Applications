using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace CoPilot.Models
{
    public class Partner
    {
        public int PartnerId { get; set; }
        [MaxLength(100)]
        [DisplayName("Partner")]
        public string Name { get; set; }
        [MaxLength(100)]
        public string Owners { get; set; }
        [MaxLength(100)]
        public string Location { get; set; }
        [MaxLength(200)]
        public string Email { get; set; }
        [Display(Name = "Short Description")]
        public string ShortDescription { get; set; }
        [Display(Name = "Long Description")]
        public string LongDescription { get; set; }
        [MaxLength(64)]
        public string ContainerName { get; set; }
        [Required]
        [DisplayName("Partner Type")]
        public PartnerType PartnerType { get; set; }
        [Required]
        [DisplayName("Status")]
        public PartnerStatus Status { get; set; }
        public string ContentList { get; set; }
    }
}