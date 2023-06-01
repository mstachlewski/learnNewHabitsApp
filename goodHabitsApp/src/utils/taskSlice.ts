import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  taskName: string;
  arrayOfTaskDays: [{ id: number; isDone: true }];
}[];

const taskSlice = createSlice({
  name: "task",
  initialState: [{}],
  reducers: {
    addNewTaskToArray: (
      state,
      action: PayloadAction<{
        name: string;
        arrayOfTaskDays: { id: number; isDone: true }[];
      }>
    ) => {
      state.push({
        taskName: action.payload.name,
        arrayOfTaskDays: action.payload.arrayOfTaskDays,
      });
    },
    deleteTaskFromArray: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});

export default taskSlice.reducer;
export const { addNewTaskToArray, deleteTaskFromArray } = taskSlice.actions;
