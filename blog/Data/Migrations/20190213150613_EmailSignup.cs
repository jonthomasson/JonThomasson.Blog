using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JonThomasson.Blog.Migrations
{
    public partial class EmailSignup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmailSignups",
                columns: table => new
                {
                    Email = table.Column<string>(nullable: false),
                    DateSignedUp = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmailSignups", x => x.Email);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmailSignups");
        }
    }
}
