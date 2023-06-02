import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  taskName: string;
  arrayOfTaskDays: { id: string; isDone: boolean }[];
}[];

const initialState: initialState = [];

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addNewTaskToArray: (
      state,
      action: PayloadAction<{
        name: string;
        arrayOfTaskDays: { id: string; isDone: boolean }[];
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
    setTaskIsDone: (
      state,
      action: PayloadAction<{ idOfTask: number; idOfDay: number }>
    ) => {
      state[action.payload.idOfTask].arrayOfTaskDays[
        action.payload.idOfDay
      ].isDone =
        !state[action.payload.idOfTask].arrayOfTaskDays[action.payload.idOfDay]
          .isDone;
    },
  },
});

export default taskSlice.reducer;
export const { addNewTaskToArray, deleteTaskFromArray, setTaskIsDone } =
  taskSlice.actions;
