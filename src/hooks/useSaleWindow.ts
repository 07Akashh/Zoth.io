"use client";
import { getSaleWindow } from "@/lib/saleTime";
import { useNow } from "./useNow";

export function useSaleWindow(startsAt: string, endsAt: string) {
  const now = useNow();
  return now === null ? "unavailable" : getSaleWindow(startsAt, endsAt, now);
}
