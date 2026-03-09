import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/og/og-default.png"
}: BuildMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.siteUrl}${canonicalPath}`;
  const absoluteImageUrl = toAbsoluteUrl(image);

  return {
    title: { absolute: `${title} | Massi Mapani` },
    description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImageUrl]
    }
  };
}
