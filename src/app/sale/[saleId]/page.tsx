import type { Metadata } from "next";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { siteDescription, siteTitle } from "@/lib/siteMetadata";
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
    description: siteDescription,
    // The shareable sale URL shows the same content as the landing page.
    alternates: { canonical: "/" },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: "/",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: ["/opengraph-image"],
    },
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
