using System.ComponentModel.DataAnnotations;
using CoPilot.Models;

namespace CoPilot.ViewModels
{
    public class AccountEditModel
    {
        [Required]
        [Display(Name = "User Id")]
        public int UserId { get; set; }

        [Required]
        [Display(Name = "User name")]
        public string UserName { get; set; }

        [Required]
        [Display(Name = "First name")]
        [MaxLength(50, ErrorMessage = "First Name cannot be longer than 50 characters.")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        [MaxLength(50, ErrorMessage = "Last Name cannot be longer than 50 characters.")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "Email Address")]
        [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}", ErrorMessage = "EmailAddress is is not valid.")]
        [MaxLength(50, ErrorMessage = "EmailAddress Address cannot be longer than 50 characters.")]
        public string EmailAddress { get; set; }

        [Required]
        [Display(Name = "Phone")]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Entered phone format is not valid.")]
        [MaxLength(20, ErrorMessage = "Phone cannot be longer than 20 characters.")]
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
        [Display(Name = "PostalCode")]
        [MaxLength(20, ErrorMessage = "PostalCode cannot be longer than 20 characters.")]
        public string PostalCode { get; set; }

        [Required]
        [StringLength(50)]
        [MaxLength(50, ErrorMessage = "Country cannot be longer than 50 characters.")]
        public string Country { get; set; }

        [Required]
        [Display(Name = "User Status")]
        public UserStatus Status { get; set; }

        [Required]
        [Display(Name = "User Type")]
        public UserType UserType { get; set; }
    }
}