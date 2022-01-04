import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  var height = window.innerHeight + "px";
  const handleItemRedirect = (link) => {
    navigate(link);
  };
  return (
    <div
      style={{
        height: height,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "20px",
        backgroundImage: `url("https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1451227902/content-items/001/486/849/RANDOMSTUFF-original.jpg?1451227902")`,
      }}
    >
      <Paper
        style={{ padding: "10px", backgroundColor: "#1976d2" }}
        elevation={10}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: 200 }}
          color="text.primary"
          gutterBottom
        >
          EveryThing Store
        </Typography>
      </Paper>
      <Button
        key="Home"
        variant="contained"
        onClick={() => handleItemRedirect("/itemlist")}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Shop Now
      </Button>
    </div>
  );
}
