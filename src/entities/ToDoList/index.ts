import type { Task as ITask } from "@/types/ToDoList";
import { uuid } from "@shared-vendor/libs";

export const Task = class implements ITask {
  text: string;
  id: string;
  isDone: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = uuid.generate();
    this.isDone = false;
  }
};
