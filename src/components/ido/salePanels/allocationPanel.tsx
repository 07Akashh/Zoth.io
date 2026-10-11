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
      <div className={"flex flex-col gap-8 mt-8"}>
        {sale.paymentAssets.map((paymentAsset, assetIndex) => (
          <div
            className={
              "py-4 px-4 bg-[#350f0f33] border border-[#260a01] [&_.allocation-label]:text-[20px] [&_.allocation-label_>_span:last-child]:text-[20px]"
            }
            key={paymentAsset}
          >
            <div
              className={
                "allocation-label flex justify-between items-center [border-bottom:1px_solid_#541400] pb-2 text-[12px] min-h-6.5 [&_>_span:last-child]:text-[14px]"
              }
            >
              <span>[XX]</span>
              <span className={"text-orange!"}>[XX]</span>
            </div>
            <div
              className={
                "grid items-center justify-between mt-4 mx-0 mb-8 gap-4 grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] [&_>_div_>_span]:text-[16px] [&_>_div_>_span]:text-[#ffffffcc] [&_strong]:flex [&_strong]:gap-[4px_6px] [&_strong]:[align-items:baseline] [&_strong]:text-[clamp(20px,_6cqw,_40px)] [&_strong]:font-normal [&_strong]:leading-[1.2] [&_strong]:flex-wrap [&_small]:text-[16px] [&_small]:font-normal max-[511px]:[&_strong]:text-[32px] max-[511px]:[&_small]:text-[12px] [&_>_div]:min-w-0 @max-[311px]:grid-cols-[1fr] @max-[311px]:gap-4"
              }
            >
              <div>
                <span>DEMO</span>
                <strong>
                  <span
                    className={
                      "max-w-[100%] [overflow-wrap:anywhere] tabular-nums"
                    }
                  >
                    {step === "complete"
                      ? currency(
                          assetIndex === 0 ? (quote.tokenAmount ?? 0) : 0,
                          2,
                        )
                      : "[XX]"}
                  </span>
                  <small>DEMO</small>
                </strong>
              </div>
              <div>
                <span>DEMO</span>
                <strong>
                  <span
                    className={
                      "max-w-[100%] [overflow-wrap:anywhere] tabular-nums"
                    }
                  >
                    {step === "complete"
                      ? currency(assetIndex === 0 ? quote.amount : 0, 2)
                      : "[XX]"}
                  </span>
                  <small>Demo</small>
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
        <p className={"sr-only"} role="status">
          Demo flow complete. No transaction was submitted.
        </p>
      ) : null}
    </>
  );
}
