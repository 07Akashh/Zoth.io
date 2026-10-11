import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-none text-sm font-medium transition-[transform,background-color,color] duration-100 ease-[var(--ease-out)] active:scale-[0.97] active:duration-160 motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4509] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-[#ff4509] bg-[#ff4509] text-white hover:bg-[#e23b06]",
        outline:
          "border border-[#ff4509] bg-transparent text-white hover:bg-[#321007]",
        ghost: "bg-transparent text-white/60 hover:text-white",
      },
      size: { default: "min-h-11 px-6 py-2", icon: "size-9 p-2" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
