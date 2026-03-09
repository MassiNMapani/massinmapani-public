import { CalendarDays, ExternalLink, MapPin, Mic } from "lucide-react";
import { ExternalLink as SafeExternalLink } from "@/components/external-link";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import type { SpeakingItem } from "@/content/site.config";

type AppearanceCardProps = {
  item: SpeakingItem;
};

export function AppearanceCard({ item }: AppearanceCardProps) {
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <GlassCard className="rounded-2xl border-border/70 bg-surface/70">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge tone="accent">{item.type}</Badge>
        {item.tags?.slice(0, 2).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h3 className="mb-2 text-2xl text-ink">{item.title}</h3>
      <p className="mb-3 flex items-center gap-2 text-sm text-stone">
        <Mic className="h-4 w-4" />
        <span>{item.event}</span>
        {item.role ? <span className="text-muted">• {item.role}</span> : null}
      </p>
      <p className="mb-1 flex items-center gap-2 text-sm text-stone">
        <CalendarDays className="h-4 w-4" />
        {formattedDate}
      </p>
      {item.location ? (
        <p className="mb-4 flex items-center gap-2 text-sm text-stone">
          <MapPin className="h-4 w-4" />
          {item.location}
        </p>
      ) : null}
      {item.description ? <p className="mb-4 text-sm text-stone">{item.description}</p> : null}
      {item.link ? (
        <SafeExternalLink
          href={item.link}
          className="inline-flex items-center gap-2 text-sm text-accent transition hover:text-accent-2"
        >
          View appearance <ExternalLink className="h-4 w-4" />
        </SafeExternalLink>
      ) : null}
    </GlassCard>
  );
}
