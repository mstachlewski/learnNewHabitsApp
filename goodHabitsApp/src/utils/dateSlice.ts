import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const dateSlice = createSlice({
  name: "date",
  initialState: initialState,
  reducers: {
    decreaseDate: (state) => {
      state.value -= 7;
    },
    increaseDate: (state) => {
      state.value += 7;
    },
  },
});

export default dateSlice.reducer;
export const { decreaseDate, increaseDate } = dateSlice.actions;
