import DetectiveSvg from "@/assets/svg/detective.svg?react";

interface Props {
  message?: string;
}

const DEFAULT_MESSAGE: Props["message"] = "کاری ندارید";

const NoTask = ({ message = DEFAULT_MESSAGE }: Props) => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-6 text-xl font-bold">
      <DetectiveSvg />

      <span>{message}</span>
    </div>
  );
};

export default NoTask;
