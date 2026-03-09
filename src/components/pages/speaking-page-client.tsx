"use client";

import { useMemo, useState } from "react";
import { CalendarDays, ExternalLink as ExternalLinkIcon, Mic2 } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { getTestimonials } from "@/lib/content";
import { ExternalLink } from "@/components/external-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";

const typeFilters = ["All", "Talk", "Panel", "Podcast", "Workshop"] as const;

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

export function SpeakingPageClient() {
  const testimonials = getTestimonials();
  const [activeType, setActiveType] = useState<(typeof typeFilters)[number]>("All");
  const [query, setQuery] = useState("");

  const sortedAllAppearances = useMemo(() => {
    return [...siteConfig.speaking.all].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const filteredAppearances = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return sortedAllAppearances.filter((item) => {
      const typeMatch = activeType === "All" ? true : item.type === activeType;
      const queryMatch =
        normalizedQuery.length === 0
          ? true
          : item.title.toLowerCase().includes(normalizedQuery) ||
            item.event.toLowerCase().includes(normalizedQuery);

      return typeMatch && queryMatch;
    });
  }, [activeType, query, sortedAllAppearances]);

  return (
    <div>
      <Section size="lg" className="pt-6 md:pt-10">
        <GlassCard className="rounded-[2rem] border-border/70 bg-brand-gradient p-8 shadow-card md:p-12">
          <Badge tone="accent">{siteConfig.pageHeroes.speaking.eyebrow}</Badge>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl text-ink md:text-6xl">
            {siteConfig.pageHeroes.speaking.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-stone">{siteConfig.pageHeroes.speaking.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <form action={siteConfig.pageHeroes.speaking.primaryCta.href}>
              <Button type="submit">{siteConfig.pageHeroes.speaking.primaryCta.label}</Button>
            </form>
            {siteConfig.pressKit.enabled ? (
              <ExternalLink
                href={siteConfig.pageHeroes.speaking.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface/75 px-5 py-3 text-sm font-medium text-ink transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              >
                {siteConfig.pageHeroes.speaking.secondaryCta.label}
              </ExternalLink>
            ) : null}
          </div>
        </GlassCard>
      </Section>

      <Section
        size="md"
        eyebrow="Featured Appearances"
        title="Selected speaking highlights"
        description="Recent and notable sessions across industry and community forums."
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {siteConfig.speaking.featured.map((item) => {
            const itemLink = "link" in item ? item.link : undefined;

            return (
              <GlassCard
                key={`${item.event}-${item.date}-${item.title}`}
                className="rounded-2xl border-border/70 bg-surface/70"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Badge tone="accent">{item.type}</Badge>
                </div>
                <h3 className="text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-stone">
                  <Mic2 className="h-4 w-4" />
                  {item.event}
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-stone">
                  <CalendarDays className="h-4 w-4" />
                  {formatDate(item.date)}
                </p>
                {item.description ? <p className="mt-3 text-sm text-stone">{item.description}</p> : null}
                {itemLink ? (
                  <ExternalLink
                    href={itemLink}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-accent transition hover:text-accent-2"
                  >
                    View appearance <ExternalLinkIcon className="h-4 w-4" />
                  </ExternalLink>
                ) : null}
              </GlassCard>
            );
          })}
        </div>
      </Section>

      <Section
        size="md"
        eyebrow="Browse All"
        title="All appearances"
        description="Filter by format and search by event or title."
      >
        <div className="mb-4 flex flex-wrap gap-2">
          {typeFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveType(filter)}
              aria-pressed={activeType === filter}
            >
              <Badge tone={activeType === filter ? "accent" : "default"}>{filter}</Badge>
            </button>
          ))}
        </div>
        <div className="mb-6">
          <label htmlFor="speaking-search" className="mb-2 block text-sm text-stone">
            Search
          </label>
          <input
            id="speaking-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title or event"
            className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {filteredAppearances.map((item) => {
            const itemLink = "link" in item ? item.link : undefined;

            return (
              <GlassCard
                key={`${item.event}-${item.date}-${item.title}`}
                className="rounded-2xl border-border/70 bg-surface/70"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Badge>{item.type}</Badge>
                </div>
                <h3 className="text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-stone">{item.event}</p>
                <p className="mt-1 text-sm text-stone">{formatDate(item.date)}</p>
                {itemLink ? (
                  <ExternalLink
                    href={itemLink}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-accent transition hover:text-accent-2"
                  >
                    View appearance <ExternalLinkIcon className="h-4 w-4" />
                  </ExternalLink>
                ) : null}
              </GlassCard>
            );
          })}
          {filteredAppearances.length === 0 ? (
            <GlassCard className="rounded-2xl border-border/70 bg-surface/70">
              <p className="mb-0 text-sm text-stone">No appearances match your filters.</p>
            </GlassCard>
          ) : null}
        </div>
      </Section>

      <Section
        size="md"
        eyebrow="Talk Topics"
        title="Popular session themes"
        description="Topics tailored for executive audiences, delivery teams, and technical communities."
      >
        <div className="space-y-3">
          {siteConfig.speaking.topics.map((topic) => (
            <GlassCard
              key={topic.title}
              className="flex flex-col gap-3 rounded-2xl border-border/70 bg-surface/70 md:flex-row md:items-center md:justify-between"
            >
              <Badge tone="accent">{topic.title}</Badge>
              <p className="mb-0 text-sm text-stone">{topic.outcome}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section size="md" eyebrow="Booking" title="Booking Information">
        <GlassCard className="rounded-2xl border-border/70 bg-surface/70">
          <ul className="space-y-2 text-sm text-stone">
            <li>• Keynotes</li>
            <li>• Panels</li>
            <li>• Executive roundtables</li>
            <li>• Institutional advisory sessions</li>
          </ul>
          <form action={siteConfig.pageHeroes.speaking.primaryCta.href} className="mt-5">
            <Button type="submit">{siteConfig.pageHeroes.speaking.primaryCta.label}</Button>
          </form>
        </GlassCard>
      </Section>

      <Section size="md" eyebrow="Testimonials" title="What collaborators say">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <GlassCard key={item.name} className="rounded-2xl border-border/70 bg-surface/70">
              <p className="font-serif text-lg text-ink">“{item.quote}”</p>
              <p className="mt-3 mb-0 text-sm text-stone">
                {item.name} · {item.role}
              </p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
