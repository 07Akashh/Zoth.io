"use client";
import { useEffect, useReducer } from "react";
import type { Sale } from "@/types/sale";
import { useSaleWindow } from "./useSaleWindow";
import { initialSaleFlow, saleFlowReducer } from "@/lib/saleFlow";

export function useSaleFlow(sale: Sale | undefined) {
  const [flow, dispatch] = useReducer(saleFlowReducer, initialSaleFlow);
  const saleWindow = useSaleWindow(
    sale?.saleStartsAt ?? "",
    sale?.endsAt ?? "",
  );
  const saleLive = saleWindow === "live";
  const beginSale = () => {
    if (saleLive)
      dispatch({ type: "CONNECT_DEMO", service: "wallet", startSale: true });
  };
  const selectPayment = (asset: string) => {
    if (saleLive)
      dispatch({
        type: "CONNECT_DEMO",
        service: "wallet",
        selectedAsset: asset,
      });
  };
  const viewAllocations = () => {
    dispatch({ type: "CONNECT_DEMO", service: "sonar" });
    dispatch({ type: "OPEN_ALLOCATIONS" });
  };

  useEffect(() => {
    if (!sale) return;
    if (!sale.networks.includes(flow.network) && sale.networks.length)
      dispatch({ type: "SET_NETWORK", network: sale.networks[0] });
    if (!sale.paymentAssets.includes(flow.asset) && sale.paymentAssets.length)
      dispatch({ type: "SET_ASSET", asset: sale.paymentAssets[0] });
  }, [sale, flow.network, flow.asset]);

  return {
    flow,
    dispatch,
    saleWindow,
    beginSale,
    selectPayment,
    viewAllocations,
  };
}
