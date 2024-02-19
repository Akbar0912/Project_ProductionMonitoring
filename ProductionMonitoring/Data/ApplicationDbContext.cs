using Microsoft.EntityFrameworkCore;
using ProductionMonitoring.Models.Entities;

namespace ProductionMonitoring.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
            
        }

        public DbSet<Plan> Plans { get; set; }
    }
}
