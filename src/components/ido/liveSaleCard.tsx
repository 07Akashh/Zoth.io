import { saleCardVariants } from "./saleCardVariants";
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
      className={saleCardVariants({ step: "overview" })}
      aria-label="Token sale participation"
    >
      {saleWindow === "upcoming" || saleWindow === "ended" ? (
        <p
          className={
            "border border-[var(--rust)] bg-[#251007] py-2.5 px-2.5 mb-4 text-[12px]"
          }
          role="status"
        >
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
      <span className={"sr-only"}>
        Demo environment. No on-chain transactions.
      </span>
    </section>
  );
}
