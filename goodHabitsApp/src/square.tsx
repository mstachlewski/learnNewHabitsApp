import { Button } from "@mui/material";

function Square() {
  return (
    <Button
      variant="outlined"
      sx={{
        border: 2,
        height: 64,
        m: "1px",
      }}
    ></Button>
  );
}

export default Square;
