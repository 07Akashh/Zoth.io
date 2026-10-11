"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdownMenu";
import { ChevronDown, Menu, RotateCcw, Wallet, X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import type { SaleFlowAction, SaleFlowState } from "@/lib/saleFlow";
import { DesignAsset } from "./designAssets";
import { MobileNavigation } from "./mobileNavigation";
const links = [
  ["Overview", "#top"],
  ["Token sale", "#participate"],
  ["Timeline", "#timeline"],
  ["Tokenomics", "#sale-details"],
] as const;
function Wordmark() {
  return (
    <a
      className={
        "w-57 flex items-center gap-[7.658px] [font-family:Inter,_Arial,_sans-serif] text-[25.808px] font-semibold max-[1151px]:w-auto max-[761px]:text-[25px] max-[511px]:[grid-column:1] max-[511px]:[grid-row:1]"
      }
      href="#top"
      aria-label="Demo — Back to top"
    >
      <span
        className={
          "w-[30.015px] h-[30.015px] bg-white rounded-full flex items-center justify-center"
        }
      >
        <DesignAsset src="/icons/brandMark.svg" />
      </span>
      <span>Demo</span>
    </a>
  );
}
export function Navbar({
  flow,
  saleId,
  keyboard,
  dispatch,
  onComparison,
  onAllocations,
}: {
  flow: SaleFlowState;
  saleId: string;
  keyboard: boolean;
  dispatch: React.Dispatch<SaleFlowAction>;
  onComparison: () => void;
  onAllocations: () => void;
}) {
  const [mobile, setMobile] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const copySaleId = async () => {
    try {
      await navigator.clipboard.writeText(saleId);
      toast.success("Sale ID copied");
    } catch {
      toast.error("Couldn't copy the sale ID. Please try again.");
    }
  };
  const navigate = (href: string) => {
    setMobile(false);
    if (href === "#top") dispatch({ type: "RESET" });
  };
  return (
    <header
      className={"relative z-[20]"}
      onKeyDown={(e) => {
        if (e.key === "Escape" && mobile) {
          setMobile(false);
          toggle.current?.focus();
        }
      }}
    >
      <div
        className={
          "w-[min(var(--content),_calc(100%_-_64px))] mx-auto max-[761px]:w-[calc(100%_-_36px)] h-30.5 flex items-center justify-between gap-6 max-[1151px]:gap-5 max-[761px]:h-[85px] max-[511px]:h-auto max-[511px]:min-h-31.5 max-[511px]:grid max-[511px]:grid-cols-[1fr_auto] max-[511px]:gap-4 max-[511px]:py-4 max-[1001px]:gap-4"
        }
      >
        <Wordmark />
        <nav
          className={
            "relative w-118.5 h-[45.939px] flex items-center justify-center gap-[60.23px] shrink-0 [background:linear-gradient(_transparent_2.81px,_#23120c_2.81px,_#23120c_calc(100%_-_2.675px),_transparent_calc(100%_-_2.675px)_)] before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-[5.449px] before:[background:linear-gradient(var(--orange),_var(--orange))_top_left/5.449px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_bottom_left/5.449px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_top_left/1px_6.66px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_bottom_left/1px_6.66px_no-repeat] before:left-0 after:content-[''] after:absolute after:top-0 after:bottom-0 after:w-[5.449px] after:[background:linear-gradient(var(--orange),_var(--orange))_top_left/5.449px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_bottom_left/5.449px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_top_left/1px_6.66px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_bottom_left/1px_6.66px_no-repeat] after:right-0 after:[transform:scaleX(-1)] [&_>_a]:text-[13.968px] [&_>_a]:tracking-[-0.2794px] [&_>_a]:opacity-[0.7] [&_>_a:hover]:opacity-[1] max-[1151px]:w-82.5 max-[1151px]:gap-7.5 max-[951px]:hidden max-[761px]:hidden max-[1001px]:hidden"
          }
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              aria-label={`Demo — ${label}`}
              onClick={() => navigate(href)}
            >
              Demo
            </a>
          ))}
        </nav>
        <div
          className={
            'flex gap-4 [&_[data-state="open"]_>_.header-menu-icon]:[transform:rotate(180deg)] max-[951px]:flex max-[951px]:ml-auto max-[511px]:[grid-column:1/-1] max-[511px]:[grid-row:2] max-[511px]:grid max-[511px]:grid-cols-[1fr_1fr] max-[511px]:w-full max-[511px]:gap-3 max-[511px]:my-0 max-[511px]:mx-0 max-[1001px]:ml-auto'
          }
        >
          <DropdownMenu
            modal={false}
            onOpenChange={(open) => {
              if (open) setMobile(false);
            }}
          >
            <DropdownMenuTrigger
              className={
                "h-[43px] flex items-center justify-center gap-3 text-[16px] tracking-[-0.1563px] whitespace-nowrap border border-[var(--orange)] py-1.5 px-4.5 bg-[#220800] min-w-[181px] [transition:transform_var(--duration-release)_var(--ease-out),_background-color_150ms_ease,_color_150ms_ease] hover:bg-[#361109] max-[1151px]:min-w-30 max-[1151px]:text-[14px] max-[1151px]:px-2.5 max-[511px]:min-w-0 max-[511px]:w-full max-[511px]:h-10 max-[511px]:min-h-11 [@media(hover:_none)]:hover:bg-[#220800] active:[transform:scale(0.97)] active:[transition-duration:var(--duration-press),_150ms,_150ms] motion-reduce:transform-none! motion-reduce:[transition:background-color_150ms_ease,_color_150ms_ease]"
              }
              aria-label="Lorem ipsum — Open explore menu"
            >
              <span>Lorem ipsum</span>
              <ChevronDown
                className="shrink-0 transition-transform duration-180 ease-[var(--ease-out)] [[data-state=open]>&]:rotate-180 motion-reduce:transition-none"
                size={18}
                aria-hidden="true"
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={10}
              collisionPadding={18}
            >
              <DropdownMenuLabel>LOREM IPSUM</DropdownMenuLabel>
              <DropdownMenuItem
                aria-label="Compare payment routes"
                onSelect={onComparison}
              >
                {" "}
                <span className="flex flex-col gap-0 text-sm! text-white! [&_small]:text-xs [&_small]:leading-[13.75px] [&_small]:text-orange [&_small]:opacity-80">
                  Demo<small>Lorem ipsum</small>
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                aria-label="View allocations"
                onSelect={onAllocations}
              >
                Lorem ipsum
              </DropdownMenuItem>
              <DropdownMenuItem
                aria-label="View timeline"
                onSelect={() =>
                  document.getElementById("timeline")?.scrollIntoView()
                }
              >
                Lorem ipsum
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"text-orange"}
                aria-label="Return to overview"
                onSelect={() => dispatch({ type: "RESET" })}
              >
                Lorem ipsum
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu
            modal={false}
            onOpenChange={(open) => {
              if (open) setMobile(false);
            }}
          >
            <DropdownMenuTrigger
              className={
                "h-[43px] flex items-center justify-center gap-3 text-[16px] tracking-[-0.1563px] whitespace-nowrap border border-[var(--orange)] py-1.5 px-4.5 bg-orange min-w-41 [transition:transform_var(--duration-release)_var(--ease-out),_background-color_150ms_ease,_color_150ms_ease] hover:[background:var(--orange-hover)] max-[1151px]:min-w-30 max-[1151px]:text-[14px] max-[1151px]:px-2.5 max-[511px]:min-w-0 max-[511px]:w-full max-[511px]:h-10 max-[511px]:min-h-11 [@media(hover:_none)]:hover:bg-orange active:[transform:scale(0.97)] active:[transition-duration:var(--duration-press),_150ms,_150ms] motion-reduce:transform-none! motion-reduce:[transition:background-color_150ms_ease,_color_150ms_ease]"
              }
              aria-label={`Lorem ipsum — Network: ${flow.network}. Open account menu`}
            >
              <span>Lorem ipsum</span>
              <ChevronDown
                className="shrink-0 transition-transform duration-180 ease-[var(--ease-out)] [[data-state=open]>&]:rotate-180 motion-reduce:transition-none"
                size={18}
                aria-hidden="true"
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="[&_[role=menuitem]]:justify-start [&_[role=menuitem]]:gap-2 [&_[role=menuitem]:first-of-type]:justify-between"
              align="end"
              sideOffset={10}
              collisionPadding={18}
            >
              <DropdownMenuLabel>
                <Wallet size={16} aria-hidden="true" /> DEMO
              </DropdownMenuLabel>
              <DropdownMenuItem
                aria-label="Copy demo sale ID"
                onSelect={() => void copySaleId()}
              >
                [XX]
                <DesignAsset src="/icons/copy.svg" />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                aria-label="View allocations"
                onSelect={onAllocations}
              >
                <Wallet size={16} aria-hidden="true" />
                Lorem ipsum
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"text-orange"}
                aria-label="Return to overview"
                onSelect={() => dispatch({ type: "RESET" })}
              >
                <RotateCcw size={16} aria-hidden="true" />
                Lorem ipsum
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <button
          ref={toggle}
          className={
            "hidden bg-transparent border border-[var(--rust)] py-[9px] px-[9px] [transition:transform_var(--duration-release)_var(--ease-out),_background-color_150ms_ease,_color_150ms_ease] max-[951px]:flex max-[511px]:[grid-column:2] max-[511px]:[grid-row:1] max-[511px]:min-h-11 active:[transform:scale(0.97)] active:[transition-duration:var(--duration-press),_150ms,_150ms] max-[1001px]:flex motion-reduce:transform-none! motion-reduce:[transition:background-color_150ms_ease,_color_150ms_ease]"
          }
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="mobile-nav"
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <MobileNavigation
        open={mobile}
        keyboard={keyboard}
        links={links}
        onNavigate={navigate}
      />
    </header>
  );
}
