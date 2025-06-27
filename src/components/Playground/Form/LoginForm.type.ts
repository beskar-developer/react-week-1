export type FormValues = {
  mobileNumber: string;
  nationalCode: string;
};

export interface Props {
  onSubmit: (payload: FormValues) => void;
}

type FieldName = keyof FormValues;

export type Field = {
  name: FieldName;
  label: string;
  rules: object;
};
