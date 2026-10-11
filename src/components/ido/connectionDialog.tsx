"use client";

import { Radio, Wallet } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ConnectionDialogProps = {
  kind: "wallet" | "sonar" | null;
  onClose: () => void;
};

export function ConnectionDialog({ kind, onClose }: ConnectionDialogProps) {
  const wallet = kind === "wallet";
  const Icon = wallet ? Wallet : Radio;
  return (
    <Dialog
      open={kind !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent>
        <Icon className="text-[var(--orange)]" size={28} aria-hidden="true" />
        <DialogTitle className="pr-6 text-xl font-medium">
          {wallet ? "Connect Wallet" : "Connect Sonar"}
        </DialogTitle>
        <DialogDescription className="text-sm leading-6 text-white/60">
          {wallet
            ? "Wallet connection is a placeholder in this demo. No wallet provider is connected and no transaction will be submitted."
            : "Sonar connection is a placeholder in this demo. No account is connected and no personal information is requested."}
        </DialogDescription>
        <DialogClose asChild>
          <Button className="mt-2">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
