import { SaleLoading } from "@/components/ido/saleLoading";
export default function LoadingPage() {
  return (
    <main>
      <section
        className={
          "relative min-h-234.5 overflow-clip isolate max-[951px]:min-h-auto max-[1001px]:min-h-0"
        }
      >
        <SaleLoading />
      </section>
    </main>
  );
}
