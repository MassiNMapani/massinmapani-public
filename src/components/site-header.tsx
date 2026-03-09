"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Linkedin, Menu, X } from "lucide-react";
import { siteConfig, type NavItem } from "@/content/site.config";
import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/external-link";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const primaryCta = siteConfig.primaryCta;
  const linkedIn = siteConfig.socialLinks.find((item) => item.platform === "LinkedIn");
  const pressNavItem = { label: "Press", shortLabel: "Press", href: "/press" } as const;
  const navItems: readonly NavItem[] = siteConfig.pressKit.enabled
    ? [...siteConfig.nav, pressNavItem]
    : siteConfig.nav;

  return (
    <header className="sticky top-3 z-50 px-4 md:px-6" role="banner">
      <GlassCard className="mx-auto max-w-7xl rounded-2xl border-border/80 bg-card/80 p-0 shadow-card backdrop-blur-md">
        <div className="grid grid-cols-12 items-center gap-3 px-4 py-3 md:px-6">
          <Link
            href="/"
            className="col-span-6 inline-flex items-center gap-2 font-serif text-xl text-ink transition hover:text-accent md:col-span-3"
            aria-label="Massi Mapani home"
          >
            <Image
              src="/images/icon.png"
              alt="Massi Mapani logo"
              width={28}
              height={28}
              className="rounded-full border border-border/60 bg-surface-2/70"
            />
            {siteConfig.name}
          </Link>

          <nav aria-label="Primary" className="col-span-6 hidden justify-center md:flex md:col-span-6">
            <ul className="flex items-center gap-4 xl:gap-6">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center whitespace-nowrap text-sm text-stone transition hover:text-ink",
                        active && "text-accent"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px w-full bg-accent/80 transition-opacity",
                        active ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="col-span-6 flex items-center justify-end gap-2 md:col-span-3">
            <Button
              size="sm"
              className="hidden md:inline-flex"
              aria-label={primaryCta.label}
              onClick={() => {
                if (primaryCta.href.startsWith("mailto:")) {
                  window.location.href = primaryCta.href;
                  return;
                }
                router.push(primaryCta.href);
              }}
            >
              {primaryCta.label}
            </Button>
            {linkedIn ? (
              <ExternalLink
                href={linkedIn.url}
                ariaLabel="Connect on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-2/70 text-stone transition hover:border-accent/40 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              >
                <Linkedin className="h-4 w-4" />
              </ExternalLink>
            ) : null}
            <Button
              size="sm"
              variant="secondary"
              className="md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-primary-nav"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {mobileOpen ? (
          <div id="mobile-primary-nav" className="border-t border-border/70 px-4 pb-4 pt-3 md:hidden">
            <nav aria-label="Mobile Primary">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl border border-border/70 bg-surface/70 px-3 py-2 text-sm text-stone transition hover:text-ink",
                          active && "border-accent/40 text-accent"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.shortLabel ?? item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-3">
                <Button
                  className="w-full"
                  onClick={() => {
                    setMobileOpen(false);
                    if (primaryCta.href.startsWith("mailto:")) {
                      window.location.href = primaryCta.href;
                      return;
                    }
                    router.push(primaryCta.href);
                  }}
                >
                  {primaryCta.label}
                </Button>
              </div>
            </nav>
          </div>
        ) : null}
      </GlassCard>
    </header>
  );
}
