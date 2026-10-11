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
    <div className="partner-scroller" aria-label="Partner logos">
      <div className="partner-track">
        {[false, true].map((isDuplicate) => (
          <div
            className="partner-sequence"
            key={String(isDuplicate)}
            aria-hidden={isDuplicate || undefined}
          >
            {partners.map((partner) => (
              <div className="partner-logo" key={partner.file}>
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
