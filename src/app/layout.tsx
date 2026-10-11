import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "DEMO — Token Sale",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "DEMO — Token Sale",
    description: "A responsive demo IDO token launch interface.",
    type: "website",
  },
  description: "A responsive demo IDO token launch interface.",
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
