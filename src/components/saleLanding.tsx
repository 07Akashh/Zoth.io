"use client";
import { useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { useSale } from "@/hooks/useSale";
import { useSaleFlow } from "@/hooks/useSaleFlow";
import { Navbar } from "./ido/navbar";
import { TopBanner } from "./ido/topBanner";
import { SaleStatistics } from "./ido/saleStatistics";
import { SaleErrorState } from "./ido/saleErrorState";
import { SaleLoading } from "./ido/saleLoading";
import { ConnectionDialog } from "./ido/connectionDialog";
import { DesignBackground } from "./ido/designAssets";

const ParticipationFlow = dynamic(() => import("./ido/participationFlow"));

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
  const [connection, setConnection] = useState<"wallet" | "sonar" | null>(null);
  const { flow, dispatch, saleWindow, selectPayment, viewAllocations } =
    useSaleFlow(sale);

  return (
    <main
      id="top"
      data-input={keyboard ? "keyboard" : "pointer"}
      onKeyDownCapture={() => setKeyboard(true)}
      onPointerDownCapture={() => setKeyboard(false)}
    >
      <TopBanner />
      <section className="hero-shell">
        <DesignBackground />
        <Navbar
          flow={flow}
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
          <div className="container-main hero-inner hero-columns">
            <div className="hero-left">
              {heroContent}
              <SaleStatistics sale={sale} />
            </div>
            <div className="hero-right">
              <ParticipationFlow
                keyboard={keyboard}
                sale={sale}
                flow={flow}
                dispatch={dispatch}
                saleWindow={saleWindow}
                onBeginSale={() => setConnection("wallet")}
                onChooseAsset={selectPayment}
                onSonarRequest={() => setConnection("sonar")}
              />
            </div>
          </div>
        )}
      </section>
      {children}
      <ConnectionDialog kind={connection} onClose={() => setConnection(null)} />
    </main>
  );
}
