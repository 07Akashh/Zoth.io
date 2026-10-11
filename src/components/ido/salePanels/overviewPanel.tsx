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
      <p className="panel-description">
        Lorem ipsum dolor sit amet consectetur adipiscing
      </p>
      <div className="panel-actions">
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
      <p className="panel-fineprint">
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
      </p>
    </>
  );
}
