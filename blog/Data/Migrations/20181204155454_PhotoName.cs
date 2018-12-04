using Microsoft.EntityFrameworkCore.Migrations;

namespace JonThomasson.Blog.Migrations
{
    public partial class PhotoName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoName",
                table: "Posts",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoNameThumb",
                table: "Posts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoName",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "PhotoNameThumb",
                table: "Posts");
        }
    }
}
