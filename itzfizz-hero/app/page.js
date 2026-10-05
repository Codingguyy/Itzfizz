import Hero from "../components/Hero";

export default function Page() {
  return (
    <main>
      <Hero />
      <section className="flex min-h-[60vh] items-center justify-center px-6 text-center">
        <p className="max-w-xl text-xl font-light leading-relaxed text-muted">
          Every movement above is driven by your scroll position, not a timer.
        </p>
      </section>
    </main>
  );
}
