import { NextRequest, NextResponse } from "next/server";
import { getCurrentSale } from "@/lib/server/saleRepository";
import { defaultSaleId } from "@/lib/saleQuery";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const saleId = request.nextUrl.searchParams.get("saleId") ?? defaultSaleId;
  const sale = await getCurrentSale(saleId);
  if (!sale)
    return NextResponse.json(
      { error: "Sale not found" },
      { status: 404, headers: { "Cache-Control": "no-store" } },
    );
  return NextResponse.json(
    { data: sale },
    { headers: { "Cache-Control": "no-store" } },
  );
}
