namespace CoPilot.ViewModels
{
    public class OrderDetailsRemoveViewModel
    {
        public string Message { get; set; }
        public bool HasWeight { get; set; }
        public int ItemCount { get; set; }
        public decimal OrderTotal { get; set; }
        public int DeleteId { get; set; }
    }
}