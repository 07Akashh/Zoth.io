"use client";
import { currency } from "@/lib/utils";
import type { Sale } from "@/types/sale";
import { ProgressLine, SaleCountdown } from "./saleUi";

export function SaleStatistics({ sale }: { sale: Sale }) {
  return (
    <section className="statistics" aria-label="Sale statistics">
      <div className="raised-row">
        <div title={`Total raised: $${currency(sale.raised)}`}>
          <p className="metric-caption">Demo</p>
          <strong className="metric-value">[XX]</strong>
        </div>
        <div
          className="text-right"
          title={`Hard cap: $${currency(sale.hardCap)}`}
        >
          <p className="metric-caption">Lorem ipsum</p>
          <strong className="metric-value orange">[XX]</strong>
        </div>
      </div>
      <ProgressLine
        value={(sale.raised / sale.hardCap) * 100}
        label="Funding progress"
      />
      <div className="progress-labels">
        <span>[XX]</span>
        <span>[XX]</span>
      </div>
      <div className="small-stats">
        {[
          {
            label: "Participants",
            value: sale.participants,
            total: sale.participantTarget,
          },
          {
            label: "Current round",
            value: sale.roundSold,
            total: sale.roundSupply,
          },
        ].map(({ label, value, total }) => (
          <div className="small-stat" key={label} aria-label={label}>
            <div className="small-stat-row">
              <span>[XX]</span>
              <strong>[XX]</strong>
            </div>
            <ProgressLine
              value={(value / total) * 100}
              label={`${label} progress`}
            />
            <div className="progress-labels">
              <span>[XX]</span>
              <span>[XX]</span>
            </div>
          </div>
        ))}
      </div>
      <div className="allocation-strip">
        <span className="metric-caption">Demo</span>
        <strong className="metric-value">[XX]</strong>
      </div>
      <SaleCountdown startsAt={sale.saleStartsAt} endsAt={sale.endsAt} />
    </section>
  );
}
