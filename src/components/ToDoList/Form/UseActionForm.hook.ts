type FormValues = {
  text: string;
};

type Field = {
  name: keyof FormValues;
  label: string;
  rules: object;
};

const fields: Array<Field> = [
  {
    name: "text",
    label: "متن",
    rules: {
      validate: {
        required: validateRequired,
        minLength: (value: string) => validateMinLength(value, 3),
      },
    },
  },
];

const INITIAL_FORM_VALUES: FormValues = {
  text: "",
};

const useActionForm = () => {
  const { tasks, selectedTaskId, action, addTask, editTask } = useToDoListContext();

  const { control, formState, reset, setValue, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: INITIAL_FORM_VALUES,
  });

  const selectedTask = findByKey(tasks, selectedTaskId);
  const isEditAction = action === "EDIT";

  useEffect(() => {
    if (isEditAction && selectedTask) {
      setValue("text", selectedTask.text);

      return;
    }

    reset();
  }, [isEditAction, selectedTask, reset, setValue]);

  const buttonLabel = action === "ADD" ? "افزودن" : "ویرایش";

  const actionMap = {
    ADD: addTask,
    EDIT: editTask,
  };
  const executeAction = ({ text }: FormValues) => {
    const execute = actionMap[action];

    execute(text);
    reset();
  };
  const submitForm = handleSubmit(executeAction);

  return { fields, control, formState, buttonLabel, submitForm };
};

export default useActionForm;
