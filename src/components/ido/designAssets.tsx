import type { ComponentProps } from "react";
import { assetDimensions } from "@/lib/assetDimensions";
/** Reserve the original exported SVG geometry before images load. */
export function DesignAsset({
  src,
  alt = "",
  className = "",
  ...props
}: Pick<
  ComponentProps<"img">,
  "src" | "alt" | "className" | "loading" | "fetchPriority"
> & {
  src: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      {...assetDimensions[src]}
      decoding="async"
      draggable={false}
      {...props}
    />
  );
}
export function DesignBackground() {
  return (
    <div
      className={
        "absolute top-[-43px] left-[50%] w-424.5 h-[993px] [transform:translateX(-50%)] z-[-1] pointer-events-none overflow-hidden"
      }
      aria-hidden="true"
    >
      <div
        className={
          "absolute top-[43.415px] left-[-193.199px] w-[2084.953px] h-[1561.676px] opacity-[0.3]"
        }
      >
        <div
          className={
            'h-full [mask:url("/artwork/gridMask.svg")_0_0/2084.953px_1561.676px_no-repeat] relative [&_>_img]:absolute [&_>_img]:top-[-182.24px] [&_>_img]:left-0 [&_>_img]:max-w-none'
          }
        >
          <DesignAsset
            src="/artwork/perspectiveGrid.svg"
            fetchPriority="high"
          />
        </div>
      </div>
      <div
        className={
          "absolute left-[1136.484px] top-[319.244px] w-[215.208px] h-[339.363px] [transform:rotate(19.22deg)] bg-orange [filter:blur(250px)] rounded-full"
        }
      />
    </div>
  );
}
export function HeroKicker() {
  return (
    <span
      className={
        "flex relative w-[207.35px] h-7 items-center justify-center mb-[27px] text-[16px] tracking-[1.92px] text-orange [&_>_span]:relative [&_>_span]:z-[1] max-[761px]:text-[14px] max-[511px]:mb-[23px]"
      }
    >
      <DesignAsset
        src="/artwork/heroLabelLeft.svg"
        className={"absolute left-0 top-0 max-w-none"}
      />
      <span>Lorem ipsum</span>
      <DesignAsset
        src="/artwork/heroLabelRight.svg"
        className={"absolute left-0 top-0 max-w-none"}
      />
    </span>
  );
}
export function TokenMark() {
  return (
    <span
      className={
        "grid place-items-center h-5 w-5 min-w-5 bg-white rounded-full overflow-hidden relative [&_img]:max-w-none [&_>_img]:block [&_>_img]:w-4 [&_>_img]:h-4"
      }
      aria-hidden="true"
    >
      <img
        src="/partners/tokenMark.svg"
        alt=""
        width={28}
        height={28}
        draggable={false}
      />
    </span>
  );
}
