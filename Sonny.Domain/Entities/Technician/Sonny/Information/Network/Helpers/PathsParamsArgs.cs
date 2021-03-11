namespace Sonny.Domain.Entities.Technician.Sonny.Information.Network.Helpers
{
    public class PathsParamsArgs
    {
        public string NetWork = "SELECT * FROM Win32_NetworkAdapterConfiguration WHERE IPEnabled = 'TRUE'";
        public string Ip = "IpAddress";
        public string Description = "Description";
        public string DefaultIPGateway = "DefaultIPGateway";
        public string MACAddress = "MACAddress";
        public string DHCPEnabled = "DHCPEnabled";
        public string DNSServerSearchOrder = "DNSServerSearchOrder";
        public string DHCPServer = "DHCPServer";
    }
}
