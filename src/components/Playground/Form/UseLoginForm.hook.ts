import type { Field, FormValues, Props } from "./LoginForm.type";

const INITIAL_FORM_VALUES: FormValues = {
  nationalCode: "",
  mobileNumber: "",
};

const fields: Array<Field> = [
  {
    name: "mobileNumber",
    label: "شماره همراه",
    rules: {
      validate: {
        mobileNumber: validateMobileNumber,
        required: validateRequired,
      },
    },
  },
  {
    name: "nationalCode",
    label: "کدملی",
    rules: {
      validate: {
        nationalCode: validateNationalCode,
        required: validateRequired,
      },
    },
  },
];

const useLoginForm = (onSubmit: Props["onSubmit"]) => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm<FormValues>({
    defaultValues: INITIAL_FORM_VALUES,
  });

  const submitForm = handleSubmit(onSubmit);

  return { fields, errors, isSubmitting, register, submitForm };
};

export default useLoginForm;
