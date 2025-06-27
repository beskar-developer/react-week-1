import type { Field, FormValues, Props } from "./LoginForm.type";

const REQUIRED_RULE_MESSAGE = "این فیلد الزامی است";
const INVALID_NATIONAL_CODE_MESSAGE = "کد ملی معتر نمی باشد";
const INVALID_MOBILE_NUMBER_MESSAGE = "شماره موبایل معتبر نمی باشد";
const INITIAL_FORM_VALUES: FormValues = {
  nationalCode: "",
  mobileNumber: "",
};

const validateMobileNumber = (value: string) => {
  if (!value || String(value).match(/^(09)[0-9]{9}$|^(۰۹)[۰۱۲۳۴۵۶۷۸۹]{9}$|^(٠٩)[٩٨٧٦٥٤٣٢١٠]{9}$/))
    return true;

  return INVALID_MOBILE_NUMBER_MESSAGE;
};
const validateNationalCode = (value: string) => {
  if (!/^\d{10}$/.test(value)) return INVALID_NATIONAL_CODE_MESSAGE;

  const check = +value[9];
  const sum =
    value
      .split("")
      .slice(0, 9)
      .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;

  const isValid = sum < 2 ? check === sum : check + sum === 11;

  if (isValid) return;

  return INVALID_NATIONAL_CODE_MESSAGE;
};

const fields: Array<Field> = [
  {
    name: "mobileNumber",
    label: "شماره همراه",
    rules: {
      required: REQUIRED_RULE_MESSAGE,
      validate: {
        mobileNumber: validateMobileNumber,
      },
    },
  },
  {
    name: "nationalCode",
    label: "کدملی",
    rules: {
      required: REQUIRED_RULE_MESSAGE,
      validate: {
        nationalCode: validateNationalCode,
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
