import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article";
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
  size?: "md" | "lg";
};

export function Section({
  as = "section",
  eyebrow,
  title,
  description,
  size = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  const Component = as;

  return (
    <Component className={cn(size === "lg" ? "py-14 md:py-20" : "py-10 md:py-14", className)} {...props}>
      <Container>
        {eyebrow || title || description ? (
          <header className="mb-8 max-w-3xl">
            {eyebrow ? <p className="mb-2 text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p> : null}
            {title ? <h2 className="mb-3 text-3xl text-ink md:text-4xl">{title}</h2> : null}
            {description ? <p className="text-stone">{description}</p> : null}
          </header>
        ) : null}
        {children}
      </Container>
    </Component>
  );
}
