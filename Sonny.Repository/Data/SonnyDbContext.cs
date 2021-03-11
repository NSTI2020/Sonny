using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Sonny.Domain.Entities;
using Sonny.Domain.Entities.Administrative.Client;

namespace Sonny.Repository.Data
{

    public class SonnyDbContext : DbContext
    {
        //GENERAL
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<PhoneUnique> phoneNumberUniques { get; set; }
        public DbSet<PhoneEntity> phoneNumberEntity { get; set; }
        public DbSet<SocialUnique> SocialUniques { get; set; }
        public DbSet<SocialEntity> SocialEntities { get; set; }

        //CLIENTS
        public DbSet<Client> Clients { get; set; }
            
        public SonnyDbContext(DbContextOptions<SonnyDbContext> opt) : base(opt)
        {}



        /*protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.Entity<Client>().HasNoKey();
        
        }*/
    }

}