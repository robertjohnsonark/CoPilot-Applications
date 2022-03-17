using System;
using System.ComponentModel.DataAnnotations;

namespace CoPilot.Models
{
    public class DisplayPhotoModel : IEquatable<DisplayPhotoModel>, IComparable<DisplayPhotoModel>
    {
        [Key]
        public int Id { get; set; }
        public int PartnerId { get; set; }
        public int ProductId { get; set; }
        [Display(Name = "Display Order")]
        public int DisplayOrder { get; set; }
        [Display(Name = "Partner Photo")]
        public bool PartnerPhoto { get; set; }
        [Display(Name = "Short Description")]
        public string ShortDescription { get; set; }
        [Display(Name = "Long Description")]
        public string LongDescription { get; set; }
        // image source metadata
        [Display(Name = "File Name")]
        public string FileName { get; set; }
        public DateTime? FileTimeStamp { get; set; }
        public string ContainerName { get; set; }
        public string Uri { get; set; }

        public override string ToString()
        {
            return "ID: " + Id + "   Name: " + FileName;
        }
        public override bool Equals(object obj)
        {
            if (obj == null) return false;
            DisplayPhotoModel objAsPart = obj as DisplayPhotoModel;
            if (objAsPart == null) return false;
            else return Equals(objAsPart);
        }

        public int SortByDisplayOrderAscending(int displayOrder1, int displayOrder2)
        {
            return displayOrder1.CompareTo(displayOrder2);
        }

        // Default comparer for DisplayPhotoModel type. 
        public int CompareTo(DisplayPhotoModel compareModel)
        {
            // A null value means that this object is greater. 
            if (compareModel == null)
                return 1;
            else
                return this.DisplayOrder.CompareTo(compareModel.DisplayOrder);
        }

        public override int GetHashCode()
        {
            return DisplayOrder;
        }

        public bool Equals(DisplayPhotoModel other)
        {
            if (other == null) return false;
            return (this.DisplayOrder.Equals(other.DisplayOrder));
        }
        // Should also override == and != operators.
    }
}
