import useTaskList from "./UseTaskList.hook";

import { NoTask, Task as ToDoTask } from "@/components/ToDoList";

const ANIMATION_CONFIG: MotionProps = {
  layout: true,
  initial: { opacity: 0, x: -400, scale: 0.5 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: 200, scale: 1.2 },
  transition: { duration: 0.6, type: "spring" },
};

const TaskList = () => {
  const { tasks, hasTasks } = useTaskList();

  return (
    <motion.ul className="size-full divide-y-1 divide-indigo-500">
      {hasTasks ? (
        tasks.map((task) => (
          <motion.li {...ANIMATION_CONFIG} key={task.id}>
            <ToDoTask id={task.id} />
          </motion.li>
        ))
      ) : (
        <motion.li {...ANIMATION_CONFIG} className="size-full">
          <NoTask />
        </motion.li>
      )}
    </motion.ul>
  );
};

export default TaskList;
