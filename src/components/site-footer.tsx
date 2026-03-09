import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import { SocialIcons } from "@/components/social-icons";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

export function SiteFooter() {
  const footerEmail = siteConfig.footer?.email || siteConfig.businessEmail;
  const navItems = siteConfig.pressKit.enabled
    ? [...siteConfig.nav, { label: "Press", href: "/press" }]
    : siteConfig.nav;

  return (
    <footer className="mt-16 px-6 pb-8 pt-6" aria-label="Site footer">
      <GlassCard className="mx-auto max-w-7xl rounded-3xl border-border/80 bg-surface/70 p-6 md:p-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <Badge tone="accent">Stay Connected</Badge>
            <p className="mt-4 font-serif text-2xl text-ink">{siteConfig.name}</p>
            <p className="mt-3 max-w-lg text-sm text-stone">{siteConfig.footer.blurb}</p>
            <a
              href={`mailto:${footerEmail}`}
              className="mt-4 inline-block text-sm text-ink underline decoration-border underline-offset-4 transition hover:text-accent"
              aria-label={`Email ${footerEmail}`}
            >
              {footerEmail}
            </a>
          </div>

          <div className="col-span-12 space-y-6 md:col-span-6 md:justify-self-end">
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-stone transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <SocialIcons
              className="flex flex-wrap items-center gap-2"
              iconClassName="h-4 w-4"
            />
          </div>
        </div>
        <div className="mt-8 border-t border-border/70 pt-5 text-xs text-muted">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </GlassCard>
    </footer>
  );
}
