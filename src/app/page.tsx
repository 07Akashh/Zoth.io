import { notFound } from "next/navigation";
import { SalePage } from "@/components/salePage";
import { getCachedSale } from "@/lib/server/saleRepository";
import { defaultSaleId } from "@/lib/saleQuery";

// SSG on the initial build; ISR refreshes the public landing page every minute.
export const revalidate = 60;

export default async function HomePage() {
  const sale = await getCachedSale(defaultSaleId);
  if (!sale) notFound();
  return <SalePage sale={sale} />;
}
