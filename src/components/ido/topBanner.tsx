"use client";
import { useState } from "react";
import { DesignAsset } from "./designAssets";
export function TopBanner() {
  const [shown, setShown] = useState(true);
  if (!shown) return null;
  return (
    <div
      className={
        "h-[43px] bg-orange relative z-[40] flex items-center justify-center gap-1.5 [font-family:Inter,_Arial,_sans-serif] text-[13.755px] max-[511px]:text-[12px] max-[511px]:h-[37px]"
      }
    >
      <button
        aria-label="Dismiss announcement"
        onClick={() => setShown(false)}
        className={
          "absolute left-[33.94px] top-[11px] w-[16.8px] h-[16.8px] [border:0] py-0 px-0 [background:none] max-[511px]:left-4"
        }
      >
        <DesignAsset src="/icons/close.svg" />
      </button>
      <span>Demo</span>
      <a
        className={
          "w-[97.272px] h-[21px] flex items-center justify-between pl-4.5 text-[14.175px] hover:underline max-[511px]:text-[12px] [&_img]:[transition:transform_160ms_var(--ease-out)] [@media(hover:_hover)_and_(pointer:_fine)]:[&:hover_img]:[transform:translateX(4px)] motion-reduce:[&_img]:transform-none! motion-reduce:[&_img]:[transition:none]"
        }
        href="#participate"
        aria-label="Demo — Explore the token sale"
      >
        Demo
        <DesignAsset src="/icons/arrowRight.svg" />
      </a>
    </div>
  );
}
