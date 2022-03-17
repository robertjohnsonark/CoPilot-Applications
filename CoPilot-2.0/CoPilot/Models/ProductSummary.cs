using System.ComponentModel.DataAnnotations;

namespace CoPilot.Models 
{
    public class ProductSummary {
        public int RecordId { get; set; }
        public int ProductId { get; set; }
        public int PartnerId { get; set; }
        public bool SoldByWeight { get; set; }
        public string Title { get; set; }
        public string PartnerName { get; set; }
        public int Count { get; set; }
        public string Units { get; set; }
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }
        [DataType(DataType.Currency)]
        public decimal Total { get; set; }
    }
}
