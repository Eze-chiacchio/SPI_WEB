import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-brand-950 py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="font-display text-6xl font-bold text-accent-500">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
          Página no encontrada / Page not found
        </h1>
        <p className="mt-4 text-slate-400">
          La página que buscás no existe o fue movida. / The page you are
          looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/es"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-400"
          >
            Inicio
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
          <Link
            href="/en"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            Home
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
