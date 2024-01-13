import { type ClassValue } from "clsx";
import { cn } from "~/utils/utils";

interface Separator {
  variant?: "vertical" | "horizontal";
  className?: ClassValue;
}

const variants: Record<string, string> = {
  vertical: "h-full w-0.5 bg-gradient-to-t",
  horizontal: "h-0.5 w-full bg-gradient-to-l",
};

export default function Separator({
  variant = "horizontal",
  className,
}: Separator) {
  return (
    <div
      className={`${cn(
        "from-transparent from-0% via-neutral-100 to-transparent to-90%",
        variants[variant],
        className,
      )}`}
    ></div>
  );
}
