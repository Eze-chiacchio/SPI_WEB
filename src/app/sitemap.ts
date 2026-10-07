import type { MetadataRoute } from "next";
import { locales, slugs } from "@/i18n/config";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${site.url}/${locale}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    });

    for (const slug of Object.values(slugs[locale])) {
      entries.push({
        url: `${site.url}/${locale}/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
