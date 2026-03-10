import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { WorkshopInterestForm } from "@/components/workshop-interest-form";
import { GlassCard } from "@/components/ui/glass-card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Workshop Expression of Interest",
  description:
    "Register interest in a digital transformation workshop focused on improving operations and using technology to scale businesses.",
  path: "/community/expression-of-interest",
  image: "/images/massi-hero.webp"
});

export default function WorkshopExpressionOfInterestPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Community / Workshop"
        title="Expression of Interest"
        description="For businesses and individuals interested in practical digital transformation workshops focused on operations, efficiency, and scale."
      />

      <section className="grid grid-cols-12 gap-6">
        <GlassCard className="col-span-12 rounded-3xl border-border/70 bg-surface/70 p-6 md:col-span-7">
          <WorkshopInterestForm />
        </GlassCard>
        <aside className="col-span-12 md:col-span-5">
          <GlassCard className="rounded-3xl border-border/70 bg-surface/70 p-6">
            <h2 className="font-serif text-2xl text-ink">Workshop focus</h2>
            <p className="mt-3 text-stone">
              These sessions are intended for organisations and professionals looking to improve how they operate and understand where technology can unlock efficiency, visibility, and growth.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-stone">
              <li>Operational bottlenecks and manual processes</li>
              <li>Practical digital transformation opportunities</li>
              <li>Technology choices that support sustainable scaling</li>
              <li>Follow-up consultation for interested participants</li>
            </ul>
            <p className="mt-5 text-sm text-stone">
              Information submitted through this form will be used strictly for workshop planning,
              participant follow-up, and related communication about this digital transformation
              workshop. It will not be used for unrelated purposes or shared beyond what is
              necessary to administer the workshop.
            </p>
          </GlassCard>
        </aside>
      </section>
    </div>
  );
}
