import { Icon, type IconName } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/i18n";

export function AboutPage({ dict }: { dict: Dictionary }) {
  const cards = [
    { icon: "flag" as IconName, ...dict.about.mission },
    { icon: "globe" as IconName, ...dict.about.vision },
  ];

  return (
    <>
      <PageHero
        eyebrow={dict.about.eyebrow}
        title={dict.about.title}
        lead={dict.about.lead}
        image="/images/nosotros.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 100} className="h-full">
                <article className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-800 text-accent-400">
                    <Icon name={card.icon} className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-brand-950">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {card.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={dict.about.eyebrow}
              title={dict.about.values.title}
              lead={dict.about.values.lead}
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dict.about.values.items.map((value, index) => (
              <Reveal key={value.title} delay={index * 80} className="h-full">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-600">
                    <Icon name={value.icon as IconName} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-brand-950">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
