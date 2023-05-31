import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  id: number;
  taskName: string;
  isClicked: boolean;
}

const initialState: CounterState[] = [
  { id: 0, taskName: "", isClicked: false },
];

export const counterSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      state.push({ id: 1, taskName: action.payload, isClicked: false });
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
