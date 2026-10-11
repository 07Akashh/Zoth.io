import { PanelTitle, FrameButton } from "./panelControls";
import type { SalePanelProps } from "./salePanelTypes";
import { Wallet } from "lucide-react";
type ConnectedPanelProps = Pick<SalePanelProps, "unavailable" | "onBeginSale">;
export function ConnectedPanel({
  unavailable,
  onBeginSale,
}: ConnectedPanelProps) {
  return (
    <>
      <div className={"flex items-center gap-2"}>
        <Wallet size={16} className="text-orange" aria-hidden="true" />
        <PanelTitle label="Wallet connected" />
      </div>
      <div className={"mt-6 mx-0 mb-4"}>
        <PanelTitle label="Live token sale" />
        <p
          className={
            "[font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[18px] leading-[21px] tracking-[0.2px] text-[#ffffffcc] mt-2 max-[1151px]:text-[16px] max-[951px]:leading-[1.4] max-[761px]:text-[17px] max-[511px]:text-[15px]"
          }
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut
        </p>
      </div>
      <FrameButton
        label="Explore the sale"
        onClick={onBeginSale}
        disabled={unavailable}
      />
    </>
  );
}
