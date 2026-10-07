import { Icon, type IconName } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n";

export function AboutPage({ dict }: { dict: Dictionary }) {
  const blocks: { icon: IconName; title: string; text: string }[] = [
    { icon: "flag", ...dict.about.mission },
    { icon: "globe", ...dict.about.vision },
    ...dict.about.values.items.map((value) => ({
      icon: value.icon as IconName,
      title: value.title,
      text: value.text,
    })),
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {blocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 60}>
                <article className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-900/5 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-800 text-accent-400">
                    <Icon name={block.icon} className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-brand-950 sm:text-2xl">
                      {block.title}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">
                      {block.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
