using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace CoPilot.Models
{
    public class ContentItem
    {
        public int Id { get; set; }
        public int ParentId { get; set; }
        public int SortOrder { get; set; }

        [DisplayName("Name")]
        [MaxLength(50)]
        public string Name { get; set; }

        [DisplayName("View")]
        [MaxLength(50)]
        public string View { get; set; }

        [DisplayName("Controller")]
        [MaxLength(50)]
        public string Controller { get; set; }

        public ContentType ContentType { get; set; }
    }
}