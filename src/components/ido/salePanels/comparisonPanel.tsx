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
      <p
        className={
          "[font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[18px] leading-[21px] tracking-[0.2px] text-[#ffffffcc] mt-2 max-[1151px]:text-[16px] max-[951px]:leading-[1.4] max-[761px]:text-[17px] max-[511px]:text-[15px]"
        }
      >
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
      </p>
      <div
        className={
          "grid grid-cols-[1fr_1fr] gap-4 mt-4 max-[951px]:grid-cols-[1fr] max-[761px]:grid-cols-[1fr_1fr] max-[511px]:grid-cols-[1fr] @max-[441px]:grid-cols-[1fr]"
        }
      >
        {sale.paymentAssets.map((paymentAsset) => (
          <div
            className={
              "border border-[#330e02] bg-[#0006] py-2.5 px-2.5 [&_.participation-rows_>_div:first-child]:[border-top:0] [&_.framed-button]:py-[7px] [&_.framed-button]:mt-4 [&_.framed-button_>_button]:h-11 [&_.framed-button_>_button]:text-[14px]"
            }
            key={paymentAsset}
          >
            <div
              className={
                "allocation-label flex justify-between items-center [border-bottom:1px_solid_#541400] pb-2 text-[12px] min-h-6.5 [&_>_span:last-child]:text-[14px]"
              }
            >
              <span>Lorem ipsum</span>
              <span className={"text-orange!"}>[XX]</span>
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
