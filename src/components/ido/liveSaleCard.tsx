import type { SaleWindow } from "@/lib/saleTime";
import { OverviewPanel } from "./salePanels/overviewPanel";

type LiveSaleCardProps = {
  saleWindow: SaleWindow;
  onConnectWallet: () => void;
  onConnectSonar: () => void;
};

export function LiveSaleCard({
  saleWindow,
  onConnectWallet,
  onConnectSonar,
}: LiveSaleCardProps) {
  return (
    <section
      id="participate"
      className="participation-card participation--overview"
      aria-label="Token sale participation"
    >
      {saleWindow === "upcoming" || saleWindow === "ended" ? (
        <p className="sale-expired-alert" role="status">
          {saleWindow === "upcoming"
            ? "The demo sale has not started."
            : "The sale has ended."}
        </p>
      ) : null}
      <OverviewPanel
        unavailable={saleWindow !== "live"}
        onBeginSale={onConnectWallet}
        onSonarRequest={onConnectSonar}
      />
      <span className="sr-only">
        Demo environment. No on-chain transactions.
      </span>
    </section>
  );
}
