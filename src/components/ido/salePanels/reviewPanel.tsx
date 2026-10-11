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
      <div className={"flex flex-col items-center gap-6"}>
        <div
          className={
            "design-placeholder w-[min(287px,_100%)] h-auto bg-[#ffffff0a] aspect-square"
          }
        />
        <PanelTitle label="Review your allocation" />
      </div>
      <div
        className={
          "py-0 px-4 mt-6 [&_.participation-rows]:my-0 [&_.participation-rows]:mx-0 [&_.participation-rows_>_div]:min-h-8.5 max-[511px]:py-0 max-[511px]:px-0 @max-[441px]:py-0 @max-[441px]:px-0"
        }
      >
        <DetailRows
          values={[
            `${currency(quote.amount, 2)} ${asset}`,
            `${currency(quote.tokenAmount ?? 0, 2)} ${sale.symbol}`,
            network,
            `$${sale.tokenPrice}`,
            sale.distribution,
            "Demo only",
          ]}
          displayNames={[
            "Demo",
            "Demo",
            "Demo",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
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
        <div
          className={
            "flex gap-2.5 mt-4 [&_>_div]:flex-1 max-[511px]:flex-col @max-[441px]:flex-col"
          }
        >
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
