/** One page, multiple UI activities. Reference Figma frames are not routes. */
export type SaleStep =
  | "overview"
  | "select"
  | "quote"
  | "breakdown"
  | "review"
  | "dual"
  | "complete";
export type QuoteOrigin = "select" | "breakdown" | "dual";

export interface SaleFlowState {
  step: SaleStep;
  quoteOrigin: QuoteOrigin;
  network: string;
  asset: string;
  amount: string;
  accepted: boolean;
  walletDemoConnected: boolean;
  sonarDemoConnected: boolean;
}

export type SaleFlowAction =
  | {
      type: "CONNECT_DEMO";
      service: "wallet" | "sonar";
      startSale?: boolean;
      selectedAsset?: string;
    }
  | { type: "DISCONNECT_DEMO"; service: "wallet" | "sonar" }
  | { type: "SET_NETWORK"; network: string }
  | { type: "SET_ASSET"; asset: string }
  | { type: "SET_AMOUNT"; amount: string }
  | { type: "SET_ACCEPTED"; accepted: boolean }
  | { type: "OPEN_SALE" }
  | { type: "OPEN_COMPARISON" }
  | { type: "OPEN_ALLOCATIONS" }
  | { type: "SELECT_PAYMENT"; asset?: string }
  | { type: "CONTINUE_TO_QUOTE" }
  | { type: "REVIEW_QUOTE"; valid: boolean }
  | { type: "CONFIRM_DEMO"; valid: boolean }
  | { type: "BACK" }
  | { type: "RESET" };

export const initialSaleFlow: SaleFlowState = {
  step: "overview",
  quoteOrigin: "select",
  network: "Ethereum",
  asset: "USDT",
  amount: "",
  accepted: false,
  walletDemoConnected: false,
  sonarDemoConnected: false,
};

export function saleFlowReducer(
  state: SaleFlowState,
  action: SaleFlowAction,
): SaleFlowState {
  switch (action.type) {
    case "CONNECT_DEMO": {
      if (action.service === "sonar")
        return { ...state, sonarDemoConnected: true };
      if (action.selectedAsset)
        return {
          ...state,
          walletDemoConnected: true,
          step: "quote",
          quoteOrigin:
            state.step === "dual" || state.step === "breakdown"
              ? state.step
              : "select",
          asset: action.selectedAsset,
          accepted: false,
        };
      return {
        ...state,
        walletDemoConnected: true,
        step: action.startSale ? "select" : state.step,
      };
    }
    case "DISCONNECT_DEMO":
      return action.service === "wallet"
        ? {
            ...state,
            walletDemoConnected: false,
            step: "overview",
            accepted: false,
          }
        : { ...state, sonarDemoConnected: false };
    case "SET_NETWORK":
      return {
        ...state,
        network: action.network,
        step: state.step === "review" ? "quote" : state.step,
        accepted: false,
      };
    case "SET_ASSET":
      return {
        ...state,
        asset: action.asset,
        step: state.step === "review" ? "quote" : state.step,
        accepted: false,
      };
    case "SET_AMOUNT":
      return {
        ...state,
        amount: action.amount,
        step: state.step === "review" ? "quote" : state.step,
        accepted: false,
      };
    case "SET_ACCEPTED":
      return state.step === "quote" || state.step === "review"
        ? { ...state, accepted: action.accepted }
        : state;
    case "OPEN_SALE":
      return state.walletDemoConnected
        ? { ...state, step: "select", quoteOrigin: "select" }
        : state;
    case "OPEN_COMPARISON":
      return { ...state, step: "breakdown" };
    case "OPEN_ALLOCATIONS":
      return { ...state, step: "dual" };
    case "SELECT_PAYMENT":
      return state.walletDemoConnected
        ? {
            ...state,
            step: "quote",
            quoteOrigin:
              state.step === "breakdown" || state.step === "dual"
                ? state.step
                : "select",
            asset: action.asset ?? state.asset,
            accepted: false,
          }
        : state;
    case "CONTINUE_TO_QUOTE":
      return state.step === "select" && state.walletDemoConnected
        ? { ...state, step: "quote", quoteOrigin: "select" }
        : state;
    case "REVIEW_QUOTE":
      return state.step === "quote" && state.walletDemoConnected && action.valid
        ? { ...state, step: "review" }
        : state;
    case "CONFIRM_DEMO":
      return state.step === "review" &&
        state.walletDemoConnected &&
        state.accepted &&
        action.valid
        ? { ...state, step: "complete" }
        : state;
    case "BACK":
      return {
        ...state,
        step:
          state.step === "quote"
            ? state.quoteOrigin
            : state.step === "review"
              ? "quote"
              : "overview",
        accepted: false,
      };
    case "RESET":
      return {
        ...state,
        step: "overview",
        amount: "",
        accepted: false,
        quoteOrigin: "select",
      };
    default:
      return state;
  }
}

/** Stablecoins are shown at a 1:1 USD demo rate. Require conventional decimal amounts (up to 2 places). */
export function getContributionQuote(
  amount: string,
  min: number,
  max: number,
  tokenPrice: number,
) {
  const conventionalDecimal = /^(?:\d+)(?:\.\d{1,2})?$/.test(amount);
  const n = conventionalDecimal ? Number(amount) : NaN;
  const valid =
    Number.isFinite(n) &&
    Number.isFinite(min) &&
    Number.isFinite(max) &&
    Number.isFinite(tokenPrice) &&
    n >= min &&
    n <= max &&
    min > 0 &&
    max >= min &&
    tokenPrice > 0;
  return { valid, amount: n, tokenAmount: valid ? n / tokenPrice : null };
}
