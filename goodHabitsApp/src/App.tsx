import { Container, Typography, Box, Button } from "@mui/material";
import "./App.css";
import ButtonAppBar from "./navbar.tsx";
import Task from "./task.tsx";
import { useEffect, useState } from "react";
import taskType from "./utils/types.ts";
// import { addNewTask } from "./utils/functions.ts";

function App() {
  const [tasksArray, setTasksArray] = useState<taskType[]>([]);

  const addNewTask = () => {
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
        <ButtonAppBar />
      </Box>
      <Box>
        <Box className="TaskContainer" sx={{ mt: 6 }}>
          {renderTasks()}
        </Box>
        <Button
          onClick={addNewTask}
          variant="contained"
          sx={{ mx: 4, my: 6, width: 100, height: 100 }}
        >
          + Add
        </Button>
      </Box>
    </>
  );
}

export default App;
