type FormValues = {
  text: string;
};

type Field = {
  name: keyof FormValues;
  label: string;
  rules?: object;
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

  const {
    formState: { errors, isSubmitting },
    register,
    reset,
    setValue,
    handleSubmit,
  } = useForm<FormValues>({
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
  }, [isEditAction, selectedTask]);

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

  return { fields, errors, isSubmitting, buttonLabel, register, submitForm };
};

export default useActionForm;
