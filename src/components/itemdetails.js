import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
export default function ItemDetails({ Addtocart, items }) {
  const id = useParams().id;
  console.log(id);
  var itemindex = items.findIndex((i) => i.key === id);
  var item = items[itemindex];
  return (
    <Box style={{ marginTop: "10px" }} sx={{ flexGrow: 1 }}>
      <h2>{item.title}</h2>
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
          <img
            style={{ height: "400px", width: "400px" }}
            src={item.img}
            alt={item.title}
          ></img>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ padding: "10px" }} elevation={5}>
            <h4>Description:</h4>
            <p>{item.description}</p>
          </Paper>
          <br />
          <Button onClick={() => Addtocart(itemindex)} variant="contained">
            Add To Cart
          </Button>
        </Grid>
        <Grid item xs={11}>
          <Paper style={{ padding: "10px", height: "100px" }} elevation={5}>
            <ul>
              <li>
                <b>Price :</b> {item.price}
              </li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
