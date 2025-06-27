import { CONTEXT_ERROR_MESSAGE } from "@shared-vendor/constants";

import ToDoListContext from "@/contexts/ToDoList";

export const useToDoListContext = () => {
  const context = useContext(ToDoListContext);

  if (!context) throw new Error(CONTEXT_ERROR_MESSAGE);

  return context;
};
