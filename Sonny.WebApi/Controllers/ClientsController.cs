using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sonny.Domain.Entities;
using Sonny.Domain.Entities.Administrative.Client;
using Sonny.Repository.Data;

namespace Sonny.WebApi.Controllers
{

    [ApiController]
    [Route("api/{controller}")]
    public class ClientsController : ControllerBase
    {
        private readonly ISonnyRepository _repo;
        public ClientsController(ISonnyRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Client model)
        {
            _repo.Add(model);
            if (await _repo.SaveChangesAsync())
            {
                return Created($"api/clients/{model.Id}", model);
            }

            return BadRequest();
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {

            Client[] models = await _repo.GetAllClientsAsync();
            return Ok(models);
        }

        [HttpGet("seed")]
        public async Task<string> seed()
        {

            PhoneEntity PhoneEntity = new PhoneEntity()
            {
                Name = "WhatsApp"
            };

            PhoneUnique PhoneUnique = new PhoneUnique()
            {
                phoneEntity = PhoneEntity,
                UniquePhone = "31988598734"
            };

            SocialEntity socEntity = new SocialEntity()
            {
                Name = "Instagram",
            };

            SocialUnique socialUnique = new SocialUnique()
            {
                Unique = "marcusdias4243",
                socialEntity = socEntity
            };

            Contact ct = new Contact()
            {
                Email = "contato@nostopti.com",
                phoneNumberUnique = PhoneUnique,
                socialUnique = socialUnique,
            };

            Address addr = new Address()
            {
                Street = "Arcos",
                Number = "217",
                Neighborhood = "Vera Cruz",
                City = "Belo Horizonte",
                State = "Minas Gerais",
                Complement = null

            };

            Client clt = new Client()
            {
                Id = 1,
                Name = "Marcus Vinicíus DIas",
                CNPJ = "080.154.194-99",
                Responsible = "Marcus",
                Comments = "",
                IsAssured = true,
                TypeOfClient = "Pessoa física",
                MonthlyPayment = 25000,
                Address = addr,
                Contact = ct
            };
            
            _repo.Add(clt);

            if (await _repo.SaveChangesAsync())
            {
                return "Deu BOM, base populada!";
            }
            else
            {
                return "Deu RUIM, false";
            }
        }
    }
}