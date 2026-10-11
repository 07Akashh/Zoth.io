/** Deterministic, dependency-free sale-clock rules shared by the API and UI. */
export type SaleWindow = "upcoming" | "live" | "ended" | "unavailable";

export function getSaleWindow(
  startsAt: string,
  endsAt: string,
  now: number,
): SaleWindow {
  const start = Date.parse(startsAt);
  const end = Date.parse(endsAt);
  if (
    !Number.isFinite(start) ||
    !Number.isFinite(end) ||
    !Number.isFinite(now) ||
    end <= start
  )
    return "unavailable";
  if (now < start) return "upcoming";
  if (now >= end) return "ended";
  return "live";
}

export function getRemainingTime(endsAt: string, now: number) {
  const end = Date.parse(endsAt);
  if (!Number.isFinite(end) || !Number.isFinite(now)) return null;
  const remaining = Math.max(0, end - now);
  const seconds = Math.ceil(remaining / 1000);
  return {
    remaining,
    parts: [
      Math.floor(seconds / 86400),
      Math.floor((seconds % 86400) / 3600),
      Math.floor((seconds % 3600) / 60),
      seconds % 60,
    ] as [number, number, number, number],
    expired: remaining === 0,
  };
}
