using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using CoPilot.Models;

namespace CoPilot.ViewModels
{
    public class MapViewModel
    {
        [Key]
        public int MapID { get; set; }
        public int CategoryId { get; set; }
        public int PartnerId { get; set; }
        public SelectList SelectionTypes { get; set; }
        public SelectList CategoryNames { get; set; }
        public SelectList PartnerNames { get; set; }
        public List<Product> Products { get; set; }
    }
}