import { Typography, Box } from "@mui/material";
import Square from "./square";
import { Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector, useAppDispatch } from "./utils/hooks.ts";
import { taskPropsType } from "./utils/types.ts";
import { deleteTaskFromArray } from "./utils/taskSlice.ts";

function Task(props: taskPropsType) {
  const task = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
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
            {task[props.id].taskName}
          </Typography>
        </Box>
        <Box>
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
          onClick={() => dispatch(deleteTaskFromArray(props.id))}
          //onDelete={handleDelete}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
      </Box>
    </>
  );
}

export default Task;
