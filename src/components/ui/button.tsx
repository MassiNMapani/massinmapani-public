import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
          variant === "primary" && "bg-accent text-text-primary hover:bg-accent/90",
          variant === "secondary" &&
            "border border-border bg-surface/75 text-text-primary hover:bg-surface",
          variant === "ghost" && "text-text-secondary hover:text-text-primary hover:bg-card/70",
          size === "sm" && "px-3 py-2 text-xs",
          size === "md" && "px-5 py-3 text-sm",
          size === "lg" && "px-6 py-3 text-base",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
