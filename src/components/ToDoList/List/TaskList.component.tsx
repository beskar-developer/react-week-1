import useTaskList from "./UseTaskList.hook";

import { NoTask, Task as ToDoTask } from "@/components/ToDoList";

const TaskList = () => {
  const { tasks, hasTasks } = useTaskList();

  return (
    <>
      {hasTasks ? (
        tasks.map((task) => (
          <div key={task.id}>
            <ToDoTask id={task.id} />
          </div>
        ))
      ) : (
        <NoTask />
      )}
    </>
  );
};

export default TaskList;
