import type { Props } from "./Task.type";

import useTask from "./UseTask.hook";

const Task = ({ id }: Props) => {
  const { isSelected, task, actions, setTaskIsDone } = useTask(id);

  return (
    <div
      className={`${isSelected ? "bg-indigo-50 dark:bg-gray-700" : ""} flex items-center justify-between p-1 text-sm font-semibold duration-200`}
    >
      <Checkbox strikeLabel value={task.isDone} label={task.text} onValueChange={setTaskIsDone} />

      <div className="flex gap-2">
        {actions.map(({ Component, name, ...props }) => (
          <Component key={name} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Task;
