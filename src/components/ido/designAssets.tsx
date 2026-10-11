/** Assets exported from the supplied Figma file. SVGs keep their intrinsic size. */
export function DesignAsset({
  file,
  alt = "",
  className = "",
}: {
  file: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      src={`/figma/${file}`}
      alt={alt}
      className={className}
      draggable={false}
    />
  );
}

export function DesignBackground() {
  return (
    <div className="design-background" aria-hidden="true">
      <div className="design-grid">
        <div className="design-grid-mask">
          <DesignAsset file="68b5d.svg" />
        </div>
      </div>
      <div className="design-glow" />
    </div>
  );
}

export function HeroKicker() {
  return (
    <span className="hero-kicker">
      <DesignAsset file="799d8.svg" className="kicker-outline" />
      <span>Lorem ipsum</span>
      <DesignAsset file="358d5.svg" className="kicker-outline" />
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
