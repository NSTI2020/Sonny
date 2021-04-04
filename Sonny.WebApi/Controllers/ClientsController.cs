using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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
        public async Task<IActionResult> Post(ClientEntity model)
        {
            _repo.Add(model);

            if (await _repo.SaveChangesAsync())
            {
                return Created($"/api/clients/{model.Id}", model);
            }

            return BadRequest();
        }
        [HttpPut("put/{model}")]
        public async Task<IActionResult> Put(int ClientId, ClientEntity model)
        {
            _repo.Update(model);
            /*var cnt = await _repo.GetContactByIdAsync(model.ContactId);
            cnt.Email = model.Contact.Email;
            cnt.Zap = model.Contact.Zap;
            cnt.Cel = model.Contact.Cel;
            cnt.IsZap = model.Contact.IsZap;
            cnt.Landline = model.Contact.Landline;
            cnt.Linkedin = model.Contact.Linkedin;
            cnt.Facebook = model.Contact.Facebook;
            cnt.Instagram = model.Contact.Instagram;
            cnt.Twitter = model.Contact.Twitter;
            var addr = await _repo.GetAddressByIdAsync(model.AddressId);
            addr.Street = model.Address.Street;
            addr.Number = model.Address.Number;
            addr.Neighborhood = model.Address.Neighborhood;
            addr.City = model.Address.City;
            addr.State = model.Address.State;
            addr.Complement = model.Address.Complement;
            var personalData = await _repo.GetClientByIdAsync(ClientId);
            personalData.Name = model.Name;
            personalData.CNPJ = model.CNPJ;
            personalData.Responsible = model.Responsible;
            personalData.Comments = model.Comments;
            personalData.Assured = model.Assured;
            personalData.Kind = model.Kind;
            personalData.Payment = model.Payment;
              personalData.Address = addr;
              personalData.Contact = cnt;


            
               Contact Upd = new Contact()
               {
                   Id = cnt.Id,
                   Email = model.Contact.Email,
                   Zap = model.Contact.Zap,
                   Cel = model.Contact.Cel,
                   IsZap = model.Contact.IsZap,
                   Landline = model.Contact.Landline,
                   Linkedin = model.Contact.Linkedin,
                   Facebook = model.Contact.Facebook,
                   Instagram = model.Contact.Instagram,
                   Twitter = model.Contact.Twitter    
           };
           */
            if (await _repo.SaveChangesAsync())
            {
                return Created($"api/clients/{model.Id}/edit", model);
            }
            return this.StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou!");

        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _repo.GetClientByIdAsync(id);
            if(result == null)
            return BadRequest("Deu Ruim.");

            _repo.Delete(result);


            if (await _repo.SaveChangesAsync())
            {
                return Ok();
            }
            else
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou");
            }
        }



        //ADDRESS POST
        [HttpPost("addr")]
        public async Task<IActionResult> Postaddr(Address model)
        {
            if (model == null)
                return BadRequest("NULOOOOOOOOOOOOO");
            _repo.Add(model);
            if (await _repo.SaveChangesAsync())
            {
                return Created($"/api/clients/{model.Id}", model);
            }
            return this.StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou.");
        }
        [HttpPut("addr/{model}")]
        public async Task<IActionResult> Put(int addressId, Address model)
        {
            //Address addr = await _repo.GetAddressByIdAsync(addressId);

            _repo.Update(model);

            if (await _repo.SaveChangesAsync())
            {
                return Created($"api/clients/{model.Id}/addr", model);
            }
            return this.StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou.");

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ClientEntity[] models = await _repo.GetAllClientsAsync();
            return Ok(models);
        }
        [HttpGet("GetById/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            ClientEntity model = await _repo.GetClientByIdAsync(id);
            return Ok(model);
        }

        [HttpPost("contact")]
        public async Task<IActionResult> Postcontact(Contact model)
        {
            _repo.Add(model);
            if (await _repo.SaveChangesAsync())
            {
                return Created($"api/clients/{model.Id}", model);
            }
            return this.StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou");
        }

        [HttpPut("cnt/{model}")]
        public async Task<IActionResult> Put(int contactId, Contact model)
        {
            //  Contact contact = await _repo.GetContactByIdAsync(contactId);
            _repo.Update(model);

            if (await _repo.SaveChangesAsync())
            {
                return Created($"api/clients/{model.Id}/cnt", model);
            }

            return this.StatusCode(StatusCodes.Status500InternalServerError, "A base de dados falhou.");

        }

        [HttpGet("seed")]
        public async Task<string> seed()
        {

            Contact ct = new Contact()
            {
                Email = "contato@nostopti.com",
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

            ClientEntity clt = new ClientEntity()
            {
                //   Id = 1,
                Name = "Marcus Vinicíus DIas",
                CNPJ = "080.154.194-99",
                Responsible = "Marcus",
                Comments = "",
                Assured = true,
                ClientType = "PF",
                Payment = "oooooo",
                Address = addr,
                Contact = ct
            };



            Contact ct1 = new Contact()
            {
                Email = "lvsa@lvsa.com.br",
            };

            Address addr1 = new Address()
            {
                Street = "Horta",
                Number = "785",
                Neighborhood = "Jardim Canada",
                City = "Nova Lima",
                State = "Minas Gerais",
                Complement = null

            };

            ClientEntity clt1 = new ClientEntity()
            {
                //   Id = 1,
                Name = "Andreia Cristina Dias",
                CNPJ = "181.148.978-99",
                Responsible = "Andreia",
                Comments = "",
                Assured = false,
                ClientType = "PF",
                Payment = "",
                Address = addr,
                Contact = ct
            };



            Contact ct2 = new Contact()
            {
                Email = "lvsa@lvsa.com.br",
            };

            Address addr2 = new Address()
            {
                Street = "Padre rolim",
                Number = "123",
                Neighborhood = "São lucas",
                City = "Belo Horizonte",
                State = "Minas Gerais",
                Complement = null

            };

            ClientEntity clt2 = new ClientEntity()
            {
                //   Id = 1,
                Name = "LVSA Advogados",
                CNPJ = "111.222.333-99",
                Responsible = "Lucas",
                Comments = "",
                Assured = true,
                ClientType = "Pj",
                Payment = "50,00",
                Address = addr,
                Contact = ct
            };





            Contact ct3 = new Contact()
            {
                Email = "minasar@minasar.com",
            };

            Address addr3 = new Address()
            {
                Street = "porto",
                Number = "54785",
                Neighborhood = "São Francisco",
                City = "Belo Horizonte",
                State = "Minas Gerais",
                Complement = null

            };

            ClientEntity clt3 = new ClientEntity()
            {
                //   Id = 1,
                Name = "Minas Ar Compressores",
                CNPJ = "111.222.333-99",
                Responsible = "Batista",
                Comments = "",
                Assured = true,
                ClientType = "Pj",
                Payment = "100,00",
                Address = addr,
                Contact = ct
            };




            _repo.Add(clt);
            _repo.Add(clt1);
            _repo.Add(clt2);
            _repo.Add(clt3);


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