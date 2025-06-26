interface Props extends ComponentProps<"input"> {
  name: string;
  label?: string;
  labelFallback?: ReactNode;
  hint?: string;
  errorMessage?: string;
  messageFallback?: ReactNode;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
}

export const TextField = ({
  label,
  hint,
  errorMessage,
  messageFallback,
  labelFallback,
  name,
  disabled,
  onValueChange,
  ...props
}: Props) => {
  const message = errorMessage || hint;
  const messageElement = messageFallback || message;

  return (
    <div className={`flex flex-col gap-2 ${disabled ? "cursor-not-allowed opacity-55" : ""}`}>
      <label className="text-xs text-gray-600 dark:text-indigo-100" htmlFor={`#${name}`}>
        {labelFallback || label}
      </label>

      <div className="rounded-md bg-indigo-50 p-2 text-base dark:bg-gray-700 dark:text-indigo-50">
        <input
          {...props}
          className="h-full w-full"
          type="text"
          id={name}
          disabled={disabled}
          onChange={(event) => onValueChange(event.target.value)}
        />
      </div>

      {messageElement && (
        <span className={`text-xs ${errorMessage ? "text-red-500 dark:text-red-300" : "text-indigo-500"}`}>
          {messageElement}
        </span>
      )}
    </div>
  );
};
