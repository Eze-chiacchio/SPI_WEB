import Image from "next/image";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import type { Dictionary } from "@/i18n";

export function ServicesPage({ dict }: { dict: Dictionary }) {
  const half = Math.ceil(dict.services.scope.length / 2);
  const scopeColumns = [
    dict.services.scope.slice(0, half),
    dict.services.scope.slice(half),
  ];

  return (
    <>
      <PageHero
        eyebrow={dict.services.eyebrow}
        title={dict.services.title}
        lead={dict.services.lead}
        image="/images/obra-1.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <Reveal>
              <div className="space-y-5">
                {dict.services.intro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-slate-600 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/obra-2.jpg"
                  alt={dict.services.title}
                  width={1600}
                  height={1200}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="col-span-2 h-52 w-full rounded-3xl object-cover shadow-lg shadow-brand-900/10 sm:h-64"
                />
                <Image
                  src="/images/obra-3.jpg"
                  alt={dict.services.title}
                  width={1600}
                  height={1200}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="h-40 w-full rounded-3xl object-cover shadow-lg shadow-brand-900/10"
                />
                <Image
                  src="/images/nosotros.jpg"
                  alt={dict.services.title}
                  width={1600}
                  height={1200}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="h-40 w-full rounded-3xl object-cover shadow-lg shadow-brand-900/10"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={dict.services.eyebrow}
              title={dict.home.services.title}
              lead={dict.home.services.lead}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.items.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 60} className="h-full">
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-24">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow={dict.services.eyebrow}
              title={dict.services.scopeTitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-4 md:grid-cols-2">
            {scopeColumns.map((column, columnIndex) => (
              <Reveal key={columnIndex}>
                <ul className="space-y-4">
                  {column.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
