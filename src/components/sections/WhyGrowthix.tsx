import { Layers, Shield, Compass, Globe, Workflow, MessagesSquare } from "lucide-react";

const items = [
  { icon: Layers, t: "One brand, multiple divisions", d: "A single trusted partner for strategy, technology, design and growth." },
  { icon: Compass, t: "Strategy meets execution", d: "We move beyond decks — into shipped systems, brands and outcomes." },
  { icon: Shield, t: "Premium delivery standards", d: "Senior teams, clear processes, predictable results across every engagement." },
  { icon: Workflow, t: "Outcomes over noise", d: "Every initiative ties back to a measurable business outcome." },
  { icon: MessagesSquare, t: "Clear, structured communication", d: "Weekly cadence, written updates, no surprises." },
  { icon: Globe, t: "International readiness", d: "Distributed teams across time zones, ready for global engagements." },
];

export const WhyGrowthix = () => {
  return (
    <section className="section bg-surface">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Why Growthix</span>
            <h2 className="heading-xl mt-4 text-foreground">
              The discipline of a global firm. The clarity of a focused partner.
            </h2>
          </div>
          <p className="md:col-span-5 lede md:text-right">
            Six principles that define how we think, deliver and partner.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group relative bg-card p-8 transition-colors duration-300 hover:bg-background">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
