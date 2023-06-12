type taskType = {
  taskName: string;
  arrayOfTaskDays: [{ id: number; isDone: true }];
};

export type taskPropsType = {
  id: number;
  name: string;
};
export default taskType;
