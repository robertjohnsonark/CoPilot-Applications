using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoPilot.Models
{
    [Table("UserProfiles")]
    public class UserProfile
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required]
        [MaxLength(50, ErrorMessage = "User Name cannot be longer than 30 characters.")]
        public string UserName { get; set; }

        public string UserRole { get; set; }

        [Required]
        [Display(Name = "First Name")]
        [MaxLength(50, ErrorMessage = "First Name cannot be longer than 50 characters.")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        [MaxLength(50, ErrorMessage = "Last Name cannot be longer than 50 characters.")]
        public string LastName { get; set; }

        [Display(Name = "Full Name")]
        public string FullName
        {
            get
            {
                return FirstName + " " + LastName;
            }
        }

        [Required]
        [DisplayName("Email Address")]
        [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}", ErrorMessage = "EmailAddress is is not valid.")]
        [DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }

        [Required(ErrorMessage = "Phone Number Required!")]
        [StringLength(24)]
        [DataType(DataType.PhoneNumber)]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Entered phone format is not valid.")]
        public string Phone { get; set; }

        [Required]
        [Display(Name = "Street Address")]
        [MaxLength(100, ErrorMessage = "Street Address cannot be longer than 100 characters.")]
        public string StreetAddress { get; set; }

        [Required]
        [Display(Name = "City")]
        [MaxLength(50, ErrorMessage = "City cannot be longer than 50 characters.")]
        public string City { get; set; }

        [Required]
        [Display(Name = "State")]
        [MaxLength(50, ErrorMessage = "State cannot be longer than 50 characters.")]
        public string State { get; set; }

        [Required]
        [Display(Name = "Postal Code")]
        [StringLength(10, MinimumLength = 5)]
        [MaxLength(20, ErrorMessage = "Postal Code cannot be longer than 10 characters.")]
        public string PostalCode { get; set; }

        [Required]
        [StringLength(50)]
        [MaxLength(50, ErrorMessage = "Country cannot be longer than 50 characters.")]
        public string Country { get; set; }

        [Required]
        [Display(Name = "User Status")]
        public UserStatus Status { get; set; }

        [Display(Name = "User Content")]
        public string ContentList { get; set; }
    }
}
