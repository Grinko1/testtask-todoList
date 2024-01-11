export type Status = "completed" | "inprogress" | "new";

export interface Todo {
  id: number;
  title: string;
  text: string;
  status: Status;
  completed: boolean;
}
