"use client";

import { usePathname } from "next/navigation";
import { useAnalyticsPageview } from "@/lib/analytics";

export function AnalyticsProvider() {
  const pathname = usePathname();
  useAnalyticsPageview(pathname);

  return null;
}
