import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { getDictionary } from "@/i18n";
import { defaultLocale, isLocale, path, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  const featured = dict.services.items.slice(0, 6);

  return (
    <>
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-brand-950">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-950/90 to-brand-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                {dict.home.hero.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white text-balance sm:text-5xl lg:text-6xl">
                {dict.home.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                {dict.home.hero.lead}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={path(locale, "contact")}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-brand-950 shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-400 hover:shadow-accent-400/30"
                >
                  {dict.common.contactCta}
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
                <Link
                  href={path(locale, "services")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/50 hover:bg-white/5"
                >
                  {dict.common.viewServices}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2">
                {dict.home.intro.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-200"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow={dict.home.intro.eyebrow}
                  title={dict.home.intro.title}
                />
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                  {dict.home.intro.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  href={path(locale, "about")}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                >
                  {dict.common.learnMore}
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand-100 to-accent-100/60" />
                <div className="overflow-hidden rounded-3xl shadow-xl shadow-brand-900/10">
                  <Image
                    src="/images/obra-3.jpg"
                    alt={dict.home.intro.title}
                    width={1600}
                    height={1200}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-100 bg-white/95 p-5 shadow-xl shadow-brand-900/10 backdrop-blur sm:block">
                  <p className="font-display text-3xl font-bold text-brand-800">
                    GLP &amp; GN
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {dict.brand.tagline}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={dict.home.services.eyebrow}
              title={dict.home.services.title}
              lead={dict.home.services.lead}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service, index) => (
              <Reveal key={service.title} delay={index * 60} className="h-full">
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 flex justify-center">
              <Link
                href={path(locale, "services")}
                className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                {dict.common.viewServices}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-28">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              align="center"
              title={dict.home.pillars.title}
            />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dict.home.pillars.items.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 80}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-accent-400 ring-1 ring-white/10">
                    <Icon
                      name={pillar.icon as IconName}
                      className="h-7 w-7"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a66c2] text-white">
                <Icon name="linkedin" className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-950">
                  {dict.home.linkedin.title}
                </h3>
                <p className="mt-2 text-slate-600">{dict.home.linkedin.lead}</p>
              </div>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a66c2] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#004182]"
              >
                <Icon name="linkedin" className="h-4 w-4" />
                {dict.common.followUs}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-800 to-brand-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold text-white text-balance sm:text-4xl">
              {dict.home.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              {dict.home.cta.lead}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href={path(locale, "contact")}
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-400"
              >
                {dict.common.contactCta}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                <Icon name="mail" className="h-4 w-4" />
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
