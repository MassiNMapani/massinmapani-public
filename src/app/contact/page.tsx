import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { SocialIcons } from "@/components/social-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Massi Mapani for speaking engagements, institutional collaborations, advisory work, and press inquiries.",
  path: "/contact",
  image: "/images/massi-hero.webp"
});

export default function ContactPage() {
  const calendarUrl = siteConfig.footer.calendarUrl?.trim();

  return (
    <div className="space-y-10">
      <GlassCard className="rounded-3xl border-border/70 bg-surface/70 p-6">
        <h2 className="font-serif text-2xl text-ink">Direct booking</h2>
        <p className="mt-3 text-stone">
          For speaking engagements, collaborations, or advisory inquiries, email{" "}
          <a
            href={`mailto:${siteConfig.bookingsEmail}`}
            className="text-accent underline decoration-border underline-offset-4 transition hover:text-accent-2"
          >
            {siteConfig.bookingsEmail}
          </a>
          .
        </p>
      </GlassCard>

      <SectionHeading eyebrow="Contact" title={siteConfig.contact.heading} description={siteConfig.contact.description} />

      <section className="grid grid-cols-12 gap-6">
        <GlassCard className="col-span-12 rounded-3xl border-border/70 bg-surface/70 p-6 md:col-span-7">
          <ContactForm />
        </GlassCard>
        <aside className="col-span-12 space-y-5 md:col-span-5">
          <GlassCard className="rounded-3xl border-border/70 bg-surface/70 p-6">
            <Badge tone="accent">What happens next</Badge>
            <h2 className="mt-4 font-serif text-2xl text-ink">Clear response process</h2>
            <ul className="mt-4 space-y-3 text-sm text-stone">
              <li>
                <span className="text-ink">Response time:</span> most inquiries receive a reply within 1-2 business days.
              </li>
              <li>
                <span className="text-ink">Confidentiality:</span> shared context is treated as confidential and scoped before deeper review.
              </li>
              <li>
                <span className="text-ink">Press kit:</span>{" "}
                <Link href={siteConfig.pressKit.pdfPath} className="text-accent transition hover:text-accent-2" target="_blank" rel="noopener noreferrer">
                  Download media assets
                </Link>
              </li>
            </ul>
            {calendarUrl ? (
              <form action={calendarUrl} target="_blank" className="mt-5">
                <Button type="submit" variant="secondary">Prefer to book?</Button>
              </form>
            ) : null}
          </GlassCard>

          <GlassCard className="rounded-3xl border-border/70 bg-surface/70 p-6">
            <h2 className="font-serif text-2xl text-ink">Business Contact</h2>
            <p className="mt-2 text-stone">{siteConfig.businessEmail}</p>
            <p className="mt-3 text-sm text-stone">Prefer social channels? Connect below.</p>
            <SocialIcons className="mt-3 flex items-center gap-2" />
          </GlassCard>
        </aside>
      </section>
    </div>
  );
}
