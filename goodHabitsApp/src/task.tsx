import { Typography, Box } from "@mui/material";
import Square from "./square";
import { taskPropsType } from "./utils/types";
import { Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Task(props: taskPropsType) {
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
        <Typography
          sx={{
            mx: 4,
            my: 2,
          }}
        >
          {props.taskName}
        </Typography>
        <Box>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </Box>
        <Chip
          label="delete"
          sx={{
            mx: 2,
            ":hover": { color: "red", bgcolor: "#ded8ce" },
          }}
          //onClick={handleClick}
          //onDelete={handleDelete}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
      </Box>
    </>
  );
}

export default Task;
