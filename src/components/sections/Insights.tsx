import { ArrowUpRight } from "lucide-react";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

const articles = [
  {
    img: insight1,
    cat: "Strategy",
    date: "Apr 2026",
    title: "The new operating model for service-led growth.",
    desc: "Why structure, not noise, is the strongest lever for compounding business outcomes.",
  },
  {
    img: insight2,
    cat: "Technology",
    date: "Mar 2026",
    title: "Engineering for clarity: building systems leaders can trust.",
    desc: "How disciplined platforms reduce risk and unlock speed for global organizations.",
  },
  {
    img: insight3,
    cat: "Brand",
    date: "Feb 2026",
    title: "Premium identity in a world of templated brands.",
    desc: "What separates enduring brands from forgettable ones — and what it takes to build one.",
  },
];

export const Insights = () => {
  return (
    <section id="insights" className="section bg-background">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Insights</span>
            <h2 className="heading-xl mt-4 text-foreground">Thinking that informs how we build.</h2>
          </div>
          <a href="#" className="md:col-span-5 md:justify-self-end inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
            All insights <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {articles.map((a) => (
            <a key={a.title} href="#" className="group flex flex-col">
              <div className="aspect-[5/3] overflow-hidden rounded-2xl border border-border">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="font-semibold text-primary">{a.cat}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{a.date}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                Read article <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
