import { siteConfig } from "@/content/site.config";

export function SocialRibbon() {
  return (
    <section aria-label="Social proof" className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {siteConfig.socialStats.map((stat) => (
          <div key={stat.platform} className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
            <p className="text-xs uppercase tracking-[0.16em] text-stone/80">{stat.label}</p>
            <p className="mt-1 font-serif text-xl text-ink">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
