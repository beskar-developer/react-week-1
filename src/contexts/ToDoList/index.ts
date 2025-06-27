import type { Task, TaskAction } from "@/types/ToDoList";

type Context = {
  tasks: Array<Task>;
  searchedValue: string;
  action: TaskAction;
  selectedTaskId: string;
  setSearchedValue: (value: string) => void;
  addTask: (text: string) => void;
  deleteTask: (id: string) => void;
  changeActionToEdit: (id: string) => void;
  editTask: (text: string) => void;
  setTaskIsDone: (id: string, value: boolean) => void;
};

const INITIAL_VALUE: Context = {
  tasks: [],
  searchedValue: "",
  action: "ADD",
  selectedTaskId: "",
  setSearchedValue: () => {},
  addTask: () => {},
  deleteTask: () => {},
  changeActionToEdit: () => {},
  editTask: () => {},
  setTaskIsDone: () => {},
};

const ToDoListContext = createContext<Context>(INITIAL_VALUE);

export default ToDoListContext;
