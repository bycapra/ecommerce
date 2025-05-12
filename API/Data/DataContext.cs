
using System.Diagnostics;
using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{

    public DataContext(DbContextOptions options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
        new List<Product>{
            new Product{Id=1, Name="Iphone 15",Description="Güzel Bir Telefon",ImageUrl="Image1.jpg",Price=100,IsActive=true,Stock=100},
             new Product{Id=2, Name="Iphone 15SE",Description="İdeal Bir Telefon",ImageUrl="Image1.jpg",Price=80,IsActive=true,Stock=100},
              new Product{Id=3, Name="Iphone 16",Description="Gelişmiş Bir Telefon",ImageUrl="Image1.jpg",Price=150,IsActive=true,Stock=100},
               new Product{Id=4, Name="Iphone 16 Pro",Description="Ust Düzey Bir Telefon",ImageUrl="Image1.jpg",Price=200,IsActive=true,Stock=100},
                new Product{Id=5, Name="Iphone 16 Pro Max",Description="En iyi Telefon",ImageUrl="Image1.jpg",Price=200,IsActive=true,Stock=100}
        }

        );
    }

    public DbSet<Product> Products => Set<Product>();
    public DbSet<Cart> Carts => Set<Cart>();

}