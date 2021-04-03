namespace Sonny.Domain.Entities.Administrative.Outsourced
{
    public class Partner
    {
         public int Id { get; set; }
        public string Name { get; set; }
        public string CNPJ { get; set; }
        public string Responsible { get; set; }
        public string Comments { get; set; }
        public string BusinessLine { get; set; } // o que é feito
        public Address Address { get; set; }
        public Contact Contact { get; set; }

    }
}