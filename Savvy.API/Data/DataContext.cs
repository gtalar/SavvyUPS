using Microsoft.EntityFrameworkCore;
using Savvy.API.Models;

namespace Savvy.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<User> Users { get; set; } 
    }
}