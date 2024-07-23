import { Badge, CircleCheck } from "lucide-react";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import { HTMLAttributes } from "react";

interface AcitivityItemProps extends HTMLAttributes<HTMLButtonElement> {
  name: string;
  occurs: Date;
  done?: boolean;
}

export const AcitivityItem = ({
  name,
  occurs,
  done,
  className,
  ...props
}: AcitivityItemProps) => {
  return (
    <button
      className={twMerge(
        "w-full px-4 py-3 bg-zinc-900 gap-2 rounded-xl flex justify-between",
        className
      )}
      {...props}
    >
      <div className="flex gap-2">
        {done ? (
          <>
            <CircleCheck className="text-lime-300" />
          </>
        ) : (
          <>
            <Badge className="text-zinc-400" />
          </>
        )}
        <span className="text-zinc-100 text-base font-semibold">{name}</span>
      </div>

      <span className="text-zinc-400 font-semibold">
        {dayjs(occurs).format("HH:mm")}
      </span>
    </button>
  );
};
