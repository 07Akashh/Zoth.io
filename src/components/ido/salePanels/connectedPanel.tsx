import { PanelTitle, FrameButton } from "./panelControls";
import type { SalePanelProps } from "./salePanelTypes";
import { DesignAsset } from "../designAssets";

type ConnectedPanelProps = Pick<SalePanelProps, "unavailable" | "onBeginSale">;

export function ConnectedPanel({
  unavailable,
  onBeginSale,
}: ConnectedPanelProps) {
  return (
    <>
      <div className="ready-status">
        <DesignAsset src="/icons/wallet.svg" />
        <PanelTitle label="Wallet connected" />
      </div>
      <div className="ready-copy">
        <PanelTitle label="Live token sale" />
        <p className="panel-description">
          Lorem ipsum dolor sit amet consectetur adipiscing
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
