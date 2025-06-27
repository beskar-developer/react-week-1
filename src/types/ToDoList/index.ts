export interface Task {
  text: string;
  id: string;
  isDone: boolean;
}

export type TaskAction = "ADD" | "EDIT";
