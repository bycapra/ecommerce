import { Grid } from "@mui/material";
import { IProduct } from "../../model/IProduct";
import Product from "./Product";

function ProductList(props: any) {
  return (
    <div>
      <Grid container spacing={2}>
        {props.products.map((p: IProduct) => (
          <Grid size={{xs:6,md:4,lg:3}}>
            <Product key={p.id} product={p} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductList;
