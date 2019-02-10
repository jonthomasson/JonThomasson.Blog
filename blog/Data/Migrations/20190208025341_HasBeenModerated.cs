using Microsoft.EntityFrameworkCore.Migrations;

namespace JonThomasson.Blog.Migrations
{
    public partial class HasBeenModerated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "HasBeenModerated",
                table: "Comments",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HasBeenModerated",
                table: "Comments");
        }
    }
}
