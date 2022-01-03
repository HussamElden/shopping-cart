import Snackbar from "@mui/material/Snackbar";
import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./cart";
import ItemDetails from "./itemdetails";
import ItemList from "./itemlist";
import NavBar from "./navbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Home from "./home";
export default function Routers() {
  const [Cartitems, setCartItems] = useState([]);
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });

  const { open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  function AddToCard(item) {
    var itemindex = Cartitems.findIndex((i) => i[0] === item);

    var Tempcart = [...Cartitems];

    if (itemindex === -1) {
      Tempcart.push([item, 1]);
    } else {
      Tempcart[itemindex][1]++;
    }

    setCartItems(Tempcart);
    console.log(Cartitems);
    setState({ open: true, vertical: "bottom", horizontal: "left" });
  }
  function increaseamount(index) {
    var Tempcart = [...Cartitems];
    Tempcart[index][1]++;
    setCartItems(Tempcart);
    setState({ open: true, vertical: "bottom", horizontal: "left" });
  }
  function decreaseamount(index) {
    var Tempcart = [...Cartitems];
    Tempcart[index][1]--;
    if (Tempcart[index][1] === 0) {
      Tempcart.splice(index, 1);
    }
    setCartItems(Tempcart);
  }
  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );
  return (
    <BrowserRouter>
      <NavBar cartitems={Cartitems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/itemlist"
          element={<ItemList addtocart={AddToCard} items={itemData} />}
        />
        <Route
          path="/itemdetails/:id"
          element={<ItemDetails Addtocart={AddToCard} items={itemData} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              Cartitems={Cartitems}
              items={itemData}
              increase={increaseamount}
              decrease={decreaseamount}
            />
          }
        />
      </Routes>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Item Added to cart"
        action={action}
      />
    </BrowserRouter>
  );
}
const itemData = [
  {
    key: "1",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "2",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "3",
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "4",
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "5",
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "6",
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "7",
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "8",
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "9",
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "10",
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "11",
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
  {
    key: "12",
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    price: 100,
    description:
      "Cillum cillum pariatur officia consequat qui deserunt deserunt voluptate. Dolor excepteur elit ut nulla dolor irure laborum commodo cillum nisi esse laboris reprehenderit. Aliqua magna nostrud anim labore aliqua mollit ullamco veniam in minim magna occaecat dolore do. Ea laborum deserunt officia aliqua adipisicing elit excepteur tempor. Culpa adipisicing anim labore id quis aute in aliqua nisi qui laborum.",
  },
];
