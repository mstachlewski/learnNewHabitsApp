import { Box, Button, TextField } from "@mui/material";
import "./App.css";
import ButtonAppBar from "./navbar.tsx";
import Task from "./task.tsx";
import { useState } from "react";
import { addNewTaskToArray } from "./utils/taskSlice.ts";
import { useAppSelector, useAppDispatch } from "./utils/hooks.ts";
import DateDisplay from "./DateDisplay.tsx";

function App() {
  const [isFormOn, setIsFormOn] = useState<boolean>(false);
  const [inputTaskNameValue, setInputTaskNameValue] = useState<string>("");
  const task = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  console.log(
    "task",
    useAppSelector((state) => state)
  );

  const readTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTaskNameValue(e.currentTarget.value);
  };

  const addNewTask = () => {
    setIsFormOn(!isFormOn);
    if (isFormOn) {
      dispatch(
        addNewTaskToArray({
          name: inputTaskNameValue,
          arrayOfTaskDays: [],
        })
      );
      setInputTaskNameValue("");
    }
  };

  const renderTasks = () => {
    return task.map((_, index) => <Task id={index} />);
  };

  return (
    <>
      <Box>
        <ButtonAppBar />
      </Box>
      <Box>
        <Box className="TaskContainer" sx={{ mt: 6 }}>
          {DateDisplay()}
          {renderTasks()}
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {isFormOn && (
            <TextField
              sx={{ ml: 4 }}
              id="standard-basic"
              label="Name of new habit:"
              variant="standard"
              onChange={readTaskName}
              value={inputTaskNameValue}
            />
          )}
          <Button
            onClick={addNewTask}
            variant="contained"
            color="primary"
            sx={{ mx: 4, my: 6, width: 100, height: 100 }}
          >
            + Add
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
