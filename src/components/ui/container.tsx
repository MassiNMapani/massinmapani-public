import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "article" | "main";
};

export function Container({ as = "div", className, ...props }: ContainerProps) {
  const Component = as;

  return <Component className={cn("mx-auto w-full max-w-7xl px-6", className)} {...props} />;
}
