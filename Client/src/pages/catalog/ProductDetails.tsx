import { CircularProgress, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../model/IProduct";

function ProductDetailsPage() {
  //get id parameters
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5130/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("Hata: " + error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <CircularProgress />;

  if (!product) return <h5>Product not found!</h5>;

  return (
    <Grid container spacing={2}>
      <Grid size={{ lg: 4,md:5,sm:6,xs:12 }}>
        <img
          src={`http://localhost:5130/images/${product.imageUrl}`}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ lg: 8,md:7,sm:6,xs:12 }}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{mb:2}}/>
        <Typography variant="h4" color="secondary">{product.price} ₺</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>            
              <TableRow>
                <TableCell>Stock</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>              
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
export default ProductDetailsPage;
