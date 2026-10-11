import { FrameButton, DetailRows, OptionDropdown } from "./panelControls";
import type { SalePanelProps } from "./salePanelTypes";
import { DesignAsset, TokenMark } from "../designAssets";
import { currency } from "@/lib/utils";

type QuotePanelProps = Pick<
  SalePanelProps,
  "sale" | "flow" | "dispatch" | "unavailable" | "quote"
>;

export function QuotePanel({
  sale,
  flow,
  dispatch,
  unavailable,
  quote,
}: QuotePanelProps) {
  const { network, asset, amount, accepted } = flow;
  return (
    <>
      <div className="quote-top">
        <OptionDropdown
          label="Network"
          options={sale.networks}
          value={network}
          onChange={(selectedNetwork) =>
            dispatch({ type: "SET_NETWORK", network: selectedNetwork })
          }
        />
        <span className="orange">{sale.symbol}</span>
      </div>
      <div className="quote-fields">
        <div className="amount-box">
          <div className="amount-label">
            <label htmlFor="contribution-amount">Demo</label>
            <span>[XX]</span>
          </div>
          <div className="amount-line">
            <input
              id="contribution-amount"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              placeholder="0"
              value={amount}
              aria-label={`Contribution amount in ${asset}`}
              aria-invalid={amount !== "" && !quote.valid}
              aria-describedby="contribution-limits"
              onChange={(e) =>
                dispatch({ type: "SET_AMOUNT", amount: e.target.value })
              }
            />
            <span className="asset-max" title="Set maximum amount">
              <button
                onClick={() =>
                  dispatch({
                    type: "SET_AMOUNT",
                    amount: String(sale.maxContribution),
                  })
                }
                aria-label="Use maximum contribution"
              >
                Demo
              </button>
            </span>
            <span className="asset-divider">
              <DesignAsset src="/artwork/paymentDivider.svg" />
            </span>
            <DesignAsset src="/icons/paymentToken.svg" />
            <OptionDropdown
              label="Pay with"
              options={sale.paymentAssets}
              value={asset}
              onChange={(selectedAsset) =>
                dispatch({ type: "SET_ASSET", asset: selectedAsset })
              }
            />
          </div>
        </div>
        <div className="receive-box">
          <div className="amount-label">
            <span>Lorem ipsum</span>
            <span>{sale.symbol}</span>
          </div>
          <div className="amount-line">
            <output
              className={quote.valid ? "" : "muted"}
              aria-label="You receive (estimated)"
            >
              {quote.tokenAmount === null
                ? "0"
                : currency(quote.tokenAmount, 2)}
            </output>
            <TokenMark />
            <span>{sale.symbol}</span>
          </div>
        </div>
        <span className="quote-arrow" aria-hidden="true">
          <DesignAsset src="/icons/conversionArrow.svg" />
        </span>
      </div>
      <span className="sr-only" id="contribution-limits">
        Minimum {sale.minContribution}, maximum {sale.maxContribution}. Demo
        rate: 1 {asset} = 1 USD.
      </span>
      <DetailRows
        values={[
          `$${sale.tokenPrice}`,
          `${currency(sale.minContribution)} ${asset}`,
          `${currency(sale.maxContribution)} ${asset}`,
          sale.distribution,
          `${currency(sale.roundSold)} ${sale.symbol}`,
          `${currency(sale.roundSupply)} ${sale.symbol}`,
          network,
        ]}
        names={[
          "Token price",
          "Minimum contribution",
          "Maximum contribution",
          "Distribution",
          "Round sold",
          "Round supply",
          "Network",
        ]}
      />
      <label className="acceptance">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) =>
            dispatch({ type: "SET_ACCEPTED", accepted: e.target.checked })
          }
          aria-label="I understand this is a mock quote and not a real token purchase"
        />
        <span>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        </span>
      </label>
      <FrameButton
        label="Review allocation"
        onClick={() => dispatch({ type: "REVIEW_QUOTE", valid: quote.valid })}
        disabled={!quote.valid || !accepted || unavailable}
      />
    </>
  );
}
