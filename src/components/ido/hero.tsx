import type { Sale } from "@/types/sale";
import { HeroKicker } from "./designAssets";
export function Hero({ sale }: { sale: Sale }) {
  return (
    <>
      <HeroKicker />
      <h1
        className={
          "text-[64px] leading-[1.05] font-medium tracking-[-1.92px] mb-5 whitespace-nowrap [clip-path:inset(0)] [transition:clip-path_600ms_var(--ease-in-out)] max-[1151px]:text-[clamp(40px,_3.77vw,_64px)] max-[951px]:whitespace-normal max-[761px]:whitespace-normal max-[761px]:tracking-[-1.3px] max-[511px]:text-[clamp(30px,_8.8vw,_40px)] starting:[clip-path:inset(0_100%_0_0)] max-[1001px]:text-[clamp(34px,_6vw,_54px)] max-[1001px]:whitespace-normal motion-reduce:[clip-path:inset(0)] motion-reduce:[transition:none] motion-reduce:starting:[clip-path:inset(0)]"
        }
      >
        {sale.name}
      </h1>
      <p
        className={
          "text-[20px] leading-[1.33] text-[#ffffff99] mb-10 min-h-13.5 max-[1151px]:text-[16px] max-[761px]:text-[18px] max-[761px]:max-w-145 max-[511px]:text-[16px] max-[511px]:mb-8 max-[1001px]:max-w-170"
        }
      >
        {sale.description}
      </p>
    </>
  );
}
