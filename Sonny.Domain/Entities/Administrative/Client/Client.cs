using System.Reflection;
using Sonny.Domain.Entities;

namespace Sonny.Domain.Entities.Administrative.Client
{
    public  class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CNPJ { get; set; }
        public string Responsible { get; set; }
        public string Comments { get; set; }
        public bool IsAssured { get; set; }
        public string TypeOfClient { get; set; }
        public decimal MonthlyPayment { get; set; }
        public Address Address { get; set; }
        public Contact Contact { get; set; }
    }
}
