import { ChecklistIndicator } from "./checklistIndicator";
import { PanelTitle, OptionDropdown } from "./panelControls";
import type { SalePanelProps } from "./salePanelTypes";
type PaymentPanelProps = Pick<
  SalePanelProps,
  "sale" | "flow" | "dispatch" | "unavailable"
>;
export function PaymentPanel({
  sale,
  flow,
  dispatch,
  unavailable,
}: PaymentPanelProps) {
  const { network, asset } = flow;
  return (
    <>
      <PanelTitle label="Select your payment method" />
      <div
        className={
          "mt-6 grid grid-cols-[minmax(0,287px)_minmax(0,1fr)] gap-10 max-[761px]:gap-6 @max-[581px]:grid-cols-1 @max-[581px]:gap-6 @max-[581px]:[&_.design-placeholder]:mx-auto"
        }
      >
        <div
          className={
            "design-placeholder w-[min(287px,_100%)] h-auto bg-[#ffffff0a] aspect-square"
          }
          aria-label="Connection illustration placeholder in Figma"
        />
        <div
          className={
            "flex flex-col gap-3.5 text-[14px] min-w-0 [&_>_p]:flex [&_>_p]:items-center [&_>_p]:gap-3 [&_>_p]:min-h-5 [&_>_p]:min-w-0 [&_>_div]:flex [&_>_div]:items-center [&_>_div]:gap-3 [&_>_div]:min-h-5 [&_>_div]:min-w-0 [&_.select-trigger]:text-[14px] [&_.select-trigger]:text-muted max-[1151px]:text-[12px] max-[1151px]:[&_.select-trigger]:text-[12px] max-[761px]:text-[14px] max-[761px]:[&_.select-trigger]:text-[14px] max-[761px]:[&_.select-trigger]:min-h-11 [&_p]:[overflow-wrap:anywhere] @max-[581px]:gap-3.5 @max-[581px]:[&_.select-trigger]:min-h-9 max-[761px]:[&_.select-trigger]:min-h-11!"
          }
        >
          <p>
            <ChecklistIndicator complete />
            Lorem ipsum
          </p>
          <p>
            <ChecklistIndicator complete />
            Lorem ipsum dolor sit amet
          </p>
          <div>
            <ChecklistIndicator />
            <OptionDropdown
              label="Network"
              disabled={unavailable}
              value={network}
              displayValue="Lorem ipsum"
              options={sale.networks}
              onChange={(selectedNetwork) =>
                dispatch({ type: "SET_NETWORK", network: selectedNetwork })
              }
            />
          </div>
          <div>
            <ChecklistIndicator />
            <OptionDropdown
              label="Currency"
              disabled={unavailable}
              value={asset}
              displayValue="Lorem ipsum"
              options={sale.paymentAssets}
              onChange={(selectedAsset) => {
                dispatch({ type: "SET_ASSET", asset: selectedAsset });
                dispatch({ type: "CONTINUE_TO_QUOTE" });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
