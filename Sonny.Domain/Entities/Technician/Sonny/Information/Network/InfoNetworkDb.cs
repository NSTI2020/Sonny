using System.Collections.Generic;

namespace Sonny.Domain.Entities.Technician.Sonny.Information.Network
{
    public class InfoNetworkDb
    {
        public string AdapterName { get; set; }
        public string Ip { get; set; }
        public string DefaultGateway { get; set; }
        public string DnsPri { get; set; }
        public string DnsSec { get; set; }
        public string DhcpServer { get; set; }
        public string MacAddress { get; set; }


        public InfoNetworkDb()
        {

        }
    }
}
