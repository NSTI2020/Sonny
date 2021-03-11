namespace Sonny.Domain.Entities.Technician.Sonny.Information.Network.Interfaces
{
    public interface IIpBasicsOperations
    {
        string[] ManyReturns(string param, string property);
        string SingleReturn(string param, string property);
    }
}
