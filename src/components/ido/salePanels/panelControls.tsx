import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdownMenu";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
export function OptionDropdown({
  label,
  options,
  value,
  displayValue,
  disabled = false,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  displayValue?: string;
  disabled?: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        disabled={disabled}
        className={
          "select-trigger [border:0] bg-transparent flex items-center justify-between gap-1.5 text-[12px] text-white py-0 px-0 min-h-[17px] [transition:background-color_0.15s,_color_0.15s,_opacity_0.15s] max-[761px]:min-h-11"
        }
        aria-label={`${label}: ${value}`}
      >
        <span>{displayValue ?? value}</span>
        <ChevronDown
          size={10}
          aria-hidden="true"
          className="transition-transform duration-180 ease-[var(--ease-out)] [[data-state=open]_&]:rotate-180 motion-reduce:transition-none"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={6}
        className="min-w-[221px]"
      >
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        {options.map((option) => (
          <DropdownMenuItem key={option} onSelect={() => onChange(option)}>
            {option}
            {option === value ? (
              <Check size={14} className={"text-orange!"} />
            ) : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export function PanelTitle({ label }: { label: string }) {
  return (
    <h2
      className={
        "[font-family:-apple-system,_BlinkMacSystemFont,_Arial,_sans-serif] text-[16px] tracking-[0.2px] leading-[19px] font-medium max-[761px]:text-[16px]"
      }
      aria-label={`LOREM IPSUM — ${label}`}
    >
      LOREM IPSUM
    </h2>
  );
}
const detailNames = [
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum dolor",
  "Lorem ipsum",
  "Lorem ipsum dolor",
  "Lorem ipsum",
  "Demo",
  "Lorem ipsum",
];
export function DetailRows({
  values,
  names = detailNames,
  displayNames = detailNames,
  displayValues,
}: {
  values: React.ReactNode[];
  names?: string[];
  displayNames?: string[];
  displayValues?: React.ReactNode[];
}) {
  return (
    <div
      className={
        "participation-rows mt-4 [&_>_div]:min-h-9.5 [&_>_div]:[border-bottom:1px_solid_#350f0f80] [&_>_div]:flex [&_>_div]:items-center [&_>_div]:justify-between [&_>_div]:gap-3 [&_>_div]:py-2 [&_>_div]:px-0 [&_>_div]:text-[14px] [&_>_div_>_span:first-child]:text-[12px] [&_>_div_>_span:first-child]:text-[#ffffff99] [&_>_div_>_span:last-child]:text-right [&_>_div_>_span:last-child]:flex [&_>_div_>_span:last-child]:items-center [&_>_div_>_span:last-child]:gap-1.5"
      }
    >
      {values.map((value, i) => (
        <div key={i}>
          <span aria-label={names[i]}>{displayNames[i] ?? "Lorem ipsum"}</span>
          <span aria-label={typeof value === "string" ? value : undefined}>
            {displayValues?.[i] ?? "[XX]"}
          </span>
        </div>
      ))}
    </div>
  );
}
const frameVariants = cva(
  "framed-button relative py-[9.5px] px-[7.605px] w-full [transition:transform_var(--duration-release)_var(--ease-out),_background-color_150ms_ease,_color_150ms_ease] before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-[7.605px] before:[background:linear-gradient(var(--orange),_var(--orange))_left_8.2px/7.605px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_left_calc(100%_-_8.2px)_/_7.605px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_right_top/1px_9.5px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_right_bottom/1px_9.5px_no-repeat] before:pointer-events-none before:left-0 after:content-[''] after:absolute after:top-0 after:bottom-0 after:w-[7.605px] after:[background:linear-gradient(var(--orange),_var(--orange))_left_8.2px/7.605px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_left_calc(100%_-_8.2px)_/_7.605px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_right_top/1px_9.5px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_right_bottom/1px_9.5px_no-repeat] after:pointer-events-none after:right-0 after:[transform:scaleX(-1)] [&_>_button]:w-full [&_>_button]:h-[59px] [&_>_button]:text-[17.383px] [&_>_button]:tracking-[-0.2183px] max-[951px]:[&_>_button]:text-[15px] max-[761px]:[&_>_button]:text-[17px] [&:has(button:active:not(:disabled))]:[transform:scale(0.97)] [&:has(button:active:not(:disabled))]:[transition-duration:var(--duration-press),_150ms,_150ms] motion-reduce:transform-none! motion-reduce:[transition:background-color_150ms_ease,_color_150ms_ease]",
  {
    variants: {
      outline: {
        true: "py-[6.5px] before:transform-none before:[background:linear-gradient(var(--orange),_var(--orange))_left_top/7.605px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_left_bottom/7.605px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_left_top/1px_9px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_left_bottom/1px_9px_no-repeat] after:[transform:scaleX(-1)] after:[background:linear-gradient(var(--orange),_var(--orange))_left_top/7.605px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_left_bottom/7.605px_1px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_left_top/1px_9px_no-repeat,_linear-gradient(var(--orange),_var(--orange))_left_bottom/1px_9px_no-repeat]",
        false: "",
      },
    },
  },
);

export function FrameButton({
  children,
  label,
  onClick,
  disabled = false,
  outline = false,
}: {
  children?: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}) {
  return (
    <div className={cn(frameVariants({ outline }))}>
      <Button
        type="button"
        variant={outline ? "outline" : "default"}
        aria-label={children ? label : `Lorem ipsum — ${label}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children ?? "Lorem ipsum"}
      </Button>
    </div>
  );
}
