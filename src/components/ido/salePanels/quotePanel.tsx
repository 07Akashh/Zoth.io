import { Checkbox } from "@/components/ui/checkbox";
import { FrameButton, DetailRows, OptionDropdown } from "./panelControls";
import type { SalePanelProps } from "./salePanelTypes";
import { DesignAsset, TokenMark } from "../designAssets";
import { currency } from "@/lib/utils";
const amountRowClassName =
  "flex items-center gap-1.5 h-[67px] text-[14px] [&_>_input]:text-[clamp(26px,_7cqw,_48px)] [&_>_input]:font-medium [&_>_input]:leading-[1.4] [&_>_input]:min-w-0 [&_>_input]:flex-1 [&_>_input]:bg-transparent [&_>_input]:[border:0] [&_>_input]:text-[#fffffff5] [&_>_input]:w-full [&_>_input]:outline-none [&_>_input::placeholder]:text-[#fffffff5] [&_>_input::placeholder]:opacity-[1] [&_>_output]:text-[clamp(26px,_7cqw,_48px)] [&_>_output]:leading-[1.1] [&_>_output]:font-medium [&_>_output]:flex-1 [&_>_output]:min-w-0 [&_>_output]:[overflow-wrap:anywhere] [&_>_output.muted]:text-[#666] max-[1151px]:[&_>_input]:text-[40px] max-[1151px]:[&_>_output]:text-[40px] max-[1151px]:gap-1 max-[761px]:[&_>_output]:text-[48px] max-[511px]:[&_>_input]:text-[38px] max-[511px]:[&_>_output]:text-[38px] [&_>_input:focus-visible]:[outline:2px_solid_var(--orange)] [&_>_input:focus-visible]:[outline-offset:2px]";
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
      <div
        className={
          "flex items-center justify-between [border-bottom:1px_solid_#541400] pb-2 text-[14px]"
        }
      >
        <OptionDropdown
          label="Network"
          disabled={unavailable}
          options={sale.networks}
          value={network}
          displayValue="[XX]"
          onChange={(selectedNetwork) =>
            dispatch({ type: "SET_NETWORK", network: selectedNetwork })
          }
        />
        <span className={"text-orange!"} aria-label={sale.symbol}>
          [XX]
        </span>
      </div>
      <div className={"relative mt-3 flex flex-col gap-2"}>
        <div
          className={
            "border border-[#330e02] bg-[#350f0f1a] py-2 px-3 h-[107px] flex flex-col justify-between"
          }
        >
          <div
            className={
              "flex items-center justify-between leading-[1.6] text-[#b1b4b6] text-[14px] [&_>_span:last-child]:text-[12px]"
            }
          >
            <label htmlFor="contribution-amount">Demo</label>
            <span>[XX]</span>
          </div>
          <div className={amountRowClassName}>
            <input
              id="contribution-amount"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              placeholder="[XX]"
              value={amount}
              disabled={unavailable}
              aria-label={`Contribution amount in ${asset}`}
              aria-invalid={amount !== "" && !quote.valid}
              aria-describedby="contribution-limits"
              onChange={(e) =>
                dispatch({ type: "SET_AMOUNT", amount: e.target.value })
              }
            />
            <span
              className={
                "[border:1.51px_solid_#350f0f] py-0 px-2 text-[12px] max-[1151px]:hidden max-[761px]:flex max-[511px]:hidden [&_button]:[transition:transform_var(--duration-release)_var(--ease-out),_background-color_150ms_ease,_color_150ms_ease] [&_button:active]:[transform:scale(0.97)] [&_button:active]:[transition-duration:var(--duration-press),_150ms,_150ms] @max-[581px]:hidden motion-reduce:[&_button]:transform-none! motion-reduce:[&_button]:[transition:background-color_150ms_ease,_color_150ms_ease]"
              }
              title="Set maximum amount"
            >
              <button
                disabled={unavailable}
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
            <span
              className={
                "flex w-[1px] h-5 my-0 mx-[3px] relative [&_>_img]:absolute [&_>_img]:[transform:rotate(90deg)] [&_>_img]:[transform-origin:0_0] [&_>_img]:max-w-none max-[1151px]:hidden max-[761px]:flex max-[511px]:hidden @max-[581px]:hidden"
              }
            >
              <DesignAsset src="/artwork/paymentDivider.svg" />
            </span>
            <DesignAsset src="/icons/paymentToken.svg" />
            <OptionDropdown
              label="Pay with"
              disabled={unavailable}
              options={sale.paymentAssets}
              value={asset}
              displayValue="DEMO"
              onChange={(selectedAsset) =>
                dispatch({ type: "SET_ASSET", asset: selectedAsset })
              }
            />
          </div>
        </div>
        <div
          className={
            "border border-[#330e02] bg-[#350f0f1a] py-2 px-3 h-[107px] flex flex-col justify-between"
          }
        >
          <div
            className={
              "flex items-center justify-between leading-[1.6] text-[#b1b4b6] text-[14px] [&_>_span:last-child]:text-[12px]"
            }
          >
            <span>Lorem ipsum</span>
            <span aria-label={sale.symbol}>Demo</span>
          </div>
          <div className={amountRowClassName}>
            <output
              className={quote.valid ? "" : "muted text-muted"}
              aria-label="You receive (estimated)"
            >
              {quote.tokenAmount === null
                ? "[XX]"
                : currency(quote.tokenAmount, 2)}
            </output>
            <TokenMark />
            <span aria-label={sale.symbol}>Demo</span>
          </div>
        </div>
        <span
          className={"absolute left-[calc(50%_-_21px)] top-22.5"}
          aria-hidden="true"
        >
          <DesignAsset src="/icons/conversionArrow.svg" />
        </span>
      </div>
      <span className={"sr-only"} id="contribution-limits">
        Minimum {sale.minContribution}, maximum {sale.maxContribution}. Demo
        rate: 1 {asset} = 1 USD.
      </span>
      <DetailRows
        displayNames={[
          "Lorem ipsum",
          "[XX]",
          "Lorem ipsum dolor",
          "Lorem ipsum",
          "Demo",
          "Lorem ipsum",
          "Demo",
        ]}
        displayValues={[
          "[XX]",
          "[XX]",
          "[XX]",
          "[XX]",
          "[XX]",
          "[XX]",
          network === "Base" ? (
            <DesignAsset
              key="network"
              src="/icons/baseNetwork.svg"
              alt="Base"
            />
          ) : (
            network
          ),
        ]}
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
      <label
        htmlFor="quote-consent"
        className="mt-4 flex cursor-pointer items-start gap-2 [font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[14px] leading-[17px] tracking-[0.21px] text-white/70"
      >
        <Checkbox
          id="quote-consent"
          checked={accepted}
          disabled={unavailable}
          onCheckedChange={(checked) =>
            dispatch({ type: "SET_ACCEPTED", accepted: checked === true })
          }
          aria-label="I understand this is a mock quote and not a real token purchase"
        />
        <span>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        </span>
      </label>
      <FrameButton
        label="Review allocation"
        children={quote.valid ? "[XX]" : undefined}
        onClick={() => dispatch({ type: "REVIEW_QUOTE", valid: quote.valid })}
        disabled={!quote.valid || !accepted || unavailable}
      />
    </>
  );
}
