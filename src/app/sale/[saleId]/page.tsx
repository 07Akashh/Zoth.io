import type { Metadata } from "next";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { SalePage } from "@/components/salePage";
import { getCurrentSale } from "@/lib/server/saleRepository";

type SaleRouteProps = { params: Promise<{ saleId: string }> };

export async function generateMetadata({
  params,
}: SaleRouteProps): Promise<Metadata> {
  const { saleId } = await params;
  const sale = await getCurrentSale(saleId);
  if (!sale)
    return { title: "Sale not found", robots: { index: false, follow: false } };
  return {
    title: `${sale.symbol} — Token Sale`,
    description: sale.description,
    alternates: { canonical: `/sale/${sale.id}` },
  };
}

export default async function SaleDetailPage({ params }: SaleRouteProps) {
  // A shareable sale URL renders a fresh snapshot on every incoming request.
  await connection();
  const { saleId } = await params;
  const sale = await getCurrentSale(saleId);
  if (!sale) notFound();
  return <SalePage sale={sale} />;
}
