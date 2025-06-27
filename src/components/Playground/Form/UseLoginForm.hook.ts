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
  const { handleSubmit, control, formState } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: INITIAL_FORM_VALUES,
  });

  const submitForm = handleSubmit(onSubmit);

  return { fields, formState, control, submitForm };
};

export default useLoginForm;
