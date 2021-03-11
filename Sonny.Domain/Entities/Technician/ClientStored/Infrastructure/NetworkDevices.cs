namespace Sonny.Domain.Entities.Technician.ClientStored.Infrastructure
{
    public class NetworkDevices
    {
        public int Id { get; set; }
        public string Equipment { get; set; }
        public string Manufactured {get; set;}
        public string Model {get; set;}
        public string SN {get; set;}
        public NetGenericsOptions NetGenericsOptions {get; set;}
        public string Figure {get; set;}
    }
}