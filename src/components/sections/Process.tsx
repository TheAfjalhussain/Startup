const steps = [
  { n: "01", t: "Discover", d: "Deep-dive into business, customers and current systems.", o: "Aligned brief & opportunities" },
  { n: "02", t: "Define", d: "Strategy, scope and success metrics — co-owned with leadership.", o: "Roadmap & success metrics" },
  { n: "03", t: "Design", d: "Experience, brand and system design at editorial standards.", o: "High-fidelity blueprints" },
  { n: "04", t: "Build", d: "Senior engineering teams shipping in disciplined increments.", o: "Production systems" },
  { n: "05", t: "Launch", d: "Coordinated GTM, brand and product launch.", o: "Market readiness" },
  { n: "06", t: "Optimize", d: "Continuous measurement and iteration against outcomes.", o: "Compound results" },
  { n: "07", t: "Support", d: "Long-term partnership for evolution, scale and stability.", o: "Sustained growth" },
];

export const Process = () => {
  return (
    <section className="section bg-background">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <span className="eyebrow">How we work</span>
          <h2 className="heading-xl mt-4 text-foreground">
            A delivery system, not a creative gamble.
          </h2>
          <p className="lede mt-6">
            Seven disciplined phases that move every engagement from clarity to compounding outcomes.
          </p>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`relative bg-card p-8 transition-colors hover:bg-surface ${
                i === steps.length - 1 ? "lg:col-start-1 xl:col-start-auto" : ""
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl font-bold text-primary/30">{s.n}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Step</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Outcome</p>
                <p className="mt-1 text-sm font-medium text-foreground">{s.o}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
