namespace Sonny.Domain.Entities.Technician.ClientStored.Infrastructure
{
    public class NetWorkDataKey
    {
        public int Id { get; set; }
        public string DomainName { get; set; }
        public string AdminDomainUser { get; set; }
        public string AdminDomainPwd { get; set; }

        public string ModemOperator { get; set; }
        public string ModemUserName { get; set; }
        public string ModemUserPwd { get; set; }

        public string AdminLocalName { get; set; }
        public string AdminLocalPwd { get; set; }
        
        



    }
}