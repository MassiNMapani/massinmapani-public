import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site.config";
import { getProductCategories } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/work",
    "/speaking",
    "/partnerships",
    "/press",
    "/products",
    "/community",
    "/community/expression-of-interest",
    "/contact"
  ];

  const workRoutes = siteConfig.work.projects.map((project) => `/work/${project.slug}`);
  const productRoutes = siteConfig.products.map((product) => `/products/${product.slug}`);
  const productCategoryRoutes = getProductCategories().map(
    (category) => `/products/categories/${category.slug}`
  );

  return [...staticRoutes, ...workRoutes, ...productRoutes, ...productCategoryRoutes].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
