import type { Metadata } from "next";
import { SpeakingPageClient } from "@/components/pages/speaking-page-client";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Speaking",
  description:
    "Speaking profile with talks, panels, and podcasts on systems leadership, governance, and resilient digital execution.",
  path: "/speaking",
  image: "/images/massi-hero.webp"
});

export default function SpeakingPage() {
  return <SpeakingPageClient />;
}
