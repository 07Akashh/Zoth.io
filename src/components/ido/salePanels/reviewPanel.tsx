import { PanelTitle, FrameButton, DetailRows } from "./panelControls";
import type { SalePanelProps } from "./salePanelTypes";
import { currency } from "@/lib/utils";

type ReviewPanelProps = Pick<
  SalePanelProps,
  "sale" | "flow" | "dispatch" | "unavailable" | "quote"
>;

export function ReviewPanel({
  sale,
  flow,
  dispatch,
  unavailable,
  quote,
}: ReviewPanelProps) {
  const { network, asset, accepted } = flow;
  const confirm = () => {
    if (!unavailable && quote.valid && accepted && flow.walletDemoConnected)
      dispatch({ type: "CONFIRM_DEMO", valid: true });
  };
  return (
    <>
      <div className="review-illustration">
        <div className="design-placeholder" />
        <PanelTitle label="Review your allocation" />
      </div>
      <div className="review-details">
        <DetailRows
          values={[
            `${currency(quote.amount, 2)} ${asset}`,
            `${currency(quote.tokenAmount ?? 0, 2)} ${sale.symbol}`,
            network,
            `$${sale.tokenPrice}`,
            sale.distribution,
            "Demo only",
          ]}
          names={[
            "Contribution",
            "Estimated tokens",
            "Network",
            "Token price",
            "Distribution",
            "Status",
          ]}
        />
        <div className="review-buttons">
          <FrameButton
            label="Confirm demo quote"
            disabled={!quote.valid || !accepted || unavailable}
            onClick={confirm}
          />
          <FrameButton
            label="Edit amount"
            outline
            onClick={() => dispatch({ type: "BACK" })}
          />
        </div>
      </div>
    </>
  );
}
