using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web;

namespace CoPilot.Models
{
    public class Photo
    {
        [Key]
        public int Id { get; set; }
        public int PartnerId { get; set; }
        public int ProductId { get; set; }
        [Display(Name = "Partner Photo")]
        public bool PartnerPhoto { get; set; }
        [Display(Name = "Display Order")]
        public int DisplayOrder { get; set; }
        [Display(Name = "Short Description")]
        public string ShortDescription { get; set; }
        [Display(Name = "Long Description")]
        public string LongDescription { get; set; }
        // image source metadata
        [Display(Name = "Url")]
        public string Url { get; set; }
        public bool IsUrl { get; set; }
        [Display(Name = "Flickr Image")]
        public string Flickr { get; set; }
        public bool IsFlickr { get; set; }
        [Display(Name = "File Name")]
        public string FileName { get; set; }
        public bool IsFile { get; set; }
        public DateTime? FileTimeStamp { get; set; }
        public string ContainerName { get; set; }
        public string Uri { get; set; }
        [NotMapped]
        public HttpPostedFileBase File { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        [MaxLength]
        public byte[] FileBytes { get; set; }
        public virtual Partner Partner { get; set; }
    }
}
