import { ArrowUpRight } from "lucide-react";
import growth from "@/assets/division-growth.jpg";
import tech from "@/assets/division-tech.jpg";
import design from "@/assets/division-design.jpg";
import marketing from "@/assets/division-marketing.jpg";
import software from "@/assets/division-software.jpg";

const divisions = [
  {
    n: "01",
    title: "Business Growth",
    line: "Strategy, advisory and growth architecture.",
    desc: "Operating models, GTM design, market entry and revenue systems for serious growth.",
    img: growth,
  },
  {
    n: "02",
    title: "Technology & Product",
    line: "Engineered systems built to scale.",
    desc: "Platforms, integrations, cloud architecture and product engineering — delivered with rigor.",
    img: tech,
  },
  {
    n: "03",
    title: "Branding & Design",
    line: "Identity systems for premium brands.",
    desc: "Strategy, identity, editorial design and craft for organizations building presence.",
    img: design,
  },
  {
    n: "04",
    title: "Marketing & Scale",
    line: "Demand systems for measurable growth.",
    desc: "Performance, content, lifecycle and brand marketing engineered for outcomes.",
    img: marketing,
  },
  {
    n: "05",
    title: "Software Systems",
    line: "Custom SaaS and internal platforms.",
    desc: "Internal tools, dashboards and SaaS products built to operate quietly at scale.",
    img: software,
  },
];

export const Divisions = () => {
  return (
    <section id="divisions" className="section bg-surface">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Divisions</span>
            <h2 className="heading-xl mt-4 text-foreground">
              A full-stack service company, organized by discipline.
            </h2>
          </div>
          <p className="md:col-span-5 lede md:text-right">
            Each division operates with its own depth — and connects through a
            single delivery standard.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d, i) => (
            <a
              key={d.title}
              href="#contact"
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-elevated ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur">
                  {d.n}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                  {d.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-primary">{d.line}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  View division
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
