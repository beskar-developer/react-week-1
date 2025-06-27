const useTaskList = () => {
  const { tasks } = useToDoListContext();

  const hasTasks = tasks.length;

  return { tasks, hasTasks };
};

export default useTaskList;
