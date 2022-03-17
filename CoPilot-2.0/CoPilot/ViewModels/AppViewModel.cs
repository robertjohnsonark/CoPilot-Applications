using System.Collections.Generic;
using CoPilot.Models;

namespace CoPilot.ViewModels
{
    public class AppViewModel
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserRole { get; set; }
        public string Authenticated { get; set; }
        public string BusinessOpen { get; set; }
        public string MarketEnabled { get; set; }
        public string DebugEnabled { get; set; }
        public string LoggingEnabled { get; set; }
        public IList<ContentItem> ContentItems { get; set; }
        public string AppName { get; set; }
        public string AppCodeName { get; set; }
        public string UserAgent { get; set; }
        public int MediaWidth { get; set; }
        public int MediaHeight { get; set; }
        public bool ShowHidden { get; set; }
    }
}