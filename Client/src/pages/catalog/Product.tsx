import { AddShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, colors, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router";

function Product(props:any){
    return (
       <Card>
        <CardMedia sx={{height:160,backgroundSize:"contain"}} image={`http://localhost:5130/images/${props.product.imageUrl}`} />
        <CardContent>
            <Typography gutterBottom variant="h6" component="h2" color="text.secondary">
                {props.product.name}
            </Typography>
            <Typography variant="body2" color="secondary">
                {props.product.price} ₺
            </Typography>
        </CardContent> 
        <CardActions sx={{ml:6}}>
            <Button variant="outlined" size="small" startIcon={<AddShoppingCart/>} color="success">Add to cart</Button>
            <Button component={Link} to={`/catalog/${props.product.id}`} variant="outlined" size="small" startIcon={<SearchIcon/>} color="primary">View</Button>
        </CardActions>
       </Card>
    )
}
export default Product;