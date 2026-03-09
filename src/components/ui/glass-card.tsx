import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/80 bg-card/72 p-6 shadow-soft backdrop-blur-[2px]",
        className
      )}
      {...props}
    />
  );
}
