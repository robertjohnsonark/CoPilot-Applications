using System.Data.Entity;

namespace CoPilot.Models
{
    public class EntitiesContext : DbContext
    {
        public EntitiesContext()
            : base("EntitiesConnection")
        {
        }
        public DbSet<AppSetting> AppSettings { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ContentItem> ContentItems { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<Partner> Partners { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Story> Stories { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<EmailList> EmailResults { get; set; }
    }
}
