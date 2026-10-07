import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage } from "@/components/pages/AboutPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { GalleryPage } from "@/components/pages/GalleryPage";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { getDictionary } from "@/i18n";
import {
  defaultLocale,
  isLocale,
  locales,
  pageKeyFromSlug,
  slugs,
  type Locale,
  type PageKey,
} from "@/i18n/config";

type PageParams = { lang: string; slug: string };

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    Object.values(slugs[lang]).map((slug) => ({ lang, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const key = pageKeyFromSlug(locale, slug);
  if (!key) return {};
  const dict = getDictionary(locale);

  const titles: Record<PageKey, string> = {
    about: dict.about.title,
    services: dict.services.title,
    gallery: dict.gallery.title,
    contact: dict.contact.title,
  };
  const descriptions: Record<PageKey, string> = {
    about: dict.about.lead,
    services: dict.services.lead,
    gallery: dict.gallery.lead,
    contact: dict.contact.lead,
  };

  return {
    title: titles[key],
    description: descriptions[key],
    alternates: {
      canonical: `/${locale}/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const key = pageKeyFromSlug(locale, slug);
  if (!key) notFound();

  const dict = getDictionary(locale);

  switch (key) {
    case "about":
      return <AboutPage dict={dict} />;
    case "services":
      return <ServicesPage dict={dict} />;
    case "gallery":
      return <GalleryPage locale={locale} dict={dict} />;
    case "contact":
      return <ContactPage dict={dict} />;
  }
}
