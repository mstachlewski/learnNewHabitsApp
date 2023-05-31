import { Container, Typography, Box, Button } from "@mui/material";
import "./App.css";
import ButtonAppBar from "./navbar.tsx";
import Task from "./task.tsx";
import { useEffect, useState } from "react";
// import { addNewTask } from "./utils/functions.ts";

function App() {
  const [tasksArray, setTasksArray] = useState([{}]);

  const addNewTask = () => {
    const tempTasksArray = [...tasksArray];
    tempTasksArray.push({
      id: tempTasksArray.length,
      taskName: "Task1",
      IsDone: false,
    });
    setTasksArray(tempTasksArray);
  };

  const renderTasks = () => {};

  return (
    <>
      <Box>
        <ButtonAppBar />
      </Box>
      <Box>
        <Box className="TaskContainer" sx={{ mt: 6 }}>
          <Task></Task>
          <Task></Task>
          <Task></Task>
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
