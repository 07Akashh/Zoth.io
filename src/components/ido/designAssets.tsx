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
> & { src: string }) {
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
    <div className="design-background" aria-hidden="true">
      <div className="design-grid">
        <div className="design-grid-mask">
          <DesignAsset
            src="/artwork/perspectiveGrid.svg"
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="design-glow" />
    </div>
  );
}

export function HeroKicker() {
  return (
    <span className="hero-kicker">
      <DesignAsset
        src="/artwork/heroLabelLeft.svg"
        className="kicker-outline"
      />
      <span>Lorem ipsum</span>
      <DesignAsset
        src="/artwork/heroLabelRight.svg"
        className="kicker-outline"
      />
    </span>
  );
}

export function TokenMark() {
  return (
    <span className="token-mark" aria-hidden="true">
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
