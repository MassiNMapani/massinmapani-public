import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "target" | "rel">;

export function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
  target = "_blank",
  rel,
  ...props
}: ExternalLinkProps) {
  const computedRel = target === "_blank" ? "noopener noreferrer" : rel;

  return (
    <a
      href={href}
      target={target}
      rel={computedRel}
      aria-label={ariaLabel}
      className={cn(className)}
      {...props}
    >
      {children}
    </a>
  );
}
