import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";

export function OptionDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Dropdown.Root modal={false}>
      <Dropdown.Trigger
        className="select-trigger"
        aria-label={`${label}: ${value}`}
      >
        <span>{value}</span>
        <ChevronDown size={10} />
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content
          align="start"
          sideOffset={6}
          className="menu-surface select-dropdown"
        >
          <Dropdown.Label className="menu-label">{label}</Dropdown.Label>
          {options.map((option) => (
            <Dropdown.Item
              key={option}
              className="menu-item"
              onSelect={() => onChange(option)}
            >
              {option}
              {option === value ? <Check size={14} className="orange" /> : null}
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
}

export function PanelTitle({ label }: { label: string }) {
  return (
    <h2 className="panel-title" aria-label={`LOREM IPSUM — ${label}`}>
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
}: {
  values: React.ReactNode[];
  names?: string[];
}) {
  return (
    <div className="participation-rows">
      {values.map((value, i) => (
        <div key={i}>
          <span aria-label={names[i]}>{detailNames[i] ?? "Lorem ipsum"}</span>
          <span aria-label={typeof value === "string" ? value : undefined}>
            [XX]
          </span>
        </div>
      ))}
    </div>
  );
}
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
    <div className={`framed-button ${outline ? "framed-button-outline" : ""}`}>
      <Button
        type="button"
        variant={outline ? "outline" : "default"}
        className={outline ? "button-outline" : "button-primary"}
        aria-label={children ? label : `Lorem ipsum — ${label}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children ?? "Lorem ipsum"}
      </Button>
    </div>
  );
}
