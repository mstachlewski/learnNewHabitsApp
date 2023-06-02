import { Button } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./utils/hooks.ts";
import { setTaskIsDone } from "./utils/taskSlice.ts";

function Square(props: { id: number; idOfTask: number }) {
  const task = useAppSelector((state) => state.task);
  const [isClicked, setIsClicked] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const dispatch = useAppDispatch();
  const handleSquareClick = () => {
    setIsClicked(!isClicked);
    dispatch(setTaskIsDone({ idOfTask: props.idOfTask, idOfDay: props.id }));
  };

  return (
    <Button
      color="secondary"
      variant={
        task[props.idOfTask].arrayOfTaskDays[props.id].isDone
          ? "contained"
          : "outlined"
      }
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
