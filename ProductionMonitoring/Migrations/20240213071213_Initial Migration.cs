using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductionMonitoring.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Plans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ModelCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ModelNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cycletime = table.Column<double>(type: "float", nullable: false),
                    Plann = table.Column<int>(type: "int", nullable: false),
                    Actual = table.Column<int>(type: "int", nullable: false),
                    Balancing = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plans", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Plans");
        }
    }
}
