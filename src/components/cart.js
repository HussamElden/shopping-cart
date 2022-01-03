import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Cart({ Cartitems, items, increase, decrease }) {
  const navigate = useNavigate();

  const handleItemRedirect = (link) => {
    navigate(link);
  };
  var total = 0;
  console.log("cart" + Cartitems);
  return (
    <Box style={{ marginTop: "10px" }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          item
          xs={8}
        >
          <List>
            {Cartitems.map((itemindex, index) => {
              var itemid = itemindex[0];
              var itemamount = itemindex[1];
              total = total + items[itemid].price * itemamount;
              return (
                <div>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt={items[itemid].title}
                        src={items[itemid].img}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={items[itemid].title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {items[itemid].price} $ <br />
                            Amount :
                            <IconButton
                              color="primary"
                              onClick={() => decrease(index)}
                            >
                              <ArrowLeftIcon />
                            </IconButton>
                            {itemamount}
                            <IconButton
                              color="primary"
                              onClick={() => increase(index)}
                            >
                              <ArrowRightIcon />
                            </IconButton>
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={4}>
          <h3>TOTAL:</h3>
          {total} $
          <br />
          <br />
          <Button variant="contained">Check Out</Button>
          <Button
            onClick={() => handleItemRedirect("/itemlist")}
            style={{ marginLeft: "10px" }}
            variant="contained"
          >
            Continue shoping
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
