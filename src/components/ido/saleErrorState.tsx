"use client";
import { AlertCircle, RefreshCcw } from "lucide-react";

type SaleErrorStateProps = { onRetry: () => void; isRetrying?: boolean };

export function SaleErrorState({
  onRetry,
  isRetrying = false,
}: SaleErrorStateProps) {
  return (
    <div className="container-main error-panel" role="alert">
      <AlertCircle size={28} className="orange" />
      <h1>Unable to load sale details</h1>
      <p className="muted">
        Sale information is temporarily unavailable. Please try again.
      </p>
      <button
        className="button-primary"
        onClick={onRetry}
        disabled={isRetrying}
      >
        <RefreshCcw size={15} /> Retry
      </button>
    </div>
  );
}
