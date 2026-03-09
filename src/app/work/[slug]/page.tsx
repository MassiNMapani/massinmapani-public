import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { siteConfig } from "@/content/site.config";
import { getCaseStudyBySlug } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { buildMetadata } from "@/lib/seo";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    return buildMetadata({
      title: "Work",
      description:
        "Case studies showing measurable outcomes in delivery reliability, governance quality, and operational performance.",
      path: "/work"
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
    image: "/images/massi-hero.webp"
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = siteConfig.work.projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);
  const currentIndex = siteConfig.work.projects.findIndex((item) => item.slug === project.slug);
  const prevProject = currentIndex > 0 ? siteConfig.work.projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < siteConfig.work.projects.length - 1
      ? siteConfig.work.projects[currentIndex + 1]
      : null;

  return (
    <article className="space-y-8">
      <GlassCard className="rounded-3xl border-border/70 bg-surface/70 p-7">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Case study</p>
        <h1 className="mt-3 font-serif text-4xl text-ink">{project.title}</h1>
        <p className="mt-3 text-stone">{project.summary}</p>
      </GlassCard>

      <section className="grid grid-cols-12 gap-6">
        <GlassCard className="col-span-12 rounded-3xl border-border/70 bg-surface/70 md:col-span-5">
          <h2 className="font-serif text-2xl text-ink">At a glance</h2>
          <dl className="mt-4 space-y-3 text-sm">
            {project.role ? (
              <div>
                <dt className="text-muted">Role</dt>
                <dd className="text-stone">{project.role}</dd>
              </div>
            ) : null}
            {project.timeline ? (
              <div>
                <dt className="text-muted">Timeline</dt>
                <dd className="text-stone">{project.timeline}</dd>
              </div>
            ) : null}
            {project.scope ? (
              <div>
                <dt className="text-muted">Scope</dt>
                <dd className="text-stone">{project.scope}</dd>
              </div>
            ) : null}
            {project.teamSize ? (
              <div>
                <dt className="text-muted">Team size</dt>
                <dd className="text-stone">{project.teamSize}</dd>
              </div>
            ) : null}
            {project.constraints ? (
              <div>
                <dt className="text-muted">Constraints</dt>
                <dd className="text-stone">{project.constraints}</dd>
              </div>
            ) : null}
            <div>
              <dt className="text-muted">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </dd>
            </div>
          </dl>
        </GlassCard>

        <GlassCard className="col-span-12 rounded-3xl border-border/70 bg-surface/70 md:col-span-7">
          <h2 className="font-serif text-2xl text-ink">Problem</h2>
          <p className="mt-3 text-stone">{project.problem}</p>

          <h2 className="mt-6 font-serif text-2xl text-ink">Approach</h2>
          <p className="mt-3 text-stone">{project.approach}</p>

          <h2 className="mt-6 font-serif text-2xl text-ink">Impact</h2>
          <p className="mt-3 text-stone">{project.impact}</p>
        </GlassCard>
      </section>

      {project.resultsBullets ? (
        <GlassCard className="rounded-3xl border-border/70 bg-surface/70 p-6">
          <h2 className="font-serif text-2xl text-ink">Results</h2>
          <ul className="mt-4 space-y-2 text-stone">
            {project.resultsBullets.map((result) => (
              <li key={result}>• {result}</li>
            ))}
          </ul>
        </GlassCard>
      ) : null}

      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-ink">Metrics</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <GlassCard key={metric} className="rounded-2xl border-border/70 bg-surface/70 p-5">
              <p className="mb-0 text-base text-ink">{metric}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {project.links?.length ? (
        <GlassCard className="rounded-3xl border-border/70 bg-surface/70 p-6">
          <h2 className="font-serif text-2xl text-ink">Project links</h2>
          <ul className="mt-4 space-y-2">
            {project.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-accent transition hover:text-accent-2"
                >
                  {link.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </GlassCard>
      ) : null}

      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-ink">Related work</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {relatedProjects.map((item) => (
            <GlassCard key={item.slug} className="rounded-2xl border-border/70 bg-surface/70">
              <h3 className="text-2xl text-ink">{item.title}</h3>
              <p className="mt-2 text-stone">{item.summary}</p>
              <Link
                href={`/work/${item.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-accent transition hover:text-accent-2"
              >
                View case study <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      {prevProject || nextProject ? (
        <GlassCard className="rounded-3xl border-border/70 bg-surface/70 p-6">
          <h2 className="font-serif text-xl text-ink">Next case study</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="inline-flex items-center gap-2 text-sm text-stone transition hover:text-ink"
              >
                <span aria-hidden="true">←</span> {prevProject.title}
              </Link>
            ) : null}
            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="inline-flex items-center gap-2 text-sm text-accent transition hover:text-accent-2"
              >
                {nextProject.title} <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </GlassCard>
      ) : null}
    </article>
  );
}
