import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { ExternalLink } from "@/components/external-link";
import {
  getProductCategories,
  getProductCategoryBySlug,
  getProductsByCategoryName
} from "@/lib/content";

type Props = {
  params: Promise<{ categorySlug: string }>;
};

export function generateStaticParams() {
  return getProductCategories().map((category) => ({ categorySlug: category.slug }));
}

export default async function ProductCategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const category = getProductCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategoryName(category.name);

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Digital Products and Interests"
        title={category.name}
        description="Browse available items in this category."
      />

      <Link
        href="/products"
        className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-ink hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
      >
        Back to all categories
      </Link>

      {products.length > 0 ? (
        <section className="grid grid-cols-12 gap-6">
          {products.map((product) => (
            <article key={product.slug} className="col-span-12 overflow-hidden rounded-3xl border border-white/10 bg-panel/50 md:col-span-6">
              <div className="relative h-72">
                <Image src={product.coverImage} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-rose">{product.status}</p>
                <h2 className="font-serif text-2xl text-ink">{product.name}</h2>
                <p className="text-stone">{product.description}</p>
                <p className="text-sm text-stone">Price: {product.price}</p>
                <div className="flex flex-wrap gap-3">
                  <ExternalLink
                    href={product.gumroadUrl}
                    className="rounded-full bg-rose px-4 py-2 text-sm text-white hover:bg-rose/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                  >
                    Buy on Gumroad
                  </ExternalLink>
                  <Link
                    href={`/products/${product.slug}`}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm text-ink hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                  >
                    Product details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="rounded-3xl border border-white/10 bg-panel/30 p-6">
          <p className="text-stone">No items are live in {category.name} yet. Check back soon.</p>
        </section>
      )}
    </div>
  );
}
