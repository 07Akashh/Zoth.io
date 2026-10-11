import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl, siteTitle, siteDescription } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: siteTitle, template: "%s | DEMO" },
  description: siteDescription,
  applicationName: "DEMO",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "DEMO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
