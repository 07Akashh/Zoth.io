import type { Sale } from "@/types/sale";
import { SaleTimeline } from "./saleTimeline";
import { SaleDetails } from "./saleDetails";
import { ReadBeforeCommit } from "./readBeforeCommit";

export function SaleInformation({ sale }: { sale: Sale }) {
  return (
    <section className="container-main information">
      <div className="info-columns">
        <div>
          <h2 className="section-heading">Lorem ipsum</h2>
          <p className="muted info-intro">
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
