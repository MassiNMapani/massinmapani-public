import { GlassCard } from "@/components/ui/glass-card";

const impactItems = [
  "10+ years providing institutional systems delivery",
  "Multi-sector: telecom, finance, energy, public sector",
  "Execution + governance + reliability focus",
  "Speaker on digital systems & leadership"
] as const;

export function ImpactStrip() {
  return (
    <section aria-label="Impact snapshot" className="space-y-3">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">AT A GLANCE</p>
      <GlassCard className="rounded-2xl border-border/40 bg-surface/60 p-4 md:p-5">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {impactItems.map((item) => (
            <p key={item} className="mb-0 text-sm text-stone">
              {item}
            </p>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
