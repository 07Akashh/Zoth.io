import { PanelTitle, FrameButton } from "./panelControls";
import type { SalePanelProps } from "./salePanelTypes";
type OverviewPanelProps = Pick<
  SalePanelProps,
  "unavailable" | "onBeginSale" | "onSonarRequest"
>;
export function OverviewPanel({
  unavailable,
  onBeginSale,
  onSonarRequest,
}: OverviewPanelProps) {
  return (
    <>
      <PanelTitle label="Live token sale" />
      <p
        className={
          "[font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[18px] leading-[21px] tracking-[0.2px] text-[#ffffffcc] mt-2 max-[1151px]:text-[16px] max-[951px]:leading-[1.4] max-[761px]:text-[17px] max-[511px]:text-[15px]"
        }
      >
        Lorem ipsum dolor sit amet consectetur adipiscing
      </p>
      <div
        className={"mt-8 flex flex-col gap-4 max-[951px]:mt-6 max-[761px]:mt-8"}
      >
        <FrameButton
          label="Connect wallet to participate"
          onClick={onBeginSale}
          disabled={unavailable}
        />
        <FrameButton
          label="Connect Sonar to view allocation"
          onClick={onSonarRequest}
          outline
        />
      </div>
      <p
        className={
          "text-center text-[#ffffffcc] [font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[14px] tracking-[0.2px] leading-[17px] mt-4 max-[1151px]:text-[12px] max-[951px]:leading-[1.4] max-[761px]:text-[13px] max-[511px]:text-[11px]"
        }
      >
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
      </p>
    </>
  );
}
