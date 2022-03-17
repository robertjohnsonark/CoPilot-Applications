namespace CoPilot.ViewModels
{
    public class ShoppingCartUpdateViewModel
    {
        public string Message       { get; set; }
        public bool HasWeight       { get; set; }
        public decimal CartTotal    { get; set; }
        public int CartCount        { get; set; }
        public int ItemCount        { get; set; }
        public int DeleteId         { get; set; }
    }
}