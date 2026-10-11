"use client";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { Menu, RotateCcw, X } from "lucide-react";
import { useRef, useState } from "react";
import type { SaleFlowAction, SaleFlowState } from "@/lib/saleFlow";
import { DesignAsset } from "./designAssets";

const links = [
  ["Overview", "#top"],
  ["Token sale", "#participate"],
  ["Timeline", "#timeline"],
  ["Tokenomics", "#sale-details"],
] as const;

function Wordmark() {
  return (
    <a className="wordmark" href="#top" aria-label="Demo — Back to top">
      <span className="wordmark-symbol">
        <DesignAsset file="36e29.svg" />
      </span>
      <span>Demo</span>
    </a>
  );
}
export function Navbar({
  flow,
  dispatch,
  onComparison,
  onAllocations,
}: {
  flow: SaleFlowState;
  dispatch: React.Dispatch<SaleFlowAction>;
  onComparison: () => void;
  onAllocations: () => void;
}) {
  const [mobile, setMobile] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const navigate = (href: string) => {
    setMobile(false);
    if (href === "#top") dispatch({ type: "RESET" });
  };
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape" && mobile) {
          setMobile(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="container-main header-inner">
        <Wordmark />
        <nav className="nav-center" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              onClick={() => navigate(href)}
            >
              Demo
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <Dropdown.Root
            modal={false}
            onOpenChange={(open) => {
              if (open) setMobile(false);
            }}
          >
            <Dropdown.Trigger
              className="header-outline"
              aria-label="Open explore menu"
            >
              Lorem ipsum
            </Dropdown.Trigger>
            <Dropdown.Portal>
              <Dropdown.Content
                className="menu-surface explore-menu"
                align="end"
                sideOffset={10}
                collisionPadding={18}
              >
                <Dropdown.Label className="menu-label">
                  LOREM IPSUM
                </Dropdown.Label>
                <Dropdown.Item
                  className="menu-item"
                  aria-label="Compare payment routes"
                  onSelect={onComparison}
                >
                  {" "}
                  <span className="menu-item-copy">
                    Demo<small>Lorem ipsum</small>
                  </span>
                </Dropdown.Item>
                <Dropdown.Separator className="menu-separator" />
                <Dropdown.Item
                  className="menu-item"
                  aria-label="View allocations"
                  onSelect={onAllocations}
                >
                  Lorem ipsum
                </Dropdown.Item>
                <Dropdown.Item
                  className="menu-item"
                  aria-label="View timeline"
                  onSelect={() =>
                    document.getElementById("timeline")?.scrollIntoView()
                  }
                >
                  Lorem ipsum
                </Dropdown.Item>
                <Dropdown.Item
                  className="menu-item orange"
                  aria-label="Return to overview"
                  onSelect={() => dispatch({ type: "RESET" })}
                >
                  Lorem ipsum
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
          <Dropdown.Root
            modal={false}
            onOpenChange={(open) => {
              if (open) setMobile(false);
            }}
          >
            <Dropdown.Trigger
              className="header-filled"
              aria-label={`Network: ${flow.network}. Open account menu`}
            >
              Lorem ipsum
            </Dropdown.Trigger>
            <Dropdown.Portal>
              <Dropdown.Content
                className="menu-surface account-menu"
                align="end"
                sideOffset={10}
                collisionPadding={18}
              >
                <Dropdown.Label className="menu-label">
                  <DesignAsset file="297b9.svg" /> DEMO
                </Dropdown.Label>
                <Dropdown.Item
                  className="menu-item"
                  aria-label="Copy demo sale ID"
                  onSelect={() =>
                    navigator.clipboard
                      ?.writeText("demo-ido-001")
                      .catch(() => {})
                  }
                >
                  [XX]
                  <DesignAsset file="97fd2.svg" />
                </Dropdown.Item>
                <Dropdown.Separator className="menu-separator" />
                <Dropdown.Item
                  className="menu-item"
                  aria-label="View allocations"
                  onSelect={onAllocations}
                >
                  <DesignAsset file="297b9.svg" />
                  Lorem ipsum
                </Dropdown.Item>
                <Dropdown.Item
                  className="menu-item orange"
                  aria-label="Return to overview"
                  onSelect={() => dispatch({ type: "RESET" })}
                >
                  <RotateCcw size={16} aria-hidden="true" />
                  Lorem ipsum
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
        </div>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="mobile-nav"
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        data-state={mobile ? "open" : "closed"}
        hidden={!mobile}
        inert={!mobile}
      >
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            onClick={() => navigate(href)}
          >
            Demo
          </a>
        ))}
      </nav>
    </header>
  );
}
