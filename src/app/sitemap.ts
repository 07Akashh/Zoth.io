import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl.href, changeFrequency: "hourly", priority: 1 }];
}
