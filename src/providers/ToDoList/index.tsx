import ToDoListContext from "@/contexts/ToDoList";

import type { Task as ITask, TaskAction } from "@/types/ToDoList";
import { Task } from "@/entities/ToDoList";

const ToDoListProvider = ({ children }: FragmentProps) => {
  const [tasks, setTasks] = usePersistState<Array<ITask>>([], "TASKS");
  const [action, setAction] = useState<TaskAction>("ADD");
  const [selectedTaskId, setSelectedTaskId] = useState("");

  const addTask = (text: string) => setTasks((tasks) => [...tasks, new Task(text)]);

  const deleteTask = (id: string) => setTasks((tasks) => tasks.filter((task) => task.id !== id));

  const changeActionToEdit = (id: string) => {
    setSelectedTaskId(id);
    setAction("EDIT");
  };

  const editTask = (text: string) => {
    setTasks((tasks) => {
      const updatedTasks = deepClone(tasks);

      const taskIndex = findByKey(tasks, selectedTaskId, { index: true });

      updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], text };

      return updatedTasks;
    });
    setAction("ADD");
    setSelectedTaskId("");
  };

  const setTaskIsDone = (id: string, value: boolean) => {
    setTasks((tasks) => {
      const updatedTasks = deepClone(tasks);

      const taskIndex = findByKey(tasks, id, { index: true });

      updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], isDone: value };

      return updatedTasks;
    });
  };

  const value = {
    tasks,
    action,
    selectedTaskId,
    addTask,
    deleteTask,
    changeActionToEdit,
    editTask,
    setTaskIsDone,
  };

  return <ToDoListContext.Provider value={value}>{children}</ToDoListContext.Provider>;
};

export default ToDoListProvider;
