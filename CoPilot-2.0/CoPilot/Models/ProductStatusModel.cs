using System;

namespace CoPilot.Models
{
    [Serializable]
    public class ProductStatusModel
    {
        public string Id { get; set; }
        public string Status { get; set; }
        public string Highlighted { get; set; }
    }
}
