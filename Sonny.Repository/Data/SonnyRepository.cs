using System.Linq;
using System.Threading.Tasks;
using Sonny.Domain.Entities.Administrative.Client;
using Microsoft.EntityFrameworkCore;
using Sonny.Domain.Entities;
using System.Collections.Generic;

namespace Sonny.Repository.Data
{
    public class SonnyRepository : ISonnyRepository
    {
        private readonly SonnyDbContext _context;
        public SonnyRepository(SonnyDbContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            if (await _context.SaveChangesAsync() > 0)
            {
                return true;
            }

            return false;
        }

        public async Task<Client[]> GetAllClientsAsync()
        {
            IQueryable<Client> query = _context.Clients
            .Include(_address => _address.Address)
            .Include(_contact => _contact.Contact)
            .ThenInclude(_pN => _pN.phoneNumberUnique)
            .Include(_contact => _contact.Contact)
            .ThenInclude(_sU => _sU.socialUnique);

            query = query.OrderBy(_name => _name.Name);

            return await query.ToArrayAsync();
        }


        public async Task<Client> GetClientByIdAsync(int id)
        {
            IQueryable<Client> query = _context.Clients
            .Include(_address => _address.Address)
            .Include(_contact => _contact.Contact)
            .ThenInclude(_pN => _pN.phoneNumberUnique)
            .Include(_contact => _contact.Contact)
            .ThenInclude(_sU => _sU.socialUnique);

            Client entity = await query.FirstOrDefaultAsync(_client => _client.Id == id);

            return entity;
        }

        public async Task<Address[]> GetAllAddressesAsync()
        {
            IQueryable<Address> query = _context.Addresses;

            query = query.OrderBy(_city => _city.City);

            return await query.ToArrayAsync();
        }

        public async Task<Address> GetAddressByIdAsync(int id)
        {
            IQueryable<Address> query = _context.Addresses;

            query = query.OrderBy(_city => _city.City);

            Address address = await query.FirstOrDefaultAsync(_address => _address.Id == id);

            return address;
        }

        public async Task<Contact[]> GetAllContactAsync()
        {
            IQueryable<Contact> query = _context.Contacts
            .OrderBy(_phone => _phone.Email);
            return await query.ToArrayAsync();
        }
        public async Task<Contact> GetContactByIdAsync(int id)
        {
            IQueryable<Contact> query = _context.Contacts
           .OrderBy(_phone => _phone.Email);
            Contact contact = await query.FirstOrDefaultAsync(_contact => _contact.Id == id);
            return contact;
        }
    }
}