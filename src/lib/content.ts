import { siteConfig } from "@/content/site.config";

export function getCaseStudyBySlug(slug: string) {
  return siteConfig.work.projects.find((project) => project.slug === slug);
}

export function getProductBySlug(slug: string) {
  return siteConfig.products.find((product) => product.slug === slug);
}

export function getCategorySlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getProductCategories() {
  return siteConfig.productCategories.map((name) => ({ name, slug: getCategorySlug(name) }));
}

export function getProductCategoryBySlug(categorySlug: string) {
  return getProductCategories().find((category) => category.slug === categorySlug);
}

export function getProductsByCategoryName(categoryName: string) {
  return siteConfig.products.filter((product) => product.category === categoryName);
}

export function getLogoStrip() {
  return siteConfig.credibility.logoStrip;
}

export function getTestimonials() {
  return siteConfig.credibility.testimonials;
}
