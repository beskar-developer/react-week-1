import TrashSvg from "@/assets/svg/trash.svg?react";
import PenSvg from "@/assets/svg/pen.svg?react";

import type { Props } from "./Task.type";

const useTask = (id: Props["id"]) => {
  const { tasks, changeActionToEdit, deleteTask, selectedTaskId, setTaskIsDone } = useToDoListContext();

  const task = findByKey(tasks, id)!;

  const isSelected = id === selectedTaskId;

  const wrapSetTaskIsDone = (value: boolean) => setTaskIsDone(id, value);

  const actions = [
    {
      Component: PenSvg,
      name: "edit",
      className: "[&>*]:stroke-indigo-400",
      onClick: () => changeActionToEdit(id),
    },
    {
      Component: TrashSvg,
      name: "delete",
      className: "[&>*]:stroke-red-600",
      onClick: () => deleteTask(id),
    },
  ];

  return { task, isSelected, actions, setTaskIsDone: wrapSetTaskIsDone };
};

export default useTask;
