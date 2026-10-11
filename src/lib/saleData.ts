import type { Sale } from "@/types/sale";
// Fixture values are illustrative. Figma labels are placeholders (Demo / Lorem ipsum / XX).
// Anchor each demo sale to a calendar month: stable deadlines across repeated API calls.
// A new mock campaign begins in the following month, without a stale build-time date.
export function createSaleData(now = new Date()): Sale {
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const end = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1),
  );

  return {
    id: "demo-ido-001",
    name: "Lorem ipsum dolor",
    symbol: "DEMO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et",
    saleStartsAt: start.toISOString(),
    endsAt: end.toISOString(),
    hardCap: 2500000,
    raised: 1028037,
    participants: 17898,
    participantTarget: 20000,
    roundSold: 40271186,
    roundSupply: 45000000,
    tokenPrice: 0.025,
    currency: "USDT",
    minContribution: 50,
    maxContribution: 5000,
    distribution: "25% at TGE, 3-month vesting",
    network: "Ethereum",
    networks: ["Ethereum", "Arbitrum", "Base"],
    paymentAssets: ["USDT", "USDC"],
    milestones: [
      {
        id: "a",
        label: "Registration",
        displayLabel: "Lorem ipsum",
        displayDate: "[XX]",
        displayStatus: "Demo",
        date: new Date(start.getTime() - 5 * 86400000).toISOString(),
        description: "Join the allowlist",
      },
      {
        id: "b",
        label: "Sale live",
        displayLabel: "DEMO",
        displayDate: "Lorem ipsum",
        displayStatus: "",
        date: start.toISOString(),
        description: "Public participation opens",
      },
      {
        id: "c",
        label: "Sale closes",
        displayLabel: "Demo",
        displayDate: "Lorem ipsum",
        displayStatus: "",
        date: end.toISOString(),
        description: "Contributions end",
      },
      {
        id: "d",
        label: "Token distribution",
        displayLabel: "DEMO",
        displayDate: "Lorem ipsum",
        displayStatus: "",
        date: new Date(end.getTime() + 7 * 86400000).toISOString(),
        description: "Distribution begins",
      },
    ],
    links: [
      { label: "Tokenomics overview", href: "#sale-details" },
      { label: "Sale participation guide", href: "#participate" },
      { label: "Risk disclosure", href: "#read-before" },
    ],
  };
}
