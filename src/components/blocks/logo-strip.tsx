import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { getLogoStrip } from "@/lib/content";

export function LogoStrip() {
  const logoStrip = getLogoStrip();

  return (
    <section aria-label="Trust and credibility">
      <div className="mb-4">
        <Badge>Trusted by partners</Badge>
      </div>
      <GlassCard className="rounded-2xl border-border/70 bg-surface/65 p-5 md:p-6">
        <p className="mb-4 text-sm text-stone">{logoStrip.title}</p>
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
    </section>
  );
}
