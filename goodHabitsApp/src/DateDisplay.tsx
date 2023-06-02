import { Box, Chip, IconButton } from "@mui/material";
import { getDayAndMonthRelativeToToday } from "./utils/functions";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

export default function DateDisplay() {
  const [daysOffset, setDaysOffset] = useState(0);

  const goLeft = () => {
    setDaysOffset(daysOffset - 1);
  };
  const goRight = () => {
    setDaysOffset(daysOffset + 1);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "30%" }}></Box>
      <IconButton onClick={goLeft}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        {/* Maybe change color of chip based on how many tasks you acomplished that day  */}
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(daysOffset - 3)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(daysOffset - 2)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(daysOffset - 1)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(daysOffset)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(daysOffset + 1)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(daysOffset + 2)}`}
        ></Chip>
        <Chip
          color="secondary"
          sx={{ width: 64, mx: "1px" }}
          label={`${getDayAndMonthRelativeToToday(daysOffset + 3)}`}
        ></Chip>
      </Box>
      <IconButton onClick={goRight}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
