namespace Sonny.Domain.Entities
{
    public class SocialUnique
    {
        public int Id { get; set; }
        public string Unique {get; set;}
        public SocialEntity socialEntity {get; set;}
        
    }
}