import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Breadcrumbs } from "@mui/material";
import Badge from "@mui/material/Badge";
export default function NavBar({ cartitems }) {
  return (
    <Box sx={{ flexGrow: 100 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Store
            <Breadcrumbs
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              aria-label="breadcrumb"
            >
              <Link to="/">
                <Typography textAlign="center">Home</Typography>
              </Link>
              <Link underline="hover" color="inherit" to="/itemlist">
                <Typography textAlign="center">Shoping List</Typography>
              </Link>
            </Breadcrumbs>
          </Typography>
          <Badge badgeContent={cartitems} color="primary">
            <Link underline="hover" color="inherit" to="/cart">
              <ShoppingBasketIcon />
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
