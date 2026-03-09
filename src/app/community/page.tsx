import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Community",
  description:
    "Community impact through mentorship, leadership pathways, and practical education for emerging technical talent.",
  path: "/community",
  image: "/images/massi-hero.webp"
});

export default function CommunityPage() {
  return (
    <div className="space-y-10">
      <SectionHeading eyebrow="Community / Impact" title="Building pathways and visibility with measurable outcomes" description={siteConfig.community.intro} />

      <section className="grid grid-cols-12 gap-4">
        {siteConfig.socialStats.map((stat) => (
          <article key={stat.platform} className="col-span-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:col-span-3 lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.16em] text-stone/80">{stat.label}</p>
            <p className="mt-2 font-serif text-2xl text-ink">{stat.value}</p>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-12 gap-6">
        <article className="col-span-12 rounded-3xl border border-white/10 p-6 md:col-span-6">
          <h2 className="font-serif text-2xl text-ink">Mentorship / Talent Pipeline</h2>
          <p className="mt-3 text-stone">{siteConfig.community.mentorship}</p>
        </article>
        <article className="col-span-12 rounded-3xl border border-white/10 p-6 md:col-span-6">
          <h2 className="font-serif text-2xl text-ink">Impact Highlights</h2>
          <ul className="mt-3 space-y-2 text-stone">
            {siteConfig.community.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
