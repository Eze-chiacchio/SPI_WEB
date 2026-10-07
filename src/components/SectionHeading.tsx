type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-500">
          <span
            className={`h-px w-8 ${tone === "light" ? "bg-accent-400" : "bg-accent-500"}`}
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
          tone === "light" ? "text-white" : "text-brand-950"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-base leading-relaxed text-balance sm:text-lg ${
            tone === "light" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
