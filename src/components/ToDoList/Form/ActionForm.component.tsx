import useActionForm from "./UseActionForm.hook";

const ActionForm = () => {
  const { fields, errors, isSubmitting, buttonLabel, register, submitForm } = useActionForm();

  return (
    <form className="flex flex-col gap-8" onSubmit={submitForm}>
      {fields.map(({ name, rules, label }) => (
        <TextField
          {...register(name, rules)}
          label={label}
          errorMessage={errors[name]?.message}
          disabled={isSubmitting}
          key={name}
        />
      ))}

      <BaseButton loading={isSubmitting} label={buttonLabel} />
    </form>
  );
};

export default ActionForm;
