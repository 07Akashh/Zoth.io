"use client";
import { AnimatePresence } from "framer-motion";
import type { ComponentProps } from "react";
import { SaleParticipation } from "./saleParticipation";

type ParticipationFlowProps = ComponentProps<typeof SaleParticipation>;

export default function ParticipationFlow(props: ParticipationFlowProps) {
  return (
    <AnimatePresence mode="popLayout" initial={false} custom={props.keyboard}>
      <SaleParticipation
        key={`${props.flow.step}-${props.flow.walletDemoConnected}`}
        {...props}
      />
    </AnimatePresence>
  );
}
