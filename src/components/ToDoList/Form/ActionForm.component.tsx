import useActionForm from "./UseActionForm.hook";

const ActionForm = () => {
  const { fields, control, formState, buttonLabel, submitForm } = useActionForm();

  return (
    <form className="flex flex-col gap-8">
      {fields.map((field) => (
        <Controller
          control={control}
          name={field.name}
          rules={field.rules}
          render={({ field: { onChange, value, onBlur } }) => (
            <TextField
              {...field}
              value={value}
              errorMessage={formState.errors[field.name]?.message}
              onValueChange={onChange}
              onBlur={onBlur}
            />
          )}
          key={field.name}
        />
      ))}

      <BaseButton disabled={!formState.isValid} label={buttonLabel} onClick={submitForm} />
    </form>
  );
};

export default ActionForm;
