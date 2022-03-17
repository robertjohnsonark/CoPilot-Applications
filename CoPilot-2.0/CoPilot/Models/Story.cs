using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web;
using System.Web.Mvc;

namespace CoPilot.Models
{
    public  class Story
    {
        public int StoryId { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public DateTime StoryDateTime { get; set; }
        public string Headline { get; set; }
        [Required]
        [DisplayName("Status")]
        public PartnerStatus Status { get; set; }
        [AllowHtml]
        public string Article { get; set; }
        [NotMapped]
        public HttpPostedFileBase File { get; set; }
        public string ContentList { get; set; }
    }
}
