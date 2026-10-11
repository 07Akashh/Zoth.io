import type { Dispatch } from "react";
import type { Sale } from "@/types/sale";
import type { SaleFlowState, SaleFlowAction } from "@/lib/saleFlow";
import type { getContributionQuote } from "@/lib/saleFlow";
export type SalePanelProps = {
  sale: Sale;
  flow: SaleFlowState;
  dispatch: Dispatch<SaleFlowAction>;
  unavailable: boolean;
  quote: ReturnType<typeof getContributionQuote>;
  onBeginSale: () => void;
  onChooseAsset: (asset: string) => void;
  onSonarRequest: () => void;
};
