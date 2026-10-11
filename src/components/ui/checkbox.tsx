"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Checkbox({
  className,
  ...props
}: ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "relative grid size-3.5 shrink-0 touch-manipulation place-items-center border border-white/80 bg-transparent outline-none after:absolute after:left-1/2 after:top-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-orange data-[state=checked]:bg-orange",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="pointer-events-none grid place-items-center">
        <img
          src="/icons/quoteCheck.svg"
          width={10}
          height={10}
          alt=""
          aria-hidden="true"
          draggable={false}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
