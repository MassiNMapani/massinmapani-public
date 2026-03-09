import Link from "next/link";

export default function NotFound() {
  return (
    <section className="rounded-3xl border border-white/10 bg-panel/40 p-10 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-rose">404</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-3 text-stone">The page you requested does not exist.</p>
      <Link href="/" className="mt-6 inline-block rounded-full border border-rose/50 px-5 py-2 text-sm text-ink hover:border-rose">
        Return home
      </Link>
    </section>
  );
}
