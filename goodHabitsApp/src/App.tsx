import { Box, Button, TextField } from "@mui/material";
import "./App.css";
import ButtonAppBar from "./navbar.tsx";
import Task from "./task.tsx";
import { useEffect, useState } from "react";
import { addNewTaskToArray } from "./utils/taskSlice.ts";
import { useAppSelector, useAppDispatch } from "./utils/hooks.ts";
import DateDisplay from "./DateDisplay.tsx";
import { giveArrayOfSquares } from "./utils/functions.ts";
import axios from "axios";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

// const api = axios.create({
//   baseURL: `http://localhost:3000`,
// });

function App() {
  const [taskArray, setTaskArray] = useState([{}]);

  useEffect(() => {
    console.log("taskTable");
    axios
      .get(`http://127.0.0.1:5000/tasklist`)
      .then((res) => setTaskArray(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(taskArray);

  const [isFormOn, setIsFormOn] = useState<boolean>(false);
  const [inputTaskNameValue, setInputTaskNameValue] = useState<string>("");
  const task = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const readTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTaskNameValue(e.currentTarget.value);
  };

  const addNewTask = () => {
    setIsFormOn(!isFormOn);
    if (isFormOn) {
      const temparr = giveArrayOfSquares(inputTaskNameValue);
      axios
        .post("http://localhost:5000/tasklist", { name: inputTaskNameValue })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      console.log(task);
      dispatch(
        addNewTaskToArray({
          name: inputTaskNameValue,
          arrayOfTaskDays: temparr,
        })
      );
      setInputTaskNameValue("");
    }
  };

  const renderTasks = () => {
    return taskArray.map((elem, index) => <Task id={index} name={elem.name} />);
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
            color="success"
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
