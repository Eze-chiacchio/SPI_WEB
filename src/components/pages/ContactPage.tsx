import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n";
import { site } from "@/lib/site";

export function ContactPage({ dict }: { dict: Dictionary }) {
  const info = [
    {
      icon: "mail" as const,
      title: dict.contact.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: "clock" as const,
      title: dict.contact.hoursTitle,
      value: dict.contact.hoursValue,
    },
    {
      icon: "map-pin" as const,
      title: dict.common.location,
      value: dict.brand.name,
    },
    {
      icon: "linkedin" as const,
      title: dict.contact.linkedinLabel,
      value: dict.common.followUs,
      href: site.linkedin,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={dict.contact.eyebrow}
        title={dict.contact.title}
        lead={dict.contact.lead}
        image="/images/obra-3.jpg"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-950">
                  {dict.contact.companyLabel}
                </h2>
                <p className="mt-2 text-slate-600">{dict.contact.hoursNote}</p>

                <ul className="mt-8 space-y-6">
                  {info.map((item) => {
                    const content = (
                      <>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                          <Icon name={item.icon} className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {item.title}
                          </span>
                          <span className="mt-0.5 block text-sm font-medium text-brand-950">
                            {item.value}
                          </span>
                        </span>
                      </>
                    );

                    return (
                      <li key={item.title}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex items-start gap-4 rounded-xl transition-colors hover:text-brand-700"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex items-start gap-4">
                            {content}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-9">
                <ContactForm email={site.email} labels={dict.contact.form} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
