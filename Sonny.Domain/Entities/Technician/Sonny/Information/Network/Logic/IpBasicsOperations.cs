using Sonny.Domain.Entities.Technician.Sonny.Information.Network.Helpers;
using Sonny.Domain.Entities.Technician.Sonny.Information.Network.Interfaces;
using System.Collections.Generic;
using System.Management;

namespace Sonny.Domain.Entities.Technician.Sonny.Information.Network.Logic
{
    public class IpBasicsOperations : IIpBasicsOperations
    {
        private ManagementObjectSearcher _objSearch { get; set; }
        private List<string> _listReturn { get; set; }
        public IpBasicsOperations()
        {

            _listReturn = new List<string>();
        }

        public string[] ManyReturns(string param, string property)
        {
            _objSearch = new ManagementObjectSearcher(new ObjectQuery(param));
            ManagementObjectCollection queryCollection = _objSearch.Get();
            foreach (var qwe in queryCollection)
            {
                PropertyData data1 = qwe.Properties[property];
                string[] T = (string[])data1.Value;
                foreach (string item in T)
                {

                    _listReturn.Add(item);
                }
                break;
            }
            return _listReturn.ToArray();
        }

        public string SingleReturn(string param, string property)
        {
            string _Return = string.Empty;
            _objSearch = new ManagementObjectSearcher(new ObjectQuery(param));
            ManagementObjectCollection queryCollection = _objSearch.Get();
            foreach (var qwe in queryCollection)
            {
                PropertyData data1 = qwe.Properties[property];
                string T = (string)data1.Value;

                _Return = T;

                break;
            }
            return _Return;
        }



    }
}

