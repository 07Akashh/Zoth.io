import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import type { Sale } from "@/types/sale";
import { saleQueryKey } from "@/lib/saleQuery";
import { AppProviders } from "./appProviders";
import SaleLanding from "./saleLanding";
import { Hero } from "./ido/hero";
import { Partners } from "./ido/partnersStrip";
import { SaleInformation } from "./ido/saleInformation";
import { Footer } from "./ido/footer";

export function SalePage({ sale }: { sale: Sale }) {
  // Each server render gets its own QueryClient; no cache crosses user requests.
  const queryClient = new QueryClient();
  queryClient.setQueryData(saleQueryKey(sale.id), sale);
  return (
    <AppProviders>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SaleLanding saleId={sale.id} heroContent={<Hero sale={sale} />}>
          <Partners />
          <SaleInformation sale={sale} />
          <Footer />
        </SaleLanding>
      </HydrationBoundary>
    </AppProviders>
  );
}
