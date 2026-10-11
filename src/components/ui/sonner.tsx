"use client";
import {
  CircleCheck,
  CircleX,
  Info,
  LoaderCircle,
  TriangleAlert,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";
export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="dark"
      position="bottom-right"
      icons={{
        success: <CircleCheck className="size-4 text-orange" />,
        info: <Info className="size-4 text-orange" />,
        warning: <TriangleAlert className="size-4" />,
        error: <CircleX className="size-4" />,
        loading: (
          <LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" />
        ),
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex w-full items-start gap-3 border border-rust bg-surface p-4 text-sm text-white shadow-lg",
          title: "font-medium",
          description: "mt-1 text-white/60",
          actionButton: "ml-auto bg-orange px-3 py-1.5 text-white",
          cancelButton: "ml-auto border border-rust px-3 py-1.5 text-white/60",
          closeButton: "border border-rust bg-surface text-white",
        },
      }}
      {...props}
    />
  );
}
