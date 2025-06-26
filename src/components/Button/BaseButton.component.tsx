import type { MouseEvent } from "react";

interface Props extends ComponentProps<"button"> {
  label?: string;
  loading?: boolean;
}

export const BaseButton = ({ label, children, className, disabled, loading, ...props }: Props) => {
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (disabled || loading) return;

    props.onClick?.(event);
  };

  return (
    <button
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={`${className ?? ""} flex h-8 cursor-pointer items-center justify-center rounded-md bg-indigo-500 p-2 text-center text-sm text-white transition select-none hover:scale-[105%] hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-55`}
    >
      {loading ? <Loading /> : children || label}
    </button>
  );
};
