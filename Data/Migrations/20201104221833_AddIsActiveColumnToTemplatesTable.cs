using Microsoft.EntityFrameworkCore.Migrations;

namespace CvCreator.Data.Migrations
{
    public partial class AddIsActiveColumnToTemplatesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Templates",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Templates");
        }
    }
}
