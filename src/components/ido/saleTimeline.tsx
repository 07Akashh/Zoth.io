import type { Sale } from "@/types/sale";
import { cn } from "@/lib/utils";

export function SaleTimeline({ sale }: { sale: Sale }) {
  return (
    <div
      id="timeline"
      className="@container overflow-x-auto pb-2"
      tabIndex={0}
      role="region"
      aria-label="Token sale timeline"
    >
      <ol className="grid min-w-[320px] grid-cols-4 pb-6">
        {sale.milestones.map((milestone) => (
          <li
            className="relative min-w-0 pr-2 pt-8 before:absolute before:left-3.5 before:right-0 before:top-2 before:h-0.5 before:bg-[#ffe9dc1f] before:content-[''] last:before:hidden"
            key={milestone.id}
          >
            <div
              className={cn(
                "absolute left-0 top-0.5 size-[18px] rounded-full border-2 bg-[#0b0807]",
                milestone.displayStatus
                  ? "border-[var(--orange)]"
                  : "border-[#ffe9dc3d]",
              )}
              aria-hidden="true"
            />
            <p className="min-h-5 whitespace-nowrap text-[11px] leading-5 text-[var(--orange)] @[480px]:text-[13px]">
              {milestone.displayStatus || "\u00a0"}
            </p>
            <h3
              className="mt-0.5 whitespace-nowrap text-[11px] font-medium leading-[1.3] @[400px]:text-xs @[480px]:text-base @[640px]:text-lg"
              aria-label={milestone.label}
            >
              {milestone.displayLabel}
            </h3>
            <time
              className="block whitespace-nowrap text-[11px] leading-[1.55] text-[#bdb1a9] @[480px]:text-sm"
              dateTime={milestone.date}
            >
              {milestone.displayDate}
            </time>
          </li>
        ))}
      </ol>
    </div>
  );
}
