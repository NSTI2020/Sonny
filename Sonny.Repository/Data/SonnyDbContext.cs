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
     
        //CLIENTS
        public DbSet<ClientEntity> Clients { get; set; }
            
        public SonnyDbContext(DbContextOptions<SonnyDbContext> opt) : base(opt)
        {}



        /*protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ClientEntity>().HasKey(_client => _client.Id);
            

             builder.Entity<Address>().HasKey(_address => _address.Id);
                
            builder.Entity<ClientEntity>().HasOne<Address>().WithOne().HasForeignKey<ClientEntity>(_foren=> _foren.AddressId);
            
            builder.Entity<Contact>().HasKey(_contact => _contact.Id);
             builder.Entity<ClientEntity>().HasOne<Contact>().WithOne().HasForeignKey<ClientEntity>(_foren=> _foren.ContactId);



        }*/
    }

}