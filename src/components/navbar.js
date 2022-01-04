import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Breadcrumbs } from "@mui/material";
import Badge from "@mui/material/Badge";
export default function NavBar({ cartitems }) {
  const navigate = useNavigate();

  const handleItemRedirect = (link) => {
    navigate(link);
  };
  return (
    <Box sx={{ flexGrow: 100 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EveryThing Store
            <Breadcrumbs
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              aria-label="breadcrumb"
            >
              <Button
                key="Home"
                onClick={() => handleItemRedirect("/shopping-cart")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              <Button
                key="Home"
                onClick={() => handleItemRedirect("/itemlist")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Shoping List
              </Button>
            </Breadcrumbs>
          </Typography>
          <Button
            key="Home"
            onClick={() => handleItemRedirect("/cart")}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Badge badgeContent={cartitems} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
