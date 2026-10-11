const partners = [
  { name: "Borderless", file: "borderless" },
  { name: "Taisu", file: "taisu" },
  { name: "Blockchain Founders Fund", file: "blockchainFoundersFund" },
  { name: "Chainlink", file: "chainlink" },
  { name: "Coinbase", file: "coinbase" },
  { name: "Mindfulness Capital", file: "mindfulnessCapital" },
  { name: "SingularityDAO", file: "singularityDao" },
  { name: "SOSV", file: "sosv" },
  { name: "Ripple", file: "ripple" },
  { name: "Demo partner", file: "demoPartner" },
] as const;
export function PartnerLogos() {
  return (
    <div
      className={
        "relative h-16 flex-1 min-w-0 overflow-hidden [mask-image:linear-gradient(_90deg,_transparent,_#000_9%,_#000_92%,_transparent_)] [&_img]:max-w-none [@media(hover:_hover)_and_(pointer:_fine)]:[&:hover_.partner-track]:[animation-play-state:paused]"
      }
      aria-label="Partner logos"
    >
      <div
        className={
          "partner-track absolute top-[calc(50%_-_0.56px)] left-0 flex w-[max-content] animate-partner-drift will-change-transform motion-reduce:[animation:none] motion-reduce:[transform:translateY(-50%)] motion-reduce:[will-change:auto]"
        }
      >
        {[false, true].map((isDuplicate) => (
          <div
            className={"flex items-center gap-10 pr-10 flex-none"}
            key={String(isDuplicate)}
            aria-hidden={isDuplicate || undefined}
          >
            {partners.map((partner) => (
              <div
                className={"w-[143.099px] h-[56.47px] flex-none overflow-clip"}
                key={partner.file}
              >
                <img
                  src={`/partners/${partner.file}.svg`}
                  alt={isDuplicate ? "" : partner.name}
                  width={144}
                  height={57}
                  draggable={false}
                  decoding="async"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
