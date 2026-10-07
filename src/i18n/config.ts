export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const pageKeys = ["about", "services", "gallery", "contact"] as const;
export type PageKey = (typeof pageKeys)[number];

export type RouteKey = "home" | PageKey;

export const slugs: Record<Locale, Record<PageKey, string>> = {
  es: {
    about: "nosotros",
    services: "servicios",
    gallery: "galeria",
    contact: "contacto",
  },
  en: {
    about: "about",
    services: "services",
    gallery: "gallery",
    contact: "contact",
  },
};

export function isLocale(value: string | undefined): value is Locale {
  return value != null && (locales as readonly string[]).includes(value);
}

export function path(locale: Locale, key: RouteKey): string {
  if (key === "home") return `/${locale}`;
  return `/${locale}/${slugs[locale][key]}`;
}

export function pageKeyFromSlug(
  locale: Locale,
  slug: string,
): PageKey | undefined {
  const entries = Object.entries(slugs[locale]) as [PageKey, string][];
  return entries.find(([, value]) => value === slug)?.[0];
}
