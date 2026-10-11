"use client";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import {
  AnimatePresence,
  m,
  LazyMotion,
  domAnimation,
  useIsPresent,
  useReducedMotion,
} from "framer-motion";
import {
  createContext,
  useContext,
  useState,
  type ComponentProps,
} from "react";
import { cn } from "@/lib/utils";
import { menuItemMotion, menuPanelMotion } from "@/lib/motion";
const MenuContext = createContext({
  open: false,
  keyboard: false,
  setKeyboard: (_value: boolean) => {},
});
export function DropdownMenu({
  children,
  onOpenChange,
  open: controlledOpen,
  defaultOpen = false,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Root>) {
  const [localOpen, setOpen] = useState(defaultOpen);
  const open = controlledOpen ?? localOpen;
  const [keyboard, setKeyboard] = useState(false);
  return (
    <LazyMotion features={domAnimation}>
      <MenuContext.Provider value={{ open, keyboard, setKeyboard }}>
        <DropdownPrimitive.Root
          {...props}
          open={open}
          onOpenChange={(value) => {
            setOpen(value);
            onOpenChange?.(value);
          }}
        >
          {children}
        </DropdownPrimitive.Root>
      </MenuContext.Provider>
    </LazyMotion>
  );
}
export function DropdownMenuTrigger({
  onPointerDownCapture,
  onKeyDownCapture,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Trigger>) {
  const { setKeyboard } = useContext(MenuContext);
  return (
    <DropdownPrimitive.Trigger
      {...props}
      onPointerDownCapture={(event) => {
        setKeyboard(false);
        onPointerDownCapture?.(event);
      }}
      onKeyDownCapture={(event) => {
        setKeyboard(true);
        onKeyDownCapture?.(event);
      }}
    />
  );
}
export function DropdownMenuContent(
  props: ComponentProps<typeof DropdownPrimitive.Content>,
) {
  const { open, keyboard } = useContext(MenuContext);
  return (
    <DropdownPrimitive.Portal forceMount>
      <AnimatePresence initial={false} custom={keyboard}>
        {open ? <MenuContentPresence key="menu" {...props} /> : null}
      </AnimatePresence>
    </DropdownPrimitive.Portal>
  );
}
function MenuContentPresence({
  children,
  className,
  onKeyDownCapture,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Content>) {
  const { keyboard, setKeyboard } = useContext(MenuContext);
  const reduced = useReducedMotion();
  const present = useIsPresent();
  return (
    <DropdownPrimitive.Content
      {...props}
      forceMount
      asChild
      onKeyDownCapture={(event) => {
        setKeyboard(true);
        onKeyDownCapture?.(event);
      }}
    >
      <m.div
        className={cn(
          "z-100 min-w-60 max-w-[calc(100vw-32px)] origin-[var(--radix-dropdown-menu-content-transform-origin)] overflow-y-auto overscroll-contain border border-orange bg-surface p-0 shadow-[0_0_63.2px_#ff450969] [max-height:var(--radix-dropdown-menu-content-available-height,calc(100dvh-32px))] max-[511px]:min-w-55 [&_img]:max-h-5 [&_img]:max-w-5",
          className,
        )}
        inert={!present || undefined}
        aria-hidden={!present || undefined}
        style={{ pointerEvents: present ? undefined : "none" }}
        custom={keyboard}
        variants={menuPanelMotion(keyboard, Boolean(reduced))}
        initial="closed"
        animate="open"
        exit="closed"
      >
        {children}
      </m.div>
    </DropdownPrimitive.Content>
  );
}
export function DropdownMenuItem({
  children,
  className,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Item>) {
  const { keyboard } = useContext(MenuContext);
  const reduced = useReducedMotion();
  return (
    <DropdownPrimitive.Item {...props} asChild>
      <m.div
        className={cn(
          "flex min-h-[45px] cursor-pointer items-center justify-between gap-4 px-4 py-2.5 text-sm outline-none transition-colors duration-150 data-[highlighted]:bg-[#25100a] [&>span:last-child]:text-xs [&>span:last-child]:text-orange",
          className,
        )}
        custom={keyboard}
        variants={menuItemMotion(keyboard, Boolean(reduced))}
      >
        {children}
      </m.div>
    </DropdownPrimitive.Item>
  );
}
export function DropdownMenuLabel({
  className,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Label>) {
  return (
    <DropdownPrimitive.Label
      {...props}
      className={cn(
        "flex items-center gap-2 px-4 pt-3 pb-1.5 text-[10px] tracking-[1.2px] text-white/80 [&_img]:max-h-4 [&_img]:max-w-4",
        className,
      )}
    />
  );
}
export function DropdownMenuSeparator(
  props: ComponentProps<typeof DropdownPrimitive.Separator>,
) {
  return (
    <DropdownPrimitive.Separator
      {...props}
      className={cn("h-px bg-white/10", props.className)}
    />
  );
}
