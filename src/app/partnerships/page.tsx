import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";
import { getLogoStrip } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Partnerships",
  description:
    "Partnership formats for institutions: advisory, collaboration, and capability programs with clear outcomes and governance-first execution.",
  path: "/partnerships",
  image: "/images/massi-hero.webp"
});

export default function PartnershipsPage() {
  const logoStrip = getLogoStrip();

  return (
    <div>
      <Section size="lg" className="pt-6 md:pt-10">
        <GlassCard className="rounded-[2rem] border-border/70 bg-brand-gradient p-8 shadow-card md:p-12">
          <Badge tone="accent">{siteConfig.pageHeroes.partnerships.eyebrow}</Badge>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl text-ink md:text-6xl">
            {siteConfig.pageHeroes.partnerships.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-stone">
            {siteConfig.pageHeroes.partnerships.subtitle}
          </p>
          <form action={siteConfig.pageHeroes.partnerships.primaryCta.href} className="mt-8">
            <Button type="submit">{siteConfig.pageHeroes.partnerships.primaryCta.label}</Button>
          </form>
        </GlassCard>
      </Section>

      <Section size="md" eyebrow="Selected Partners" title={logoStrip.title}>
        <GlassCard className="rounded-2xl border-border/70 bg-surface/70">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {logoStrip.logos.map((logo) => (
              <li
                key={logo.name}
                className="flex min-h-16 items-center justify-center rounded-xl border border-border/70 bg-surface-2/70 px-3 py-4 text-center text-sm text-ink"
              >
                {logo.name}
              </li>
            ))}
          </ul>
        </GlassCard>
      </Section>

      <Section
        size="md"
        eyebrow="Engagement Models"
        title="Partnership formats with clear outcomes"
        description="Choose the model that best matches your immediate priorities and operating context."
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {siteConfig.partnerships.offers.map((offer) => (
            <GlassCard key={offer.title} className="rounded-2xl border-border/70 bg-surface/70">
              <h2 className="mb-2 text-2xl text-ink">{offer.title}</h2>
              <p className="mb-3 text-sm text-muted">
                <span className="text-ink">Who it is for:</span> {offer.idealFor}
              </p>
              <p className="mb-1 text-sm text-muted">
                <span className="text-ink">Typical duration:</span> {offer.typicalDuration}
              </p>
              <p className="mb-4 text-sm text-muted">
                <span className="text-ink">Typical outcome:</span> {offer.outcome}
              </p>
              <ul className="mb-5 space-y-2">
                {offer.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm text-stone">
                    • {bullet}
                  </li>
                ))}
              </ul>
              <form action={offer.ctaHref}>
                <Button type="submit" size="sm">
                  {offer.ctaLabel}
                </Button>
              </form>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section
        size="md"
        eyebrow="First 30 Days"
        title="What the first month typically looks like"
        description="A structured onboarding and execution model to reduce ambiguity and accelerate useful progress."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.partnerships.timeline.map((phase) => (
            <GlassCard key={phase.step} className="rounded-2xl border-border/70 bg-surface/70">
              <Badge tone="accent">{phase.step}</Badge>
              <h3 className="mt-3 text-xl text-ink">{phase.title}</h3>
              <p className="mt-2 mb-0 text-sm text-stone">{phase.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section size="md" eyebrow="FAQ" title="Partnership questions">
        <div className="space-y-3">
          {siteConfig.partnerships.faq.map((item) => (
            <GlassCard key={item.q} className="rounded-2xl border-border/70 bg-surface/70 p-0">
              <details className="group">
                <summary className="cursor-pointer list-none px-6 py-5 text-left text-base font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
                  <span>{item.q}</span>
                </summary>
                <div className="border-t border-border/70 px-6 py-4">
                  <p className="mb-0 text-sm text-stone">{item.a}</p>
                </div>
              </details>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
