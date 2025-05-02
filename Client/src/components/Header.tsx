import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router";

function Header() {
  const links = [
    { title: "Home", to: "/" },
    { title: "Catalog", to: "/catalog" },
    { title: "About", to: "/about" },
    { title: "Contact", to: "/contact" },
  ];

  const navStyles = {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: "yellow",
    },
    "&.active": {
      color: "#68cde9",
    },
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce App
          </Typography>
          <Stack direction="row" >
            {links.map((link) => (
              <Button component={NavLink} to={link.to} sx={navStyles}>
                {link.title}
              </Button>
            ))}
          </Stack>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" edge="start" color="inherit">
            <Badge badgeContent="2" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
