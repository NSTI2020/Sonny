using Sonny.Domain.Entities.Technician.Sonny.Information.Network.Helpers;
using Sonny.Domain.Entities.Technician.Sonny.Information.Network.Interfaces;
using Sonny.Domain.Entities.Technician.Sonny.Information.Network.Logic;

namespace Sonny.Domain.Entities.Technician.Sonny.Information
{
    public class RunInformation
    {
        private IIpBasicsOperations _iipBasicsOperations;
        private PathsParamsArgs _pathsParamsArgs;
        public RunInformation()
        {
            _iipBasicsOperations = new IpBasicsOperations();
            _pathsParamsArgs = new PathsParamsArgs();
        }

        public string[] GetIp()
        {
            return _iipBasicsOperations.ManyReturns(_pathsParamsArgs.NetWork, _pathsParamsArgs.Ip);
        }

        public string GetAdpName()
        {
            return _iipBasicsOperations.SingleReturn(_pathsParamsArgs.NetWork, _pathsParamsArgs.Description);
        }

        public string[] GetDefaultGatway()
        {
            return _iipBasicsOperations.ManyReturns(_pathsParamsArgs.NetWork, _pathsParamsArgs.DefaultIPGateway);
        }
        public string[] Dns()
        {
            return _iipBasicsOperations.ManyReturns(_pathsParamsArgs.NetWork, _pathsParamsArgs.DNSServerSearchOrder);
        }
        public string DhcpServer()
        {
            return _iipBasicsOperations.SingleReturn(_pathsParamsArgs.NetWork, _pathsParamsArgs.DHCPServer);
        }
        public string MacAddress()
        {
            return _iipBasicsOperations.SingleReturn(_pathsParamsArgs.NetWork, _pathsParamsArgs.MACAddress);
        }


    }
}
