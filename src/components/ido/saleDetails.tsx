import type { Sale } from "@/types/sale";
import { DesignAsset } from "./designAssets";
import { currency } from "@/lib/utils";
export function SaleDetails({ sale }: { sale: Sale }) {
  const rows = [
    ["/icons/token.svg", "Token", sale.symbol],
    ["/icons/network.svg", "Network", sale.network],
    ["/icons/tokenPrice.svg", "Token price", `$${sale.tokenPrice}`],
    ["/icons/tokenSupply.svg", "Round supply", currency(sale.roundSupply)],
    ["", "Distribution", sale.distribution],
    [
      "/icons/paymentAssets.svg",
      "Payment assets",
      sale.paymentAssets.join(" / "),
    ],
  ];
  return (
    <table id="sale-details" className={"mt-8 w-full"}>
      <caption className={"sr-only"}>Token sale details</caption>
      <tbody>
        {rows.map(([icon, label, value], i) => (
          <tr
            className={`flex items-center justify-between gap-4 h-auto text-[16px] [border-bottom:1px_solid_#292524] min-h-[37px] py-1.5 [&_>_span]:flex [&_>_span]:items-center [&_>_span]:gap-3 [&_>_strong]:[font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] [&_>_strong]:font-normal [&_>_strong]:tracking-[0.2px] [&_>_strong]:flex [&_>_strong]:items-center [&_>_strong]:gap-[5px] [&:last-child]:[border-top:1px_solid_#292524] [&:last-child]:[border-bottom:0] [&:last-child_strong]:underline max-[951px]:text-[13px] max-[761px]:text-[15px] max-[511px]:[&_td]:max-w-[60%] max-[511px]:[&_td]:text-[13px] [&_th]:min-w-0 [&_th]:[overflow-wrap:anywhere] [&_td]:min-w-0 [&_td]:[overflow-wrap:anywhere] [&_td]:max-w-[55%] ${i === 4 ? "pl-7 h-11" : ""} `}
            key={label}
          >
            <th scope="row" className={"font-normal text-left"}>
              <span className={"flex items-center gap-3"}>
                {icon ? <DesignAsset src={icon} /> : null}
                {
                  [
                    "Demo",
                    "Lorem ipsum",
                    "Lorem ipsum",
                    "Demo",
                    "Demo",
                    "Lorem ipsum",
                  ][i]
                }
              </span>
            </th>
            <td className={"text-right"} aria-label={value}>
              {["DEMO", "DEMO", "[XX]", "[XX]", "Lorem ipsum", "Demo"][i]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
