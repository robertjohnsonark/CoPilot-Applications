using System;

namespace CoPilot.Models
{
    public class UserSettings
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserRole { get; set; }
        public DateTime LastVisit { get; set; }
        public int SearchTypeId { get; set; }
        public int PartnerId { get; set; }
        public int CategoryId { get; set; }
        public int ProductId { get; set; }
        public int StoryId { get; set; }
        public int EditTypeId { get; set; }
        public int EditCategoryId { get; set; }
        public int EditPartnerId { get; set; }
        public int EditProductId { get; set; }
        public bool ShowHidden { get; set; }
        public string EditUserIndex { get; set; }
        public string EditProductIndex { get; set; }
    }
}