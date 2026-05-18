import { PageHero } from "@/components/PageHero";
import { Divisions } from "@/components/sections/Divisions";
import { Process } from "@/components/sections/Process";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Compass, Code2, Palette, Megaphone, Database, BarChart3 } from "lucide-react";

const services = [
  { i: Compass, t: "Business Growth Advisory", d: "Operating models, GTM strategy, market entry and revenue architecture." },
  { i: Code2, t: "Technology & Engineering", d: "Cloud platforms, integrations, product engineering and infrastructure." },
  { i: Palette, t: "Branding & Identity", d: "Strategy, identity systems, editorial design and brand guidelines." },
  { i: Megaphone, t: "Marketing & Performance", d: "Demand systems, content, lifecycle and brand-led performance marketing." },
  { i: Database, t: "Custom Software Systems", d: "Internal tools, dashboards and SaaS products built to scale quietly." },
  { i: BarChart3, t: "Data & Analytics", d: "Pipelines, dashboards and decision systems for leadership clarity." },
];

const Services = () => (
  <>
    <PageHero
      eyebrow="Services"
      title={<>Strategy and execution under <span className="text-emerald">a single delivery standard.</span></>}
      description="Six service areas, one operating bar. Every engagement is led by senior practitioners across strategy, design and engineering."
    />

    <section className="section bg-background">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ i: Icon, t, d }) => (
            <div key={t} className="group relative bg-card p-8 transition-colors hover:bg-surface md:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Divisions />
    <Process />
    <ContactCTA />
  </>
);

export default Services;
