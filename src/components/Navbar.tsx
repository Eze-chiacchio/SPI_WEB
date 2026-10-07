"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { path, type Locale } from "@/i18n/config";

type NavLabels = {
  home: string;
  about: string;
  services: string;
  gallery: string;
  contact: string;
};

type Props = {
  locale: Locale;
  nav: NavLabels;
  brandName: string;
};

export function Navbar({ locale, nav, brandName }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = [
    { key: "home" as const, label: nav.home },
    { key: "about" as const, label: nav.about },
    { key: "services" as const, label: nav.services },
    { key: "gallery" as const, label: nav.gallery },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-[0_1px_20px_rgba(15,43,92,0.08)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={path(locale, "home")}
          className="flex shrink-0 items-center"
          aria-label={brandName}
        >
          <span className="flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-slate-900/5">
            <Image
              src="/images/logo.png"
              alt={brandName}
              width={160}
              height={73}
              priority
              className="h-8 w-auto"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((item) => {
            const href = path(locale, item.key);
            const active =
              item.key === "home"
                ? pathname === href
                : pathname.startsWith(href);
            return (
              <Link
                key={item.key}
                href={href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? active
                      ? "bg-brand-50 text-brand-800"
                      : "text-slate-600 hover:bg-slate-100 hover:text-brand-800"
                    : active
                      ? "bg-white/15 text-white"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} tone={solid ? "dark" : "light"} />
          <Link
            href={path(locale, "contact")}
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-400"
          >
            {nav.contact}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} tone={solid ? "dark" : "light"} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              solid
                ? "text-brand-950 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {[...items, { key: "contact" as const, label: nav.contact }].map(
            (item) => {
              const href = path(locale, item.key);
              const active =
                item.key === "home"
                  ? pathname === href
                  : pathname.startsWith(href);
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-800"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            },
          )}
        </nav>
      </div>
    </header>
  );
}
