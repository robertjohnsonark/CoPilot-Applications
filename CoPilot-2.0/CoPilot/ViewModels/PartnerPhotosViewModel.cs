using System.Collections.Generic;
using CoPilot.Models;

namespace CoPilot.ViewModels
{
    public class PartnerPhotosViewModel
    {
        public Partner Partner { get; set; }
        public List<DisplayPhotoModel> Photos { get; set; }
    }
}