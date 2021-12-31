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

export default function Cart({ Cartitems, items }) {
  var total = 0;
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
            {Cartitems.map((itemindex) => {
              total = total + items[itemindex].price;
              return (
                <div>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt={items[itemindex].title}
                        src={items[itemindex].img}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={items[itemindex].title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {items[itemindex].price} $
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
        </Grid>
      </Grid>
    </Box>
  );
}
