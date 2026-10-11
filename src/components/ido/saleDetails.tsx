import type { Sale } from "@/types/sale";
import { DesignAsset } from "./designAssets";
import { currency } from "@/lib/utils";

export function SaleDetails({ sale }: { sale: Sale }) {
  const rows = [
    ["47b83.svg", "Token", sale.symbol],
    ["db167.svg", "Network", sale.network],
    ["c3185.svg", "Token price", `$${sale.tokenPrice}`],
    ["b04ef.svg", "Round supply", currency(sale.roundSupply)],
    ["", "Distribution", sale.distribution],
    ["5df13.svg", "Payment assets", sale.paymentAssets.join(" / ")],
  ];
  return (
    <table id="sale-details" className="sale-details w-full">
      <caption className="sr-only">Token sale details</caption>
      <tbody>
        {rows.map(([icon, label, value], i) => (
          <tr
            className={`detail-row ${i === 4 ? "detail-row-indent" : ""}`}
            key={label}
          >
            <th scope="row" className="font-normal text-left">
              <span className="flex items-center gap-3">
                {icon ? <DesignAsset file={icon} /> : null}
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
            <td className="text-right" aria-label={value}>
              {["DEMO", "DEMO", "[XX]", "[XX]", "Lorem ipsum", "Demo"][i]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
