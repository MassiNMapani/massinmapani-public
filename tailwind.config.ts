import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-2": "hsl(var(--surface-2) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-2": "hsl(var(--accent-2) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        focus: "hsl(var(--focus-ring) / <alpha-value>)",

        // Backward-compatible semantic aliases used in current pages/components.
        canvas: "hsl(var(--color-canvas) / <alpha-value>)",
        panel: "hsl(var(--color-panel) / <alpha-value>)",
        ink: "hsl(var(--color-ink) / <alpha-value>)",
        stone: "hsl(var(--color-stone) / <alpha-value>)",
        rose: "hsl(var(--color-rose) / <alpha-value>)",
        card: "hsl(var(--surface-2) / <alpha-value>)",
        "text-primary": "hsl(var(--text) / <alpha-value>)",
        "text-secondary": "hsl(var(--muted) / <alpha-value>)",
        "text-muted": "hsl(var(--muted-2) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "ui-sans-serif", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        "card-sm": "0 6px 24px hsl(256 35% 3% / 0.25)",
        card: "0 12px 36px hsl(256 35% 3% / 0.35), 0 1px 0 hsl(var(--border) / 0.4) inset",
        "card-lg": "0 18px 48px hsl(256 35% 2% / 0.45), 0 1px 0 hsl(var(--border) / 0.5) inset",
        soft: "0 24px 56px rgba(0,0,0,0.25)"
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, hsl(var(--gradient-start) / 0.12), hsl(var(--gradient-mid) / 0.08) 48%, hsl(var(--gradient-end) / 0.12))"
      }
    }
  },
  plugins: []
};

export default config;
