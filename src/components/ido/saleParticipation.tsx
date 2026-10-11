"use client";
import { motion, useIsPresent, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";
import {
  motionEaseOut,
  panelEnterSeconds,
  panelExitSeconds,
} from "@/lib/motion";
import type { Sale } from "@/types/sale";
import type { SaleWindow } from "@/lib/saleTime";
import type { SaleFlowAction, SaleFlowState } from "@/lib/saleFlow";
import { getContributionQuote } from "@/lib/saleFlow";
import type { SalePanelProps } from "./salePanels/salePanelTypes";
import { OverviewPanel } from "./salePanels/overviewPanel";
import { ConnectedPanel } from "./salePanels/connectedPanel";
import { PaymentPanel } from "./salePanels/paymentPanel";
import { ComparisonPanel } from "./salePanels/comparisonPanel";
import { QuotePanel } from "./salePanels/quotePanel";
import { ReviewPanel } from "./salePanels/reviewPanel";
import { AllocationPanel } from "./salePanels/allocationPanel";
import { saleCardVariants } from "./saleCardVariants";
type SaleParticipationProps = {
  keyboard?: boolean;
  sale: Sale;
  flow: SaleFlowState;
  dispatch: React.Dispatch<SaleFlowAction>;
  saleWindow: SaleWindow;
  onBeginSale: () => void;
  onChooseAsset: (asset: string) => void;
  onSonarRequest: () => void;
};
export const SaleParticipation = forwardRef<
  HTMLElement,
  SaleParticipationProps
>(function SaleParticipation(
  {
    sale,
    flow,
    dispatch,
    saleWindow,
    onBeginSale,
    onChooseAsset,
    onSonarRequest,
    keyboard = false,
  },
  ref,
) {
  const reduced = useReducedMotion();
  const isPresent = useIsPresent();
  const { step, amount } = flow;
  const unavailable = saleWindow !== "live";
  const quote = getContributionQuote(
    amount,
    sale.minContribution,
    sale.maxContribution,
    sale.tokenPrice,
  );
  const panelProps: SalePanelProps = {
    sale,
    flow,
    dispatch,
    unavailable,
    quote,
    onBeginSale,
    onChooseAsset,
    onSonarRequest,
  };
  // popLayout keeps the outgoing panel visible while its replacement enters.
  // A full transform string lets Motion use the browser's compositor.
  const variants = {
    enter: (instant: boolean) => ({
      opacity: 0,
      transform: instant || reduced ? "none" : "translate3d(0px,0px,0px)",
    }),
    present: (instant: boolean) => ({
      opacity: 1,
      transform: instant || reduced ? "none" : "translate3d(0px,0px,0px)",
      transition: {
        duration: instant ? 0 : reduced ? panelExitSeconds : panelEnterSeconds,
        ease: motionEaseOut,
      },
    }),
    exit: (instant: boolean) => ({
      opacity: 0,
      transform: instant || reduced ? "none" : "translate3d(0px,0px,0px)",
      transition: {
        duration: instant ? 0 : panelExitSeconds,
        ease: motionEaseOut,
      },
    }),
  };
  return (
    <motion.section
      ref={ref}
      custom={keyboard}
      variants={variants}
      initial="enter"
      animate="present"
      exit="exit"
      className={saleCardVariants({
        step: step === "overview" && flow.walletDemoConnected ? "ready" : step,
      })}
      id={isPresent ? "participate" : undefined}
      aria-hidden={!isPresent || undefined}
      inert={!isPresent || undefined}
      aria-label="Token sale participation"
    >
      <span className={"sr-only"} aria-live="polite">
        Current activity: {step}
      </span>
      {unavailable && step !== "complete" ? (
        <p
          className={
            "border border-[var(--rust)] bg-[#251007] py-2.5 px-2.5 mb-4 text-[12px]"
          }
          role="status"
        >
          {saleWindow === "upcoming"
            ? "The demo sale has not started."
            : saleWindow === "ended"
              ? "The sale has ended."
              : "Sale timing is unavailable."}
        </p>
      ) : null}
      <ActiveSalePanel {...panelProps} />

      <span className={"sr-only"}>
        Demo environment. No on-chain transactions.
      </span>
    </motion.section>
  );
});
function ActiveSalePanel(props: SalePanelProps) {
  switch (props.flow.step) {
    case "overview":
      return props.flow.walletDemoConnected ? (
        <ConnectedPanel {...props} />
      ) : (
        <OverviewPanel {...props} />
      );
    case "select":
      return <PaymentPanel {...props} />;
    case "breakdown":
      return <ComparisonPanel {...props} />;
    case "quote":
      return <QuotePanel {...props} />;
    case "review":
      return <ReviewPanel {...props} />;
    case "dual":
    case "complete":
      return <AllocationPanel {...props} />;
  }
}
