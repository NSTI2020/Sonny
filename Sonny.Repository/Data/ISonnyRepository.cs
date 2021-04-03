using System.Threading.Tasks;
using Sonny.Domain.Entities;
using Sonny.Domain.Entities.Administrative.Client;

namespace Sonny.Repository.Data
{
    public interface ISonnyRepository
    {
        //Geral
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Attac<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        //Gets
        Task<ClientEntity[]> GetAllClientsAsync();
        Task<ClientEntity> GetClientByIdAsync(int id);

        //Address
        Task<Address[]> GetAllAddressesAsync();
        Task<Address> GetAddressByIdAsync(int id);

        //Contact
        Task<Contact[]> GetAllContactAsync();
        Task<Contact> GetContactByIdAsync(int id);



    }
}