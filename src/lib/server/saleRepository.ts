import "server-only";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import { createSaleData } from "@/lib/saleData";
import { defaultSaleId } from "@/lib/saleQuery";

// Request memoization shares one snapshot between metadata and SSR content.
export const getCurrentSale = cache(async (saleId: string) => {
  if (saleId !== defaultSaleId) return null;
  return createSaleData();
});

// Public landing content can be cached; live totals refresh through the API.
export const getCachedSale = unstable_cache(
  async (saleId: string) => {
    if (saleId !== defaultSaleId) return null;
    return createSaleData();
  },
  ["public-sale-with-milestone-labels"],
  { revalidate: 60, tags: ["public-sale"] },
);
