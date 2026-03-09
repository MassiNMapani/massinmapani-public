import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "accent";
};

export function Badge({ tone = "default", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.14em]",
        tone === "default" && "border-border/80 bg-surface/70 text-text-secondary",
        tone === "accent" && "border-accent/40 bg-accent/12 text-text-primary",
        className
      )}
      {...props}
    />
  );
}
