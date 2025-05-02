using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class BaslangicVerileriniEkle : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "IsActive", "Name", "Price", "Stock" },
                values: new object[,]
                {
                    { 1, "Güzel Bir Telefon", "Image1.jpg", true, "Iphone 15", 100m, 100 },
                    { 2, "İdeal Bir Telefon", "Image1.jpg", true, "Iphone 15SE", 80m, 100 },
                    { 3, "Gelişmiş Bir Telefon", "Image1.jpg", true, "Iphone 16", 150m, 100 },
                    { 4, "Ust Düzey Bir Telefon", "Image1.jpg", true, "Iphone 16 Pro", 200m, 100 },
                    { 5, "En iyi Telefon", "Image1.jpg", true, "Iphone 16 Pro Max", 200m, 100 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);
        }
    }
}
