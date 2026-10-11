import type { Sale } from "@/types/sale";
import { SaleTimeline } from "./saleTimeline";
import { SaleDetails } from "./saleDetails";
import { ReadBeforeCommit } from "./readBeforeCommit";
export function SaleInformation({ sale }: { sale: Sale }) {
  return (
    <section
      className={
        "w-[min(var(--content),_calc(100%_-_64px))] mx-auto max-[761px]:w-[calc(100%_-_36px)] mt-[27px] py-20 px-0 min-h-[571px] max-[761px]:py-15 max-[761px]:px-0 max-[761px]:min-h-0 max-[761px]:mt-0"
      }
    >
      <div
        className={
          "grid grid-cols-[minmax(0,_476fr)_minmax(0,_791fr)] gap-30 max-[1151px]:gap-12.5 max-[951px]:grid-cols-[minmax(0,_1fr)_minmax(0,_1.35fr)] max-[951px]:gap-[35px] max-[761px]:grid-cols-[1fr] max-[761px]:gap-12.5"
        }
      >
        <div>
          <h2
            className={
              "text-[48px] tracking-[-0.64px] leading-[1.2] font-normal max-[1151px]:text-[40px] max-[761px]:text-[38px]"
            }
          >
            Lorem ipsum
          </h2>
          <p
            className={
              "muted text-muted mt-4 text-[22px] leading-[1.33] tracking-[0.22px] max-[1151px]:text-[19px] max-[761px]:text-[19px] max-[761px]:max-w-120"
            }
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
          <ReadBeforeCommit links={sale.links} />
        </div>
        <div>
          <SaleTimeline sale={sale} />
          <SaleDetails sale={sale} />
        </div>
      </div>
    </section>
  );
}
