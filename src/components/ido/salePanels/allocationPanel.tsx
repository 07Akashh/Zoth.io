import { PanelTitle, FrameButton } from "./panelControls";
import type { SalePanelProps } from "./salePanelTypes";
import { currency } from "@/lib/utils";

type AllocationPanelProps = Pick<
  SalePanelProps,
  "sale" | "flow" | "dispatch" | "unavailable" | "quote" | "onChooseAsset"
>;

export function AllocationPanel({
  sale,
  flow,
  dispatch,
  unavailable,
  quote,
  onChooseAsset,
}: AllocationPanelProps) {
  const { step } = flow;
  return (
    <>
      <PanelTitle
        label={
          step === "complete" ? "Demo flow complete" : "Your sale allocations"
        }
      />
      <div className="stacked-allocations">
        {sale.paymentAssets.map((paymentAsset, assetIndex) => (
          <div className="stacked-allocation" key={paymentAsset}>
            <div className="allocation-label">
              <span>Lorem ipsum</span>
              <span className="orange">[XX]</span>
            </div>
            <div className="allocation-values">
              <div>
                <span>Lorem ipsum</span>
                <strong>
                  <span className="allocation-number">
                    {step === "complete"
                      ? currency(
                          assetIndex === 0 ? (quote.tokenAmount ?? 0) : 0,
                          2,
                        )
                      : currency(sale.roundSupply)}
                  </span>
                  <small>{sale.symbol}</small>
                </strong>
              </div>
              <div>
                <span>Lorem ipsum</span>
                <strong>
                  <span className="allocation-number">
                    {step === "complete"
                      ? currency(assetIndex === 0 ? quote.amount : 0, 2)
                      : currency(sale.minContribution)}
                  </span>
                  <small>{paymentAsset}</small>
                </strong>
              </div>
            </div>
            <FrameButton
              label={
                step === "complete"
                  ? "Return to sale overview"
                  : `Pay with ${paymentAsset}`
              }
              onClick={() =>
                step === "complete"
                  ? dispatch({ type: "RESET" })
                  : onChooseAsset(paymentAsset)
              }
              disabled={step !== "complete" && unavailable}
            />
          </div>
        ))}
      </div>
      {step === "complete" ? (
        <p className="sr-only" role="status">
          Demo flow complete. No transaction was submitted.
        </p>
      ) : null}
    </>
  );
}
