import type { Props } from "./LoginForm.type";
import useLoginForm from "./UseLoginForm.hook";

const LoginForm = ({ onSubmit }: Props) => {
  const { fields, errors, isSubmitting, register, submitForm } = useLoginForm(onSubmit);

  return (
    <Card className="w-80 sm:w-100" scale={false} onSubmit={submitForm}>
      <form className="flex flex-col gap-12 px-8 py-12">
        <span className="text-center text-lg sm:text-base dark:text-white">
          لطفا برای ورود اطلاعات خواسته شده را وارد کنید
        </span>

        {fields.map(({ name, rules, label }) => (
          <TextField
            {...register(name, rules)}
            label={label}
            errorMessage={errors[name]?.message}
            disabled={isSubmitting}
            key={name}
          />
        ))}

        <BaseButton label="ورود" loading={isSubmitting} />
      </form>
    </Card>
  );
};

export default LoginForm;
