import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Engineering leadership profile of Massi Mapani, focused on resilient digital systems, governance discipline, and measurable institutional outcomes.",
  path: "/about",
  image: "/images/massi-hero.webp"
});

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <SectionHeading eyebrow="About" title="Engineering leadership with institutional depth" description={siteConfig.about.intro} />
          <div className="prose-editorial mt-6">
            {siteConfig.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-white/15">
            <Image
              src="/images/massi-portrait.webp"
              alt="Massi Mapani portrait"
              width={720}
              height={1080}
              className="h-[520px] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              quality={70}
              priority
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-6 rounded-3xl border border-white/10 bg-panel/50 p-6 md:p-8">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-serif text-2xl text-ink">Principles</h2>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-3">
          {siteConfig.about.principles.map((principle) => (
            <p key={principle} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-stone">
              {principle}
            </p>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 p-6 md:p-8">
        <h2 className="font-serif text-2xl text-ink">Toolbox</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {siteConfig.about.toolbox.map((tool) => (
            <span key={tool} className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.14em] text-stone">
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/20 p-6 md:p-8">
        <h2 className="font-serif text-2xl text-ink">Press Kit</h2>
        <p className="mt-3 text-stone">Download the current media sheet and bio assets.</p>
        <Link href="/press/massi-mapani-press-kit.pdf" className="mt-4 inline-block rounded-full border border-rose/50 px-5 py-2 text-sm text-ink hover:border-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose">
          Download press kit
        </Link>
      </section>
    </div>
  );
}
