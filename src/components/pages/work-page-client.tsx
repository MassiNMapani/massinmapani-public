"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";

const workMethod = [
  {
    step: "Diagnose",
    description:
      "Rapidly assess delivery risks, operational bottlenecks, and governance gaps to prioritize high-impact fixes."
  },
  {
    step: "Design",
    description:
      "Define practical architecture and execution patterns that balance speed, reliability, and compliance needs."
  },
  {
    step: "Deliver",
    description:
      "Implement with measurable checkpoints so teams ship outcomes, not just features, and sustain gains over time."
  }
] as const;

function toOutcomeChip(metric: string) {
  return metric
    .replace(/\bdown\b/i, "↓")
    .replace(/\bup\b/i, "↑")
    .replace(/\s+/g, " ")
    .trim();
}

export function WorkPageClient() {
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const unique = new Set(siteConfig.work.projects.flatMap((project) => project.tags));
    return ["All", ...Array.from(unique)];
  }, []);

  const filteredProjects =
    activeTag === "All"
      ? siteConfig.work.projects
      : siteConfig.work.projects.filter((project) =>
          project.tags.some((tag) => tag === activeTag)
        );

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Work"
        title="Projects built for resilience and governance"
        description={siteConfig.work.intro}
      />

      <section aria-label="How I work" className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {workMethod.map((item) => (
          <GlassCard key={item.step} className="rounded-2xl border-border/70 bg-surface/70 p-5">
            <Badge tone="accent">{item.step}</Badge>
            <p className="mt-3 mb-0 text-sm text-stone">{item.description}</p>
          </GlassCard>
        ))}
      </section>

      <section aria-label="Work filters" className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className="transition"
            aria-pressed={activeTag === tag}
          >
            <Badge tone={activeTag === tag ? "accent" : "default"}>{tag}</Badge>
          </button>
        ))}
      </section>

      <section className="grid grid-cols-12 gap-6">
        {filteredProjects.map((project) => (
          <GlassCard
            key={project.slug}
            className="col-span-12 rounded-3xl border-border/70 bg-surface/70 md:col-span-6"
          >
            <h2 className="font-serif text-2xl text-ink">{project.title}</h2>
            <p className="mt-3 text-stone">{project.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2" aria-label="Outcome highlights">
              {project.metrics.slice(0, 3).map((metric) => (
                <Badge key={metric} tone="accent">
                  {toOutcomeChip(metric)}
                </Badge>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((stackItem) => (
                <Badge key={stackItem}>{stackItem}</Badge>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <Link
              href={`/work/${project.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent transition hover:text-accent-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              View case study <ArrowRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        ))}
      </section>
    </div>
  );
}
