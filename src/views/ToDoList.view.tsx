import { ActionForm, SearchField, TaskList } from "@/components/ToDoList";

const ToDoList = () => {
  return (
    <div className="app-container flex flex-col items-center gap-8 dark:text-white">
      <h1 className="text-center text-3xl font-black text-indigo-500 dark:text-indigo-200">Todo List</h1>

      <div className="grid w-full gap-4 sm:w-100 sm:grid-cols-1 md:w-160 md:grid-cols-[1.4fr_1fr]">
        <Card className="p-6">
          <TaskList />
        </Card>

        <div className="flex max-h-min flex-col gap-4">
          <Card className="flex flex-col gap-8 p-6">
            <ThemeToggleButton />

            <SearchField />
          </Card>

          <Card className="p-6">
            <ActionForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
