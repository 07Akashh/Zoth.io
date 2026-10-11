import { PartnerLogos } from "./partnerLogos";
export function Partners() {
  return (
    <section
      className={
        "h-[95.692px] bg-[#22030355] [border-top:1.122px_solid_#531a1a] [border-bottom:1.122px_solid_#531a1a] overflow-hidden max-[761px]:h-20"
      }
      aria-label="Partner brands"
    >
      <div
        className={
          "w-[min(var(--content),_calc(100%_-_64px))] mx-auto max-[761px]:w-[calc(100%_-_36px)] h-full flex items-center relative before:content-['+'] before:absolute before:text-[#a34747] before:text-[24px] before:leading-[14px] before:font-semibold before:top-[-7px] before:z-[2] before:left-[-7px] after:content-['+'] after:absolute after:text-[#a34747] after:text-[24px] after:leading-[14px] after:font-semibold after:top-[-7px] after:z-[2] after:right-[-7px]"
        }
      >
        <div
          className={
            "after:content-['+'] after:absolute after:text-[#a34747] after:text-[24px] after:leading-[14px] after:font-semibold after:top-[-7px] after:z-[2] after:right-[-7px] h-full w-[227px] shrink-0 [border-left:1px_solid_#531a1a] [border-right:1px_solid_#531a1a] flex justify-center flex-col py-0 px-[37px] text-[15.71px] leading-[19px] relative max-[761px]:w-[115px] max-[761px]:py-0 max-[761px]:px-4 max-[761px]:text-[13px] max-[511px]:w-22.5 max-[511px]:py-0 max-[511px]:px-3"
          }
        >
          DEMO
          <br />
          DEMO
        </div>
        <PartnerLogos />
      </div>
    </section>
  );
}
