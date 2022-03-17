using System.ComponentModel;

namespace CoPilot.Models
{
    public enum PartnerType
    {
        [Description("Partner")]
        Partner = 1
    }

    public enum PartnerStatus
    {
        [Description("Active")]
        Active = 1,
        [Description("Inactive")]
        Inactive = 2,
        [Description("Away")]
        Away = 3,
        [Description("Discontinued")]
        Discontinued = 4
    }

    public enum ProductStatus
    {
        [Description("Active")]
        Active = 1,
        [Description("Inactive")]
        Inactive = 2,
        [Description("Replaced")]
        Replaced = 3,
        [Description("Discontinued")]
        Discontinued = 4
    }

    public enum UserStatus
    {
        [Description("Active")]
        Active = 1,
        [Description("Inactive")]
        Inactive = 2,
        [Description("Discontinued")]
        Discontinued = 3
    }

    public enum ActionStatus
    {
        [Description("Approved")]
        Approved = 1,
        [Description("Unapproved")]
        Unapproved = 2,
        [Description("Discontinued")]
        Discontinued = 3
    }

    public enum UserType
    {
        [Description("Public")]
        Public = 1,
        [Description("Customer")]
        Customer = 2,
        [Description("Partner")]
        Partner = 3,
        [Description("Administrator")]
        Administrator = 4,
        [Description("Unknown")]
        Unknown = 5
    }

    public enum ContentType
    {
        [Description("Image")]
        Image = 1,
        [Description("Audio")]
        Audio = 2,
        [Description("Video")]
        Video = 3,
        [Description("Document")]
        Document = 4,
        [Description("OpenLayers")]
        OpenLayers = 5,
        [Description("D3D")]
        D3D = 6,
        [Description("Html")]
        Html = 7
    }

    public enum ManageMessageId
    {
        ChangePasswordSuccess,
        SetPasswordSuccess,
        RemoveLoginSuccess,
    }

    public enum UserProfileMessageId
    {
        ChangePasswordSuccess,
        SetPasswordSuccess,
        RemoveLoginSuccess,
    }
}