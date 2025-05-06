import { useEffect, useState } from "react";
import { IProduct } from "../../model/IProduct";
import ProductList from "./ProductList";
import requests from "../../api/requests";

function CatalogPage(){
     const [products, setProducts] = useState<IProduct[]>([]);
    
      useEffect(() => {
        requests.Catalog.list()          
          .then((data) => setProducts(data)).catch((e)=>console.log("ProductListError: " + e));
      }, []);


    return(
        <ProductList products={products}/>
    );
}
export default CatalogPage  