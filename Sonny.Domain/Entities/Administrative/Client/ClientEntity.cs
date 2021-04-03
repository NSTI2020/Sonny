using System.Reflection;
using Sonny.Domain.Entities;


namespace Sonny.Domain.Entities.Administrative.Client
{
    public  class ClientEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CNPJ { get; set; }
        public string Responsible { get; set; }
        public string Comments { get; set; }
        public bool Assured { get; set; }
        public string ClientType { get; set; }
        public string Payment { get; set; }
        public int AddressId { get; set; }
        public Address Address { get; set; }
        public int ContactId { get; set; }
        public Contact Contact { get; set; }
    }
}
