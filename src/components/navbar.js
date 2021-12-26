import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./itemlist";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 100 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <BrowserRouter>
            <Routes>
              <Route path="/itemlist" element={<ItemList />} />
            </Routes>
          </BrowserRouter>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
