using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Sonny.WebApi.Migrations
{
    public partial class first4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Street = table.Column<string>(nullable: true),
                    Number = table.Column<string>(nullable: true),
                    Neighborhood = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    Complement = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "phoneNumberEntity",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_phoneNumberEntity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SocialEntities",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SocialEntities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "phoneNumberUniques",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    PhoneNumberKindId = table.Column<int>(nullable: true),
                    UniquePhoneNumber = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_phoneNumberUniques", x => x.Id);
                    table.ForeignKey(
                        name: "FK_phoneNumberUniques_phoneNumberEntity_PhoneNumberKindId",
                        column: x => x.PhoneNumberKindId,
                        principalTable: "phoneNumberEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SocialUniques",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Unique = table.Column<string>(nullable: true),
                    socialEntityId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SocialUniques", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SocialUniques_SocialEntities_socialEntityId",
                        column: x => x.socialEntityId,
                        principalTable: "SocialEntities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(nullable: true),
                    phoneNumberUniqueId = table.Column<int>(nullable: true),
                    socialUniqueId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contacts_phoneNumberUniques_phoneNumberUniqueId",
                        column: x => x.phoneNumberUniqueId,
                        principalTable: "phoneNumberUniques",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Contacts_SocialUniques_socialUniqueId",
                        column: x => x.socialUniqueId,
                        principalTable: "SocialUniques",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    CNPJ = table.Column<string>(nullable: true),
                    Responsible = table.Column<string>(nullable: true),
                    Comments = table.Column<string>(nullable: true),
                    IsAssured = table.Column<bool>(nullable: false),
                    TypeOfClient = table.Column<string>(nullable: true),
                    MonthlyPayment = table.Column<decimal>(nullable: false),
                    AddressId = table.Column<int>(nullable: true),
                    ContactId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Clients_Addresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Addresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Clients_Contacts_ContactId",
                        column: x => x.ContactId,
                        principalTable: "Contacts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Clients_AddressId",
                table: "Clients",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Clients_ContactId",
                table: "Clients",
                column: "ContactId");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_phoneNumberUniqueId",
                table: "Contacts",
                column: "phoneNumberUniqueId");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_socialUniqueId",
                table: "Contacts",
                column: "socialUniqueId");

            migrationBuilder.CreateIndex(
                name: "IX_phoneNumberUniques_PhoneNumberKindId",
                table: "phoneNumberUniques",
                column: "PhoneNumberKindId");

            migrationBuilder.CreateIndex(
                name: "IX_SocialUniques_socialEntityId",
                table: "SocialUniques",
                column: "socialEntityId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropTable(
                name: "phoneNumberUniques");

            migrationBuilder.DropTable(
                name: "SocialUniques");

            migrationBuilder.DropTable(
                name: "phoneNumberEntity");

            migrationBuilder.DropTable(
                name: "SocialEntities");
        }
    }
}
