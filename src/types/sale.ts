export type SaleStatus = "upcoming" | "live" | "ended";
export interface Milestone {
  id: string;
  label: string;
  date: string;
  description: string;
  displayLabel: string;
  displayDate: string;
  displayStatus: string;
}
export interface Sale {
  id: string;
  name: string;
  symbol: string;
  description: string;
  saleStartsAt: string;
  endsAt: string;
  hardCap: number;
  raised: number;
  participants: number;
  participantTarget: number;
  roundSold: number;
  roundSupply: number;
  tokenPrice: number;
  currency: string;
  minContribution: number;
  maxContribution: number;
  distribution: string;
  network: string;
  networks: string[];
  paymentAssets: string[];
  milestones: Milestone[];
  links: { label: string; href: string }[];
}
