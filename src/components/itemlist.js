import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ItemCard from "./itemcard";
// function addtocart(str) {
//   console.log(str);
// }
export default function ItemList({ addtocart, items }) {
  return (
    <ImageList rowHeight={"auto"} cols={4}>
      {items.map((item, index) => (
        <ItemCard Index={index} Addtocart={addtocart} item={item} />
      ))}
    </ImageList>
  );
}
