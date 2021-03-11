namespace Sonny.Domain.Entities
{
    public class Contact
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public PhoneUnique phoneNumberUnique { get; set; }
        public SocialUnique socialUnique {get; set;}

    }


}