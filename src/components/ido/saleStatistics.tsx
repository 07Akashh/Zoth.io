"use client";
import { currency } from "@/lib/utils";
import type { Sale } from "@/types/sale";
import { ProgressLine, SaleCountdown } from "./saleUi";
export function SaleStatistics({ sale }: { sale: Sale }) {
  return (
    <section
      className={"[filter:drop-shadow(0_0_61.3px_#ff45091c)]"}
      aria-label="Sale statistics"
    >
      <div
        className={
          "flex justify-between items-end mb-6 max-[511px]:[&_.metric-value]:text-[24px]"
        }
      >
        <div title={`Total raised: $${currency(sale.raised)}`}>
          <p
            className={
              "block [font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[16px] tracking-[0.2px] text-[#ffffffcc] leading-[19px] mb-1.5 max-[511px]:text-[14px]"
            }
          >
            Demo
          </p>
          <strong
            className={
              "metric-value text-[32px] font-medium leading-[38px] max-[511px]:text-[28px]"
            }
          >
            [XX]
          </strong>
        </div>
        <div
          className={"text-right"}
          title={`Hard cap: $${currency(sale.hardCap)}`}
        >
          <p
            className={
              "block [font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[16px] tracking-[0.2px] text-[#ffffffcc] leading-[19px] mb-1.5 max-[511px]:text-[14px]"
            }
          >
            Lorem ipsum
          </p>
          <strong
            className={
              "metric-value text-[32px] font-medium leading-[38px] max-[511px]:text-[28px] text-orange!"
            }
          >
            [XX]
          </strong>
        </div>
      </div>
      <ProgressLine
        value={(sale.raised / sale.hardCap) * 100}
        label="Funding progress"
      />
      <div
        className={
          "flex justify-between gap-2 mt-2 [font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[#ffffffcc] text-[14px] leading-[17px]"
        }
      >
        <span>[XX]</span>
        <span>[XX]</span>
      </div>
      <div className={"grid grid-cols-[1fr_1fr] gap-2 mt-8 max-[511px]:gap-2"}>
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
          <div
            className={
              "h-[95px] border border-[#330e02] bg-[#0006] py-2.5 px-2.5 max-[511px]:py-2.5 max-[511px]:px-2"
            }
            key={label}
            aria-label={label}
          >
            <div
              className={
                "h-6.5 flex items-start justify-between [border-bottom:1px_solid_#541400] pb-2 mb-4 text-[12px] [&_strong]:text-[14px] [&_strong]:text-orange [&_strong]:font-normal max-[511px]:text-[11px] max-[511px]:[&_strong]:text-[12px]"
              }
            >
              <span>[XX]</span>
              <strong>[XX]</strong>
            </div>
            <ProgressLine
              value={(value / total) * 100}
              label={`${label} progress`}
            />
            <div
              className={
                "flex justify-between gap-2 mt-2 [font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[#ffffffcc] text-[14px] leading-[17px]"
              }
            >
              <span>[XX]</span>
              <span>[XX]</span>
            </div>
          </div>
        ))}
      </div>
      <div
        className={
          "[&_.metric-value]:block mt-2 h-[97px] py-4 px-3.5 bg-black border border-[#350f0f]"
        }
      >
        <span
          className={
            "block [font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[16px] tracking-[0.2px] text-[#ffffffcc] leading-[19px] mb-1.5 max-[511px]:text-[14px]"
          }
        >
          Demo
        </span>
        <strong
          className={
            "metric-value text-[32px] font-medium leading-[38px] max-[511px]:text-[28px]"
          }
        >
          [XX]
        </strong>
      </div>
      <SaleCountdown startsAt={sale.saleStartsAt} endsAt={sale.endsAt} />
    </section>
  );
}
