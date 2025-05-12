import { createBrowserRouter, Navigate } from "react-router";
import App from "../components/App";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import CatalogPage from "../pages/catalog/Catalog";
import ProductDetailsPage from "../pages/catalog/ProductDetails";
import ErrorPage from "../pages/Error";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import { ContactPage } from "@mui/icons-material";

export const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            children:[
                
                    {path:"", element:<HomePage/>},
                    {path:"about",element:<AboutPage/>},
                    {path:"contact",element:<ContactPage/>},
                    {path:"catalog",element:<CatalogPage/>},
                    {path:"error",element:<ErrorPage/>},
                    {path:"server-error",element:<ServerError/>},
                    {path:"not-found",element:<NotFound/>},
                    {path:"catalog/:id",element:<ProductDetailsPage/>},
                    {path:"*", element:<Navigate to="/not-found"/> }                 
            ]
        }
    ]
)