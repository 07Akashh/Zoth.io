import type { Sale } from "@/types/sale";
import { HeroKicker } from "./designAssets";

export function Hero({ sale }: { sale: Sale }) {
  return (
    <>
      <HeroKicker />
      <h1 className="hero-heading">{sale.name}</h1>
      <p className="hero-description">{sale.description}</p>
    </>
  );
}
