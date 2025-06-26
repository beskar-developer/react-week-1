import type { Props } from "./LoginForm.type";

const LoginForm = ({ onSubmit }: Props) => {
  const { fields, formState, control, submitForm } = useLoginForm(onSubmit);

  return (
    <Card className="w-80 sm:w-100" scale={false}>
      <form className="flex flex-col gap-12 px-8 py-12">
        <span className="text-center text-lg sm:text-base dark:text-white">
          لطفا برای ورود اطلاعات خواسته شده را وارد کنید
        </span>

        {fields.map((field) => (
          <Controller
            control={control}
            name={field.name}
            rules={field.rules}
            render={({ field: { onChange, onBlur, value } }) => (
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

        <BaseButton
          label="ورود"
          className="h-10"
          disabled={!formState.isValid}
          loading={formState.isSubmitting}
          onClick={submitForm}
        />
      </form>
    </Card>
  );
};

export default LoginForm;
