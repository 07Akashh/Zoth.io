"use client";
import * as Progress from "@radix-ui/react-progress";
import { DesignAsset } from "./designAssets";
import { useCountdown } from "@/hooks/useCountdown";
import { useSaleWindow } from "@/hooks/useSaleWindow";
export function ProgressLine({
  value,
  label = "Progress",
}: {
  value: number;
  label?: string;
}) {
  const safe = Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
  return (
    <Progress.Root
      aria-label={label}
      value={safe}
      max={100}
      className={"h-1.5 w-full bg-[#350f0f] overflow-hidden"}
    >
      <Progress.Indicator
        className={
          "h-full bg-orange w-full [transform-origin:left_center] [transition:transform_200ms_linear] motion-reduce:[transition:none]"
        }
        style={{ transform: `scaleX(${safe / 100})` }}
      />
    </Progress.Root>
  );
}
export function SaleCountdown({
  startsAt,
  endsAt,
}: {
  startsAt: string;
  endsAt: string;
}) {
  const saleWindow = useSaleWindow(startsAt, endsAt);
  const countdownTarget = saleWindow === "upcoming" ? startsAt : endsAt;
  const { parts } = useCountdown(countdownTarget);
  const label =
    saleWindow === "upcoming"
      ? "Opens in"
      : saleWindow === "live"
        ? "Closes in"
        : saleWindow === "ended"
          ? "Sale ended"
          : "Sale timing unavailable";
  return (
    <section
      className={
        "flex justify-between items-center gap-4 h-23 border border-[#350f0f] bg-black py-5 px-3.5 mt-2 max-[1151px]:gap-2 max-[1151px]:h-auto max-[1151px]:min-h-23 max-[1151px]:flex-wrap max-[761px]:flex-nowrap max-[761px]:gap-4 max-[511px]:flex-wrap max-[1001px]:flex-wrap max-[1001px]:min-h-23 max-[1001px]:h-auto"
      }
      aria-label="Token sale countdown"
    >
      <div
        className={
          "min-w-0 [&_>_p:last-child]:text-[14px] [&_>_p:last-child]:leading-[20px] [&_>_p:last-child]:text-[#ffffffcc] [&_>_p:last-child]:mt-1.5 max-[1151px]:[&_>_p:last-child]:text-[12px] max-[761px]:[&_>_p:last-child]:max-w-50 max-[761px]:[&_>_p:last-child]:leading-[16px] max-[511px]:w-full max-[511px]:[&_>_p:last-child]:max-w-none"
        }
      >
        <p
          className={
            "flex gap-1.5 items-center text-[18px] font-medium leading-[24px] whitespace-nowrap max-[1151px]:text-[16px] max-[761px]:text-[15px]"
          }
        >
          <DesignAsset src="/icons/alarmClock.svg" />
          Lorem ipsum dolor
        </p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div
        className={
          "flex items-center gap-1 max-[1151px]:ml-auto max-[511px]:w-full max-[511px]:justify-between"
        }
        role="timer"
        aria-label={label}
      >
        {["DAYS", "HRS", "MIN", "SEC"].map((unit, index) => (
          <div className={"contents"} key={unit}>
            {index > 0 ? (
              <span
                className={"[font-family:monospace] text-[14px] font-bold"}
                aria-hidden="true"
              >
                :
              </span>
            ) : null}
            <div
              className={
                "w-12 min-w-11 h-[49px] bg-[#350f0f80] flex flex-col items-center justify-center gap-0.5 [&_strong]:text-[18px] [&_strong]:leading-[20px] [&_strong]:tracking-[0.56px] [&_strong]:font-medium [&_span]:text-[9px] [&_span]:text-[#ffffffcc] [&_span]:tracking-[0.56px] max-[761px]:w-10 max-[761px]:min-w-[35px] max-[761px]:[&_strong]:text-[15px] max-[511px]:flex-none max-[511px]:w-12 max-[511px]:min-w-0"
              }
              aria-label={`${parts?.[index] ?? 0} ${unit.toLowerCase()}`}
            >
              <strong>
                {parts ? String(parts[index]).padStart(2, "0") : "--"}
              </strong>
              <span>DEMO</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
