using System;
using System.ComponentModel.DataAnnotations;

namespace CoPilot.Models
{
    public class AppSetting
    {
        public int AppSettingId { get; set; }
        public DateTime OpenStore { get; set; }
        public DateTime CloseStore { get; set; }
        [Display(Name = "Debugging Mode")]
        public bool StoreOpen { get; set; }
        [Display(Name = "Logging Enabled")]
        public bool StoreClosed { get; set; }
        [Display(Name = "User Content")]
        public string ContentList { get; set; }
    }
}