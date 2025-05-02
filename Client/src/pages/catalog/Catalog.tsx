import { useEffect, useState } from "react";
import { IProduct } from "../../model/IProduct";
import ProductList from "./ProductList";

function CatalogPage(){
     const [products, setProducts] = useState<IProduct[]>([]);
    
      useEffect(() => {
        fetch("http://localhost:5130/api/products")
          .then((response) => response.json())
          .then((data) => setProducts(data)).catch((e)=>console.log("Error: " + e));
      }, []);


    return(
        <ProductList products={products}/>
    );
}
export default CatalogPage  