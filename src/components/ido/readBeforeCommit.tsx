import type { Sale } from "@/types/sale";

export function ReadBeforeCommit({ links }: { links: Sale["links"] }) {
  return (
    <section
      className="resources-card"
      id="read-before"
      aria-labelledby="resources-heading"
    >
      <h3 id="resources-heading">Lorem ipsum dolor</h3>
      {links.map((link) => (
        <a href={link.href} key={link.label}>
          <span aria-label={link.label}>Lorem ipsum</span>
          <span aria-hidden="true">Demo</span>
        </a>
      ))}
    </section>
  );
}
