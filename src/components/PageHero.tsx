import Image from "next/image";
import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  image = "/images/obra-1.jpg",
  children,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 pt-32 pb-20 sm:pt-40 sm:pb-24">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-950/90 to-brand-900/50" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow={eyebrow}
          title={title}
          lead={lead}
        />
        {children}
      </div>
    </section>
  );
}
