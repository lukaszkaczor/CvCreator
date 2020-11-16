using System.IO;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CvCreator.Data.Migrations
{
    public partial class Config : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var path = System.IO.Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "../../../Data/script.sql");
            // var path = "../script.sql";
            var text = File.ReadAllText(path);
            migrationBuilder.Sql(text);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
