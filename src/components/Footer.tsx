import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n";
import { path, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";
import { Icon } from "./Icon";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: Props) {
  const year = new Date().getFullYear();

  const links = [
    { key: "home" as const, label: dict.nav.home },
    { key: "about" as const, label: dict.nav.about },
    { key: "services" as const, label: dict.nav.services },
    { key: "gallery" as const, label: dict.nav.gallery },
    { key: "contact" as const, label: dict.nav.contact },
  ];

  return (
    <footer className="mt-auto bg-brand-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center rounded-xl bg-white px-3 py-2">
              <Image
                src="/images/logo.png"
                alt={dict.brand.name}
                width={160}
                height={73}
                className="h-9 w-auto"
              />
            </span>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              {dict.footer.tagline}
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent-400 hover:text-accent-400"
            >
              <Icon name="linkedin" className="h-4 w-4" />
              {dict.common.followUs}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.navTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.key}>
                  <Link
                    href={path(locale, link.key)}
                    className="text-sm text-slate-400 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-start gap-2 transition-colors hover:text-accent-400"
                >
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{dict.contact.hoursValue}</span>
              </li>
              <li className="inline-flex items-start gap-2">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{dict.common.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {dict.brand.name}. {dict.footer.rights}
          </p>
          <p>{dict.brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
