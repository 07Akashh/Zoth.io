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
      className="progress-track"
    >
      <Progress.Indicator
        className="progress-fill"
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
    <section className="countdown-panel" aria-label="Token sale countdown">
      <div className="countdown-copy">
        <p className="countdown-title">
          <DesignAsset src="/icons/alarmClock.svg" />
          Lorem ipsum dolor
        </p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div className="countdown-timer" role="timer" aria-label={label}>
        {["DAYS", "HRS", "MIN", "SEC"].map((unit, index) => (
          <div className="contents" key={unit}>
            {index > 0 ? (
              <span className="timer-separator" aria-hidden="true">
                :
              </span>
            ) : null}
            <div
              className="timer-tile"
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
