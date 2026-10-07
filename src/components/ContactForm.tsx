"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Icon } from "./Icon";

type FormLabels = {
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  note: string;
  subjectPrefix: string;
};

type Values = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const empty: Values = { name: "", email: "", company: "", message: "" };

export function ContactForm({
  email,
  labels,
}: {
  email: string;
  labels: FormLabels;
}) {
  const [values, setValues] = useState<Values>(empty);
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof Values) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
    };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `${labels.subjectPrefix} - ${values.name}`,
    );
    const body = encodeURIComponent(
      `${labels.name}: ${values.name}\n${labels.email}: ${values.email}\n${labels.company}: ${values.company}\n\n${values.message}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            {labels.name} *
          </label>
          <input
            id="name"
            name="name"
            required
            value={values.name}
            onChange={update("name")}
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            {labels.email} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={update("email")}
            className={inputClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          {labels.company}
        </label>
        <input
          id="company"
          name="company"
          value={values.company}
          onChange={update("company")}
          className={inputClass}
          autoComplete="organization"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          {labels.message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={update("message")}
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-400 sm:w-auto"
      >
        {labels.submit}
        <Icon name="arrow-right" className="h-4 w-4" />
      </button>

      <p className="text-xs leading-relaxed text-slate-500">
        {sent ? `✓ ${labels.note}` : labels.note}
      </p>
    </form>
  );
}
