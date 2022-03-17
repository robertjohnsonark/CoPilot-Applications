using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace CoPilot.Models
{
    public class EmailList
    {
        public int Id { get; set; }
        [DisplayName("Last Name")]
        [MaxLength(50)]
        public string LastName { get; set; }
        [DisplayName("First Name")]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [DisplayName("Email Type")]
        [MaxLength(50)]
        public string EmailType { get; set; }
        [DisplayName("Email Status")]
        [MaxLength(20)]
        public string EmailStatus { get; set; }
        [DisplayName("Email Timestamp")]
        public DateTime EmailTimeStamp { get; set; }
        [DisplayName("Email Address")]
        [MaxLength(150)]
        public string EmailAddress { get; set; }
        public int EventId { get; set; }
        public int MessageId { get; set; }
    }
}