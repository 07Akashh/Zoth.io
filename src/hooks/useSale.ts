"use client";
import { useQuery } from "@tanstack/react-query";
import { saleQueryKey } from "@/lib/saleQuery";
import type { Sale } from "@/types/sale";

export function useSale(saleId: string) {
  return useQuery({
    queryKey: saleQueryKey(saleId),
    queryFn: async ({ signal }) => {
      const response = await fetch(
        `/api/sale?saleId=${encodeURIComponent(saleId)}`,
        { signal, cache: "no-store" },
      );
      if (!response.ok)
        throw new Error("Sale information is temporarily unavailable");
      const body: { data: Sale } = await response.json();
      return body.data;
    },
    refetchInterval: 30_000,
  });
}
