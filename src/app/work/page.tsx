import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { WorkPageClient } from "@/components/pages/work-page-client";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Case studies showing measurable outcomes in delivery reliability, governance quality, and operational performance.",
  path: "/work",
  image: "/images/massi-hero.webp"
});

export default function WorkPage() {
  return <WorkPageClient />;
}
