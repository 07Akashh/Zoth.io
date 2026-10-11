import { PanelTitle, FrameButton, DetailRows } from "./panelControls";
import type { SalePanelProps } from "./salePanelTypes";
import { currency } from "@/lib/utils";

type ComparisonPanelProps = Pick<
  SalePanelProps,
  "sale" | "flow" | "unavailable" | "onChooseAsset"
>;

export function ComparisonPanel({
  sale,
  flow,
  unavailable,
  onChooseAsset,
}: ComparisonPanelProps) {
  const { network } = flow;
  return (
    <>
      <PanelTitle label="Compare payment routes" />
      <p className="panel-description">
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
      </p>
      <div className="split-sale-grid">
        {sale.paymentAssets.map((paymentAsset) => (
          <div className="split-sale-card" key={paymentAsset}>
            <div className="allocation-label">
              <span>Lorem ipsum</span>
              <span className="orange">[XX]</span>
            </div>
            <DetailRows
              names={[
                "Network",
                "Token price",
                "Minimum",
                "Maximum",
                "Round supply",
                "Round sold",
                "Distribution",
                "Currency",
              ]}
              values={[
                network,
                `$${sale.tokenPrice}`,
                currency(sale.minContribution),
                currency(sale.maxContribution),
                currency(sale.roundSupply),
                currency(sale.roundSold),
                sale.distribution,
                paymentAsset,
              ]}
            />
            <FrameButton
              label={`Select ${paymentAsset}`}
              children="[XX]"
              disabled={unavailable}
              onClick={() => onChooseAsset(paymentAsset)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
