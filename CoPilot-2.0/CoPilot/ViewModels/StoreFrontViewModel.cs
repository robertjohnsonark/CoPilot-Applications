using System.Collections.Generic;
using CoPilot.Models;

namespace CoPilot.ViewModels
{
    public class StoreFrontViewModel
    {
        public int SearchTypeId { get; set; }
        public int CategoryId { get; set; }
        public int PartnerId { get; set; }
        public List<ContentItem> Categories { get; set; }
        public List<ContentItem> Partners { get; set; }
        public List<Product> Products { get; set; }
        public List<ContentItem> Stories { get; set; }
        public Story CurrentPost { get; set; }
    }
}