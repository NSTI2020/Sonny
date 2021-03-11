namespace Sonny.Domain.Entities.Technician.ClientStored.Infrastructure
{
    public class NetGenericsOptions
    {
        public int Id { get; set; }
        public string Name {get; set;}
        public string Ip {get; set;}
        public string Mac {get; set;}
        public int Port {get; set;}
        public string RunningAtPort {get; set;}
        public string Apps {get; set;}
        public string Note {get; set;}
        
    }

}