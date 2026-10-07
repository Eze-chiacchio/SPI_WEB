import { Icon, type IconName } from "./Icon";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: Props) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-brand-950">
        <Icon name={icon as IconName} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-brand-950">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
