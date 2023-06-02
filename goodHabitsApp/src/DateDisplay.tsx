import { Box, Chip } from "@mui/material";
import { getDayAndMonthRelativeToToday } from "./utils/functions";

export default function DateDisplay() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "30%" }}></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        {/* Maybe change color of chip based on how many tasks you acomplished that day  */}
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(-3)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(-2)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(-1)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(0)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(1)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(2)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(3)}`}
        ></Chip>
      </Box>
    </Box>
  );
}
