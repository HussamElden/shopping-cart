import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ItemCard({ title, Price, Img }) {
  return (
    <Card sx={{ Width: 100, height: 275 }}>
      <CardContent
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <br />
        <img src={Img} alt={title} style={{ height: "150px" }}></img>

        <Typography variant="body2">{Price}</Typography>
      </CardContent>
    </Card>
  );
}
