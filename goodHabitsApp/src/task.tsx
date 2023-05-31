import { Typography, Box } from "@mui/material";
import Square from "./square";
import { taskPropsType } from "./utils/types";

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
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ mx: 4, my: 2 }}>{props.taskName}</Typography>
        <Box>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </Box>
      </Box>
    </>
  );
}

export default Task;
