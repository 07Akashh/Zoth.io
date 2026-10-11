"use client";

import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useIsPresent,
  useReducedMotion,
} from "framer-motion";
import { menuItemMotion, menuPanelMotion } from "@/lib/motion";

type MobileNavigationProps = {
  open: boolean;
  keyboard: boolean;
  links: readonly (readonly [string, string])[];
  onNavigate: (href: string) => void;
};

export function MobileNavigation(props: MobileNavigationProps) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence initial={false} custom={props.keyboard}>
        {props.open ? <NavigationPanel key="mobile-nav" {...props} /> : null}
      </AnimatePresence>
    </LazyMotion>
  );
}

function NavigationPanel({
  keyboard,
  links,
  onNavigate,
}: MobileNavigationProps) {
  const reduced = Boolean(useReducedMotion());
  const present = useIsPresent();
  return (
    <m.nav
      id="mobile-nav"
      aria-label="Mobile navigation"
      aria-hidden={!present || undefined}
      inert={!present || undefined}
      className="absolute inset-x-0 top-full z-30 flex max-h-[calc(100dvh-160px)] origin-top-right flex-col gap-4 overflow-y-auto overscroll-contain border border-rust bg-[#100605] p-5.5 min-[1001px]:hidden"
      custom={keyboard}
      variants={menuPanelMotion(keyboard, reduced)}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {links.map(([label, href]) => (
        <m.a
          key={href}
          href={href}
          aria-label={`Demo — ${label}`}
          onClick={() => onNavigate(href)}
          className="flex min-h-11 items-center transition-colors hover:text-orange"
          custom={keyboard}
          variants={menuItemMotion(keyboard, reduced)}
        >
          Demo
        </m.a>
      ))}
    </m.nav>
  );
}
