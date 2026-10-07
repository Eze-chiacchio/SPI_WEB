"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, pageKeyFromSlug, path, type Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
  tone?: "light" | "dark";
};

export function LanguageSwitcher({ locale, tone = "dark" }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    const segments = pathname.split("/").filter(Boolean);
    const slug = segments[1];
    let target = `/${next}`;
    if (slug) {
      const key = pageKeyFromSlug(locale, slug);
      target = key ? path(next, key) : `/${next}`;
    }
    router.push(target);
  };

  const base =
    tone === "light"
      ? "border-white/25 text-white/80"
      : "border-slate-300 text-slate-500";

  return (
    <div
      className={`inline-flex items-center rounded-full border ${base} p-0.5 text-xs font-semibold uppercase tracking-wide`}
    >
      {locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active
                ? "bg-accent-500 text-brand-950"
                : tone === "light"
                  ? "hover:text-white"
                  : "hover:text-slate-900"
            }`}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}
