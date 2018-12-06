using Microsoft.EntityFrameworkCore.Migrations;

namespace JonThomasson.Blog.Migrations
{
    public partial class DropPhotoNameThumb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoNameThumb",
                table: "Posts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoNameThumb",
                table: "Posts",
                maxLength: 150,
                nullable: true);
        }
    }
}
