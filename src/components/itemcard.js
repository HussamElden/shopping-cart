import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

export default function ItemCard({ Index, item, Addtocart }) {
  const navigate = useNavigate();

  const handleItemRedirect = () => {
    navigate(`/ItemDetails/${item.key}`);
  };
  return (
    <Card sx={{ Width: 100, height: 300 }}>
      <CardContent
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.title}
        </Typography>
        <br />
        <img src={item.img} alt={item.title} style={{ height: "150px" }}></img>

        <Typography variant="body2">{item.Price}</Typography>
        <br />
        <div>
          <Button onClick={() => Addtocart(Index)} variant="contained">
            Add To Cart
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            variant="contained"
            onClick={handleItemRedirect}
          >
            More Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
