import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SurfaceElement = "section" | "div" | "article" | "aside";

type SurfaceProps = HTMLAttributes<HTMLElement> & {
  as?: SurfaceElement;
  padded?: boolean;
};

export function Surface({ as = "section", padded = true, className, ...props }: SurfaceProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        "rounded-3xl border border-border/70 bg-surface/75",
        padded && "p-6 md:p-8",
        className
      )}
      {...props}
    />
  );
}
