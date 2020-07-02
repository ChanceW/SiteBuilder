using Microsoft.EntityFrameworkCore;
using SiteBuilder.Models.Admin;

namespace SiteBuilder.Data.Context
{
    public class AdminContext : DbContext
    {
        public AdminContext(DbContextOptions<AdminContext> options) : base(options)
        {
        }

        public DbSet<Account> Accounts { get; set; }
    }
}