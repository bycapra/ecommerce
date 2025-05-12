using API.Data;
using API.DTOs;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class CartController : ControllerBase
{

    private readonly DataContext _dataContext;

    public CartController(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    [HttpGet(Name = "GetCart")]
    public async Task<ActionResult<CartDto>> GetCardAsync()

    {
        return CartToDto(await GetOrCreateAsync());
    }

    [HttpPost]
    public async Task<IActionResult> AddItemToCard(int productId, int quantity)
    {
        var cart = await GetOrCreateAsync();
        var product = await _dataContext.Products.FirstOrDefaultAsync(x => x.Id == productId);

        if (product == null)
        {
            return NotFound("Provided product not found!");
        }

        cart.AddToCart(product, quantity);

        var result = await _dataContext.SaveChangesAsync() > 0;

        if (result)
            return Created();

        return BadRequest(new ProblemDetails { Title = "Product could not add to cart!" });

    }

    [HttpDelete]

    public async Task<IActionResult> DeleteItemFromCart(int productId, int quantity)
    {
        var cart = await GetOrCreateAsync();

        cart.RemoveFromCart(productId, quantity);

        var result = await _dataContext.SaveChangesAsync() > 0;

        if (result)
            return Ok("Cart Item Deleted");

        return BadRequest(new ProblemDetails { Title = "Cart Item could not deleted!" });

    }

    private async Task<Cart> GetOrCreateAsync()
    {
        var cart = await _dataContext.Carts
        .Include(x => x.CartItems)
        .ThenInclude(x => x.Product)
        .Where(x => x.CustomerId == Request.Cookies["CustomerId"])
        .FirstOrDefaultAsync();

        if (cart == null)
        {
            var customerId = Guid.NewGuid().ToString();

            var cookieOptions = new CookieOptions
            {
                Expires = DateTime.Now.AddMonths(1),
                IsEssential = true
            };
            Response.Cookies.Append("CustomerId", customerId, cookieOptions);
            cart = new Cart { CustomerId = customerId };
            _dataContext.Carts.Add(cart);

            await _dataContext.SaveChangesAsync();
            return cart;

        }
        return cart;
    }

    private CartDto CartToDto(Cart cart)
    {
        return new CartDto
        {
            CartId = cart.CartId,
            CustomerId = cart.CustomerId,
            CartItems = cart.CartItems.Select(item => new CartItemDto
            {
                ProductId = item.ProductId,
                Name = item.Product.Name,
                Price = item.Product.Price,
                Quantity = item.Quantity,
                ImageUrl = item.Product.ImageUrl
            }).ToList()
        };
    }
}