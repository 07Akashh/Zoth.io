"use client";
import { SaleErrorState } from "@/components/ido/saleErrorState";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <SaleErrorState onRetry={reset} />
    </main>
  );
}
