"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: Record<string, unknown>) => void;
  }
}

export function useAnalyticsPageview(pathname: string) {
  useEffect(() => {
    if (!pathname) return;

    const gaId = process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

    if (typeof window !== "undefined" && gaId && typeof window.gtag === "function") {
      window.gtag("config", gaId, { page_path: pathname });
    }

    if (
      typeof window !== "undefined" &&
      plausibleDomain &&
      typeof window.plausible === "function"
    ) {
      window.plausible("pageview", { props: { path: pathname, domain: plausibleDomain } });
    }
  }, [pathname]);
}
