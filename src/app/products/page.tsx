import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { getProductCategories, getProductsByCategoryName } from "@/lib/content";
import { siteConfig } from "@/content/site.config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description:
    "Digital products and practical resources built for intentional execution, travel readiness, and operational confidence.",
  path: "/products",
  image: "/images/massi-hero.webp"
});

export default function ProductsPage() {
  const categories = getProductCategories();

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Digital Products and Interests"
        title="Guides and assets built for practical outcomes"
        description="Premium digital resources for intentional travelers and founders operating across borders."
      />

      <section className="rounded-3xl border border-white/10 bg-panel/40 p-6">
        <h2 className="font-serif text-2xl text-ink">Categories</h2>
        <p className="mt-2 text-sm text-stone">Select a category to view available items.</p>
        <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          {categories.map((category) => {
            const count = getProductsByCategoryName(category.name).length;
            return (
              <li key={category.slug}>
                <Link
                  href={`/products/categories/${category.slug}`}
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-ink transition hover:border-rose/50 hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                >
                  <span>{category.name}</span>
                  <span className="text-xs text-stone">{count} item{count === 1 ? "" : "s"}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/20 p-6">
        <h2 className="font-serif text-2xl text-ink">IP Protection Note</h2>
        <p className="mt-3 text-stone">{siteConfig.productIpNote}</p>
      </section>
    </div>
  );
}
