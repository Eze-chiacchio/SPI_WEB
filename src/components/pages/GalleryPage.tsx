import { Gallery, type GalleryImage } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

const sources = [
  "/images/obra-1.jpg",
  "/images/obra-2.jpg",
  "/images/obra-3.jpg",
  "/images/nosotros.jpg",
  "/images/hero.jpg",
];

export function GalleryPage({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const images: GalleryImage[] = sources.map((src, index) => {
    const caption =
      dict.gallery.captions[index % dict.gallery.captions.length];
    return { src, alt: caption, caption };
  });

  return (
    <>
      <PageHero
        eyebrow={dict.gallery.eyebrow}
        title={dict.gallery.title}
        lead={dict.gallery.lead}
        image="/images/obra-2.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Gallery images={images} locale={locale} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
