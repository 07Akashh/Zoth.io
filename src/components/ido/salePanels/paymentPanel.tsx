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
      <div className="connection-layout">
        <div
          className="design-placeholder"
          aria-label="Connection illustration placeholder in Figma"
        />
        <div className="connection-checklist">
          <p>
            <span className="check-square checked">✓</span>Lorem ipsum
          </p>
          <p>
            <span className="check-square checked">✓</span>Lorem ipsum dolor sit
            amet
          </p>
          <div>
            <span className="check-square" />
            <OptionDropdown
              label="Network"
              value={network}
              options={sale.networks}
              onChange={(selectedNetwork) =>
                dispatch({ type: "SET_NETWORK", network: selectedNetwork })
              }
            />
          </div>
          <div>
            <span className="check-square" />
            <OptionDropdown
              label="Currency"
              value={asset}
              options={sale.paymentAssets}
              onChange={(selectedAsset) =>
                dispatch({ type: "SET_ASSET", asset: selectedAsset })
              }
            />
          </div>
          <button
            className="checklist-continue"
            aria-label="Continue"
            disabled={unavailable}
            onClick={() => dispatch({ type: "CONTINUE_TO_QUOTE" })}
          >
            Lorem ipsum <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </>
  );
}
