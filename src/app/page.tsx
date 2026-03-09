import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { ImpactStrip } from "@/components/impact-strip";
import { ThesisBlock } from "@/components/thesis-block";
import { Testimonials } from "@/components/blocks/testimonials";

export default function HomePage() {
  const featuredProjects = siteConfig.work.projects.slice(0, 3);
  const homeHero = siteConfig.pageHeroes.home;

  return (
    <div>
      <Section size="lg" className="pt-8 md:pt-12">
        <GlassCard className="rounded-[2rem] border-border/70 bg-brand-gradient p-8 shadow-card md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_420px]">
            <div>
              <Badge tone="accent">{homeHero.eyebrow}</Badge>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl text-ink md:text-6xl">
                {homeHero.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-stone">
                {homeHero.subtitle}
              </p>
              <p className="mt-3 max-w-3xl text-sm text-stone">{homeHero.proof}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <form action={homeHero.primaryCta.href}>
                  <Button type="submit">{homeHero.primaryCta.label}</Button>
                </form>
                <form action={homeHero.secondaryCta.href}>
                  <Button type="submit" variant="secondary">
                    {homeHero.secondaryCta.label}
                  </Button>
                </form>
              </div>
            </div>

            <div className="justify-self-stretch lg:justify-self-end">
              <div className="overflow-hidden rounded-2xl border border-border/70 shadow-card-sm">
                <Image
                  src={homeHero.image.src}
                  alt={homeHero.image.alt}
                  width={420}
                  height={560}
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </GlassCard>
      </Section>

      <Section size="md" className="pt-0">
        <ImpactStrip />
      </Section>

      <Section
        size="md"
        eyebrow="Areas of Focus"
        title="Build stronger digital systems that scale"
        description="I help institutions design reliable digital systems, improve how teams deliver technology, and introduce governance that keeps operations running smoothly."
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <GlassCard key={service.title} className="rounded-2xl border-border/70 bg-surface/70">
              <h3 className="text-2xl text-ink">{service.title}</h3>
              <p className="text-stone">{service.outcome}</p>
              <p className="mt-3 mb-3 text-sm text-muted">
                <span className="text-ink">Institutional context:</span> {service.whoFor}
              </p>
              <ul className="space-y-2">
                {service.bullets.slice(0, 2).map((bullet) => (
                  <li key={bullet} className="text-sm text-stone">
                    • {bullet}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section
        size="md"
        eyebrow="Featured Work"
        title="Selected case studies"
        description="Programs delivering measurable improvements in engineering reliability, operational efficiency, and enterprise systems delivery."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <GlassCard key={project.slug} className="rounded-2xl border-border/70 bg-surface/70">
              <h3 className="text-2xl text-ink">{project.title}</h3>
              <p className="text-stone">{project.summary}</p>
              <div className="mt-4 flex gap-2">
                {project.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <Link
                href={`/work/${project.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm text-accent transition hover:text-accent-2"
              >
                View case study <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section size="md" className="pt-0">
        <Testimonials />
      </Section>

      <Section size="md" className="pt-0">
        <ThesisBlock />
      </Section>

      <Section size="md">
        <GlassCard className="grid grid-cols-1 items-center gap-5 rounded-3xl border-border/70 bg-surface/70 p-8 md:grid-cols-[1fr_auto]">
          <div>
            <Badge tone="accent">Let’s work together</Badge>
            <h2 className="mt-3 mb-2 font-serif text-3xl text-ink">Ready to strengthen delivery and trust?</h2>
            <p className="mb-0 text-stone">
              Share your context and goals. We can define the right path from strategy to execution.
            </p>
          </div>
          <form action={siteConfig.primaryCta.href}>
            <Button type="submit" size="lg">
              {siteConfig.primaryCta.label}
            </Button>
          </form>
        </GlassCard>
      </Section>
    </div>
  );
}
