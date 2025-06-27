import DetectiveSvg from "@/assets/svg/detective.svg?react";

interface Props {
  message?: string;
}

const DEFAULT_MESSAGE: Props["message"] = "کاری ندارید";

const NoTask = ({ message = DEFAULT_MESSAGE }: Props) => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-2 font-bold">
      <DetectiveSvg className="size-40" />

      <span>{message}</span>
    </div>
  );
};

export default NoTask;
