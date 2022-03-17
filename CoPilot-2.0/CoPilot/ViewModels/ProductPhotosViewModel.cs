using System.Collections.Generic;
using CoPilot.Models;

namespace CoPilot.ViewModels
{
    public class ProductPhotosViewModel
    {
        public Product Product { get; set; }
        public List<DisplayPhotoModel> Photos { get; set; }
    }
}