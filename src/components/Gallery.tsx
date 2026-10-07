"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { Icon } from "./Icon";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

const labels: Record<Locale, { close: string; prev: string; next: string }> = {
  es: { close: "Cerrar", prev: "Anterior", next: "Siguiente" },
  en: { close: "Close", prev: "Previous", next: "Next" },
};

export function Gallery({
  images,
  locale,
}: {
  images: GalleryImage[];
  locale: Locale;
}) {
  const [active, setActive] = useState<number | null>(null);
  const t = labels[locale];

  const close = useCallback(() => setActive(null), []);
  const go = useCallback(
    (direction: number) => {
      setActive((current) => {
        if (current === null) return current;
        return (current + direction + images.length) % images.length;
      });
    },
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, go]);

  const spans = [
    "sm:col-span-2 sm:row-span-2",
    "sm:col-span-2",
    "sm:col-span-1",
    "sm:col-span-1",
  ];

  return (
    <>
      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            className={`group relative overflow-hidden rounded-2xl bg-brand-950 ${
              spans[index % spans.length]
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {image.caption}
            </span>
            <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              <Icon name="arrow-right" className="h-4 w-4 -rotate-45" />
            </span>
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-950/95 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label={t.close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label={t.prev}
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
          >
            <Icon name="arrow-right" className="h-5 w-5 rotate-180" />
          </button>

          <figure
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl">
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 text-center text-sm font-medium text-slate-300">
              {images[active].caption}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label={t.next}
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
          >
            <Icon name="arrow-right" className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </>
  );
}
