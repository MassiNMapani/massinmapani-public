import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { getTestimonials } from "@/lib/content";

export function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <section aria-label="Testimonials" className="space-y-5">
      <div>
        <Badge>Testimonials</Badge>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <GlassCard key={item.name} className="rounded-2xl border-border/70 bg-surface/70">
            <blockquote className="space-y-4">
              <p className="font-serif text-xl leading-relaxed text-ink">“{item.quote}”</p>
              <footer>
                <p className="mb-1 text-sm font-medium text-ink">{item.name}</p>
                <p className="mb-0 text-sm text-stone">{item.role}</p>
              </footer>
            </blockquote>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
