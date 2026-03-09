import { promises as fs } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";
import { ExternalLink } from "@/components/external-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Press",
  description:
    "Press resources, headshots, speaking topics, and official links for media, interviews, and event organizers.",
  path: "/press",
  image: "/images/massi-hero.webp"
});

async function isPlaceholderPressKit(pdfPath: string) {
  const localPath = path.join(process.cwd(), "public", pdfPath.replace(/^\//, ""));

  try {
    const stats = await fs.stat(localPath);
    return stats.size < 10_000;
  } catch {
    return true;
  }
}

export default async function PressPage() {
  const showPlaceholderLabel = await isPlaceholderPressKit(siteConfig.pressKit.pdfPath);

  return (
    <div>
      <Section size="lg" className="pt-6 md:pt-10">
        <GlassCard className="rounded-[2rem] border-border/70 bg-brand-gradient p-8 shadow-card md:p-12">
          <Badge tone="accent">{siteConfig.pageHeroes.press.eyebrow}</Badge>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl text-ink md:text-6xl">
            {siteConfig.pageHeroes.press.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-stone">
            {siteConfig.pageHeroes.press.subtitle}
          </p>
          <form action={siteConfig.pageHeroes.press.primaryCta.href} className="mt-8 inline-flex">
            <Button type="submit">{siteConfig.pageHeroes.press.primaryCta.label}</Button>
          </form>
          {showPlaceholderLabel ? (
            <p className="mt-2 text-xs text-muted">Press kit (PDF) — placeholder</p>
          ) : null}
        </GlassCard>
      </Section>

      <Section size="md" eyebrow="Short Bio" title={`About ${siteConfig.name}`}>
        <GlassCard className="rounded-2xl border-border/70 bg-surface/70">
          <p className="text-stone">
            Massi Mapani is a Software Engineer and technology consultant focused on resilient digital systems,
            compliance-aware execution, and institutional technology strategy across Africa and beyond.
          </p>
          <p className="mb-0 text-stone">
            Her work blends engineering rigor with leadership practice to help organizations deliver measurable,
            high-trust outcomes in complex environments.
          </p>
        </GlassCard>
      </Section>

      <Section size="md" eyebrow="Headshots" title="Media images">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <GlassCard className="rounded-2xl border-border/70 bg-surface/70 p-0">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/massi-portrait.webp"
                alt="Massi Mapani headshot"
                width={720}
                height={1080}
                className="h-[360px] w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={70}
              />
            </div>
          </GlassCard>
          <GlassCard className="rounded-2xl border-border/70 bg-surface/70 p-0">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/placeholder-portrait-2.svg"
                alt="Secondary headshot placeholder"
                width={720}
                height={1080}
                className="h-[360px] w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section size="md" eyebrow="Speaking Topics" title="Topic coverage for events">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {siteConfig.speaking.topics.map((topic) => {
            const topicBullets = "bullets" in topic ? topic.bullets : undefined;

            return (
              <GlassCard key={topic.title} className="rounded-2xl border-border/70 bg-surface/70">
                <h2 className="mb-3 text-2xl text-ink">{topic.title}</h2>
                {topicBullets?.length ? (
                  <ul className="space-y-2">
                    {topicBullets.map((bullet) => (
                      <li key={bullet} className="text-sm text-stone">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-0 text-sm text-stone">{topic.outcome}</p>
                )}
              </GlassCard>
            );
          })}
        </div>
      </Section>

      <Section size="md" eyebrow="Links" title="Official links">
        <GlassCard className="rounded-2xl border-border/70 bg-surface/70">
          <ul className="space-y-3">
            <li>
              <ExternalLink
                href={siteConfig.domain}
                className="text-sm text-accent transition hover:text-accent-2"
              >
                Official website
              </ExternalLink>
            </li>
            {siteConfig.socialLinks.map((social) => (
              <li key={social.platform}>
                <ExternalLink
                  href={social.url}
                  className="text-sm text-stone transition hover:text-ink"
                >
                  {social.platform} · {social.handle}
                </ExternalLink>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link href="/contact?reason=speaking" className="text-sm text-accent transition hover:text-accent-2">
              Media and speaking inquiries
            </Link>
          </div>
        </GlassCard>
      </Section>
    </div>
  );
}
