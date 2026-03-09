import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/content/site.config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { buildMetadata } from "@/lib/seo";

const fontSans = localFont({
  src: [
    { path: "../../public/fonts/Manrope-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Manrope-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Manrope-SemiBold.woff2", weight: "600", style: "normal" }
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
});

const fontSerif = localFont({
  src: [
    { path: "../../public/fonts/PlayfairDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/PlayfairDisplay-SemiBold.woff2", weight: "600", style: "normal" }
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "Times", "serif"]
});

const gaId = process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const plausibleScriptSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC || "https://plausible.io/js/script.js";

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/"
  }),
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | Massi Mapani`
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body className="font-sans antialiased">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        {plausibleDomain ? (
          <Script
            data-domain={plausibleDomain}
            src={plausibleScriptSrc}
            strategy="afterInteractive"
            defer
          />
        ) : null}
        <SiteHeader />
        <AnalyticsProvider />
        <main className="mx-auto min-h-[70vh] max-w-7xl px-6 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
