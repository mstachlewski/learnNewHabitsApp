import { Typography, Box, Paper, Tab, TextField } from "@mui/material";
import Square from "./square";
import { Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector, useAppDispatch } from "./utils/hooks.ts";
import { taskPropsType } from "./utils/types.ts";
import { deleteTaskFromArray, setNewName } from "./utils/taskSlice.ts";
import { useState, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";

function Task(props: taskPropsType) {
  const [editTask, setEditTask] = useState<boolean>(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [taskArray, setTaskArray] = useState([{}]);

  const task = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const readTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.currentTarget.value);
  };

  const openNameEditor = () => {
    setEditTask(true);
  };

  const editName = () => {
    setEditTask(false);
    console.log(editTask);
    dispatch(setNewName({ id: props.id, newName: newTaskName }));
  };

  const deleteTask = () => {
    axios.delete(`http://localhost:5000/tasklist/${props.name}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    console.log("taskTable");
    axios
      .get(`http://127.0.0.1:5000/tasklist`)
      .then((res) => setTaskArray(res.data))
      .catch((err) => console.log(err));
  }, [editTask]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          my: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "flex-start" },
          alignContent: { xs: "center", sm: "flex-start" },
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: "30%", overflowWrap: "break-word" }}>
          <Typography
            sx={{
              mx: 4,
              my: 2,
            }}
          >
            {editTask ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  value={newTaskName}
                  id=""
                  onChange={readTaskName}
                  label="edit name of your goal:"
                  variant="outlined"
                />
                <Chip
                  sx={{ m: 1, ml: 2, ":hover": { color: "green" } }}
                  label="done"
                  onClick={editName}
                  icon={<CheckIcon />}
                ></Chip>
              </Box>
            ) : (
              <Box onClick={openNameEditor}>{props.name}</Box>
            )}
          </Typography>
        </Box>
        <Box sx={{ ml: "40px" }}>
          <Square id={0} idOfTask={props.id}></Square>
          <Square id={1} idOfTask={props.id}></Square>
          <Square id={2} idOfTask={props.id}></Square>
          <Square id={3} idOfTask={props.id}></Square>
          <Square id={4} idOfTask={props.id}></Square>
          <Square id={5} idOfTask={props.id}></Square>
          <Square id={6} idOfTask={props.id}></Square>
        </Box>

        <Chip
          label="delete"
          sx={{
            mx: 2,
            ":hover": { color: "red", bgcolor: "#ded8ce" },
          }}
          onClick={deleteTask}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
      </Box>
    </>
  );
}

export default Task;
