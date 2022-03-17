using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web;
using System.Web.Mvc;

namespace CoPilot.Models
{
    public class HtmlContent
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int UserId { get; set; }

        [DisplayName("Status")]
        public ActionStatus Status { get; set; }

        [AllowHtml]
        public string ContentHtml { get; set; }

        public string ContentList { get; set; }

        [NotMapped]
        public HttpPostedFileBase File { get; set; }
    }
}
