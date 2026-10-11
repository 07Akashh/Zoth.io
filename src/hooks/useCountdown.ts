"use client";
import { getRemainingTime } from "@/lib/saleTime";
import { useNow } from "./useNow";

export function useCountdown(target: string) {
  const now = useNow();
  const value = now === null ? null : getRemainingTime(target, now);
  return {
    remaining: value?.remaining ?? null,
    parts: value?.parts ?? null,
    expired: value?.expired ?? false,
    ready: value !== null,
  };
}
