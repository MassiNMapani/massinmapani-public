import { GlassCard } from "@/components/ui/glass-card";

export function ThesisBlock() {
  return (
    <section aria-label="Systems leadership thesis">
      <GlassCard className="rounded-3xl border-border/70 bg-surface/70 p-8">
        <h2 className="font-serif text-3xl text-ink">Systems shape institutions.</h2>
        <p className="mt-3 mb-0 max-w-4xl text-stone">
          I work at the intersection of engineering execution, governance discipline, and leadership
          clarity — building resilient digital systems that scale trust, performance, and accountability.
        </p>
      </GlassCard>
    </section>
  );
}
