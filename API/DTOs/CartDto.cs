using API.Entity;

namespace API.DTOs;

public class CartDto
{
    public int CartId { get; set; }
    public string? CustomerId { get; set; }
    public List<CartItemDto> CartItems { get; set; } = new();
}