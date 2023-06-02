import { Button } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "./utils/hooks.ts";
import { setTaskIsDone } from "./utils/taskSlice.ts";

function Square(props: { id: number; idOfTask: number }) {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useAppDispatch();
  const handleSquareClick = () => {
    setIsClicked(!isClicked);
    dispatch(setTaskIsDone({ idOfTask: props.idOfTask, idOfDay: props.id }));
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
