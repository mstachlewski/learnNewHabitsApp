import { Box, Button } from "@mui/material";
import "./App.css";
import ButtonAppBar from "./navbar.tsx";
import Task from "./task.tsx";
import { useState } from "react";
import taskType from "./utils/types.ts";
import type { RootState } from "./utils/store.tsx";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./utils/tasksReducer.ts";

function App() {
  const count = useSelector((state: RootState) => state.counter[5].taskName);
  const dispatch = useDispatch();
  const [tasksArray, setTasksArray] = useState<taskType[]>([]);

  const addNewTask = () => {
    dispatch(dispatch(increment("taskNAme")));
    const tempTasksArray = [...tasksArray];
    tempTasksArray.push({
      taskName: "Task1",
      isDone: false,
    });
    setTasksArray(tempTasksArray);
  };

  const renderTasks = () => {
    return tasksArray.map((task) => (
      <Task taskName={task.taskName} isDone={false} />
    ));
  };

  return (
    <>
      <Box>
        asd{count}
        <ButtonAppBar />
      </Box>
      <Box>
        <Box className="TaskContainer" sx={{ mt: 6 }}>
          {renderTasks()}
        </Box>
        <Button
          onClick={addNewTask}
          variant="contained"
          color="primary"
          sx={{ mx: 4, my: 6, width: 100, height: 100 }}
        >
          + Add
        </Button>
      </Box>
    </>
  );
}

export default App;
