import {
  HeartPulse, Landmark, ShoppingBag, GraduationCap, Building2,
  Factory, Cloud, Truck, Briefcase, Store, Hotel, Cpu,
} from "lucide-react";

const industries = [
  { name: "Healthcare", icon: HeartPulse, ctx: "Patient platforms, compliance-grade systems." },
  { name: "Retail", icon: ShoppingBag, ctx: "Omni-channel commerce and brand systems." },
  { name: "Education", icon: GraduationCap, ctx: "Learning platforms and institutional brands." },
  { name: "Real Estate", icon: Building2, ctx: "Property platforms and digital experiences." },
  { name: "Manufacturing", icon: Factory, ctx: "Industrial workflows, ops and dashboards." },
  { name: "SaaS", icon: Cloud, ctx: "Product, growth and platform engineering." },
  { name: "Logistics", icon: Truck, ctx: "Fleet, freight and operations systems." },
  { name: "Professional Services", icon: Briefcase, ctx: "Brand, web and operational tooling." },
  { name: "E-commerce", icon: Store, ctx: "Storefronts, conversion and lifecycle." },
  { name: "Hospitality", icon: Hotel, ctx: "Guest journeys and brand experience." },
  { name: "Technology", icon: Cpu, ctx: "Deep-tech, platforms and product growth." },
];

export const Industries = () => {
  return (
    <section id="industries" className="section bg-background">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Industries</span>
            <h2 className="heading-xl mt-4 text-foreground">
              Built for the industries that shape how the world works.
            </h2>
          </div>
          <p className="md:col-span-5 lede md:text-right">
            Sector context informs every decision — from product to brand to system.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ name, icon: Icon, ctx }) => (
            <div
              key={name}
              className="group relative flex flex-col gap-3 bg-card p-6 transition-colors duration-300 hover:bg-surface md:p-8"
            >
              <Icon className="h-6 w-6 text-primary transition-transform duration-500 ease-smooth group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{ctx}</p>
              <div className="mt-2 h-px w-8 bg-primary/0 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
