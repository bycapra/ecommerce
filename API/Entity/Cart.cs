namespace API.Entity;

public class Cart{

    public int CartId { get; set; }
    public string CustomerId { get; set; } = null!;
    public List<CartItem> CartItems { get; set; } = new();


    //sepete ekle
    public void AddToCart(Product product, int quantity){
         var item = CartItems.FirstOrDefault(x=>x.Product.Id == product.Id);   

         if(item==null){
            CartItems.Add(new CartItem{Product =product,Quantity = quantity });
         }else{
            item.Quantity+=quantity;
         }
    }

    //sepetten çıkar
    public void RemoveFromCart(int productId,int quantity){
        var item = CartItems.FirstOrDefault(x=>x.Product.Id == productId);
        
        if(item!=null){
            item.Quantity-=quantity;
        }

        if(item?.Quantity ==0){
            CartItems.Remove(item);
        }   
    }

}