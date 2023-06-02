export function getDayAndMonthRelativeToToday(offset: number): string {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + offset);
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so we add 1
  return `${day}.${month}`;
}

export function giveArrayOfSquares(taskName: string) {
  const arrayOfSquares = [];
  for (let i = 0; i < 7; i++) {
    arrayOfSquares[i] = { id: taskName + "/" + i, isDone: false };
  }
  return arrayOfSquares;
}
