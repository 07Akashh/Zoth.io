import type { Sale } from "@/types/sale";
export function ReadBeforeCommit({ links }: { links: Sale["links"] }) {
  return (
    <section
      className={
        "h-[225px] mt-13.5 py-5.5 px-5.5 border border-[#330e02] bg-[#0b0303] [filter:drop-shadow(0_0_61.3px_#ff45091c)] [&_h3]:text-[18px] [&_h3]:font-medium [&_h3]:leading-[23.4px] [&_h3]:py-0 [&_h3]:px-3 [&_>_a]:h-13 [&_>_a]:py-0 [&_>_a]:px-3 [&_>_a]:flex [&_>_a]:items-center [&_>_a]:justify-between [&_>_a]:text-[14px] [&_>_a:first-of-type]:mt-2.5 [&_>_a_>_span:last-child]:[font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] [&_>_a_>_span:last-child]:opacity-[0.5] [&_>_a_>_span:last-child]:text-[16px] [&_>_a_>_span:last-child]:underline [&_>_a:hover]:text-orange max-[761px]:mt-7.5 max-[761px]:max-w-125 max-[511px]:py-5.5 max-[511px]:px-2.5"
      }
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
