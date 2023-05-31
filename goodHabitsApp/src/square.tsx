import { Button } from "@mui/material";
import { useState } from "react";

function Square() {
  const [isClicked, setIsClicked] = useState(false);

  const handleSquareClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Button
      color="secondary"
      variant={isClicked ? "contained" : "outlined"}
      onClick={handleSquareClick}
      sx={{
        border: "2px solid #7895B2",
        height: 64,
        m: "1px",
      }}
    ></Button>
  );
}

export default Square;
