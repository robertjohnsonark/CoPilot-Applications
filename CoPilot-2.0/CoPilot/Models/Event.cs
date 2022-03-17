using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web;
using System.Web.Mvc;

namespace CoPilot.Models
{
    public  class Event
    {
        public int EventId { get; set; }

        [MaxLength(80)]
        public string EventName { get; set; }
        public DateTime EventDateTime { get; set; }

        public int UserId { get; set; }

        public DateTime EventStartDateTime { get; set; }
        public DateTime EventEndDateTime { get; set; }

        public DateTime OrderingStartDateTime { get; set; }
        public DateTime OrderingEndDateTime { get; set; }

        [DisplayName("Status")]
        public ActionStatus Status { get; set; }

        [AllowHtml]
        public string EventHtml { get; set; }

        public string ContentList { get; set; }

        [NotMapped]
        public HttpPostedFileBase File { get; set; }
    }
}
