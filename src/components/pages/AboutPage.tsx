import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n";

export function AboutPage({ dict }: { dict: Dictionary }) {
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
          <div className="max-w-3xl space-y-12">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-950 sm:text-3xl">
                  {dict.about.mission.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {dict.about.mission.text}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="border-t border-slate-200 pt-12">
                <h2 className="font-display text-2xl font-bold text-brand-950 sm:text-3xl">
                  {dict.about.vision.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {dict.about.vision.text}
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="border-t border-slate-200 pt-12">
                <h2 className="font-display text-2xl font-bold text-brand-950 sm:text-3xl">
                  {dict.about.values.title}
                </h2>
                <ul className="mt-5 space-y-4">
                  {dict.about.values.items.map((value) => (
                    <li key={value.title} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                        <span className="font-semibold text-brand-950">
                          {value.title}:
                        </span>{" "}
                        {value.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
