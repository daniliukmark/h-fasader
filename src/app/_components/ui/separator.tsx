import { type ClassValue } from "clsx";
import { cn } from "~/utils/utils";

interface Separator {
  className?: ClassValue;
}

export default function Separator({ className }: Separator) {
  return (
    <div
      className={`${cn(
        "h-0.5 w-full bg-gradient-to-l from-transparent from-0% via-neutral-100 to-transparent to-90%",
        className,
      )}`}
    ></div>
  );
}
