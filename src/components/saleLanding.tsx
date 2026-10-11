"use client";
import { useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { useSale } from "@/hooks/useSale";
import { useSaleFlow } from "@/hooks/useSaleFlow";
import { Navbar } from "./ido/navbar";
import { TopBanner } from "./ido/topBanner";
import { LiveSaleCard } from "./ido/liveSaleCard";
import { SaleStatistics } from "./ido/saleStatistics";
import { SaleErrorState } from "./ido/saleErrorState";
import { SaleLoading } from "./ido/saleLoading";
import { DesignBackground } from "./ido/designAssets";
const ParticipationFlow = dynamic(() => import("./ido/participationFlow"), {
  loading: () => (
    <div
      className={
        "relative py-5.5 px-5.5 border border-[var(--rust)] bg-[#0b0303] [filter:drop-shadow(0_0_61.3px_#ff45091c)] w-full max-[1151px]:py-4.5 max-[1151px]:px-4.5 max-[511px]:py-4.5 max-[511px]:px-4.5 min-h-[325px]"
      }
      role="status"
    >
      Loading sale tools…
    </div>
  ),
});
type SaleLandingProps = {
  saleId: string;
  heroContent: ReactNode;
  children: ReactNode;
};
export default function SaleLanding({
  saleId,
  heroContent,
  children,
}: SaleLandingProps) {
  const { data: sale, isPending, refetch, isFetching } = useSale(saleId);
  const [keyboard, setKeyboard] = useState(false);
  const {
    flow,
    dispatch,
    saleWindow,
    beginSale,
    selectPayment,
    viewAllocations,
  } = useSaleFlow(sale);
  return (
    <main
      className="min-[1151px]:[zoom:min(1,calc(100vw/1698px))]"
      id="top"
      data-input={keyboard ? "keyboard" : "pointer"}
      onKeyDownCapture={() => setKeyboard(true)}
      onPointerDownCapture={() => setKeyboard(false)}
    >
      <TopBanner />
      <section
        className={
          "relative min-h-234.5 overflow-clip isolate max-[1001px]:min-h-0"
        }
      >
        <DesignBackground />
        <Navbar
          flow={flow}
          saleId={saleId}
          keyboard={keyboard}
          dispatch={dispatch}
          onComparison={() => dispatch({ type: "OPEN_COMPARISON" })}
          onAllocations={viewAllocations}
        />
        {isPending ? (
          <SaleLoading />
        ) : !sale ? (
          <SaleErrorState
            onRetry={() => void refetch()}
            isRetrying={isFetching}
          />
        ) : (
          <div
            className={
              "w-[min(var(--content),_calc(100%_-_64px))] mx-auto max-[761px]:w-[calc(100%_-_36px)] pt-[19px] pb-[103px] min-h-204 max-[761px]:pt-[25px] max-[1001px]:pb-15 max-[1001px]:min-h-0 grid grid-cols-[minmax(0,_674fr)_minmax(0,_712fr)] gap-0 max-[1001px]:grid-cols-[1fr] max-[1001px]:gap-9"
            }
          >
            <div
              className={
                "pt-2 pr-8 min-w-0 max-[1151px]:pr-6 max-[1001px]:pr-0"
              }
            >
              {heroContent}
              <SaleStatistics sale={sale} />
            </div>
            <div
              className={
                "[border-left:1px_solid_#ff45094d] pt-2 pl-[31px] min-h-173.5 min-w-0 relative @container max-[1151px]:pl-[23px] max-[761px]:pt-0 max-[1001px]:pl-0 max-[1001px]:[border-left:0] max-[1001px]:min-h-0"
              }
            >
              {flow.step === "overview" && !flow.walletDemoConnected ? (
                <LiveSaleCard
                  saleWindow={saleWindow}
                  onConnectWallet={beginSale}
                  onConnectSonar={viewAllocations}
                />
              ) : (
                <ParticipationFlow
                  keyboard={keyboard}
                  sale={sale}
                  flow={flow}
                  dispatch={dispatch}
                  saleWindow={saleWindow}
                  onBeginSale={beginSale}
                  onChooseAsset={selectPayment}
                  onSonarRequest={viewAllocations}
                />
              )}
            </div>
          </div>
        )}
      </section>
      {children}
    </main>
  );
}
