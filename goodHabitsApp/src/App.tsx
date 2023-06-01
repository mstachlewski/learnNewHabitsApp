import { Box, Button, TextField } from "@mui/material";
import "./App.css";
import ButtonAppBar from "./navbar.tsx";
import Task from "./task.tsx";
import { useState } from "react";
import taskType from "./utils/types.ts";
import store from "./utils/store.tsx";
import { addNewTaskToArray } from "./utils/taskSlice.ts";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "./utils/hooks.ts";

function App() {
  const [isFormOn, setIsFormOn] = useState<boolean>(false);
  const [inputTaskNameValue, setInputTaskNameValue] = useState<string>("");
  const task = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  console.log(
    "task",
    useSelector((state) => state)
  );

  const readTaskName = (e) => {
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
    return task.map((task: taskType, index) => (
      <Task taskName={task.taskName} arrayOfTaskDays={[{}]} id={index} />
    ));
  };

  return (
    <>
      <Box>
        <ButtonAppBar />
      </Box>
      <Box>
        <Box className="TaskContainer" sx={{ mt: 6 }}>
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
