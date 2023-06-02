import { Box } from "@mui/material";

export default function DateDisplay() {
  const date = new Date();

  function getDayAndMonthRelativeToToday(offset: number): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + offset);
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so we add 1
    return `${day}.${month}`;
  }

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
        <Box sx={{ width: 64, ml: "1px" }}>{`${getDayAndMonthRelativeToToday(
          -3
        )}`}</Box>
        <Box sx={{ width: 64, ml: "1px" }}>{`${getDayAndMonthRelativeToToday(
          -2
        )}`}</Box>
        <Box sx={{ width: 64, ml: "1px" }}>{`${getDayAndMonthRelativeToToday(
          -1
        )}`}</Box>
        <Box sx={{ width: 64, ml: "1px" }}>{`${getDayAndMonthRelativeToToday(
          0
        )}`}</Box>
        <Box sx={{ width: 64, ml: "1px" }}>{`${getDayAndMonthRelativeToToday(
          1
        )}`}</Box>
        <Box sx={{ width: 64, ml: "1px" }}>{`${getDayAndMonthRelativeToToday(
          2
        )}`}</Box>
        <Box sx={{ width: 64, ml: "1px" }}>{`${getDayAndMonthRelativeToToday(
          3
        )}`}</Box>
      </Box>
    </Box>
  );
}
