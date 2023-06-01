type taskType = {
  taskName: string;
  arrayOfTaskDays: [{ id: number; isDone: true }];
};

export type taskPropsType = {
  id: number;
  taskName: string;
  arrayOfTaskDays: [{ id: number; isDone: true }];
};
export default taskType;
