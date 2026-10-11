import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChecklistIndicator({
  complete = false,
}: {
  complete?: boolean;
}) {
  return (
    <span
      className={cn(
        "grid size-5 shrink-0 place-items-center border border-[#2a1b12] text-[#ff4d0a]",
        complete && "border-[#ff4d0a]",
      )}
      role="img"
      aria-label={complete ? "Completed" : "Pending"}
    >
      {complete ? <Check size={12} aria-hidden="true" /> : null}
    </span>
  );
}
