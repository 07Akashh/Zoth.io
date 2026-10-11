import type { Sale } from "@/types/sale";

export function SaleTimeline({ sale }: { sale: Sale }) {
  return (
    <ol
      id="timeline"
      className="timeline-grid"
      aria-label="Token sale timeline"
    >
      {sale.milestones.map((milestone, milestoneIndex) => (
        <li className="timeline-step" key={milestone.id}>
          <div
            className={`timeline-marker ${milestoneIndex === 0 ? "is-current" : ""}`}
            aria-hidden="true"
          />
          <p className="orange">{milestoneIndex === 0 ? "Demo" : "\u00a0"}</p>
          <h3>{["Lorem ipsum", "DEMO", "Demo", "DEMO"][milestoneIndex]}</h3>
          <time dateTime={milestone.date}>
            {milestoneIndex === 0 ? "[XX]" : "Lorem ipsum"}
          </time>
        </li>
      ))}
    </ol>
  );
}
