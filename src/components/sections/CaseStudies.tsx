import { ArrowUpRight } from "lucide-react";
import fintech from "@/assets/case-fintech.jpg";
import retail from "@/assets/case-retail.jpg";
import D2C from "@/assets/D2C.png";
import health from "@/assets/case-health.jpg";
import hospitality from "@/assets/Hospitality.png";

const cases = [
  {
    img: hospitality,
    industry: "Hospitality · INDIA",
    title: "Building a modern booking and operations platform for wedding food stalls.",
    challenge: "Scattered enquiries, manual coordination, and slow follow-ups were reducing booking conversions.",
    division: "Platform Design & Growth",
    result: "+42% faster enquiry handling · 3× better booking visibility",
  },
  {
    img: D2C,
    industry: "Retail · INDIA",
    title: "Launching a premium DTC commerce experience across the GCC.",
    challenge: "A heritage brand needed to reach digitally-native customers without losing identity.",
    division: "Online MarketPlace · Branding & Design · Marketing & Scale",
    result: "2.7× online revenue in 4 months",
  },
  {
    img: health,
    industry: "Healthcare · INDIA",
    title: "Operational platform & MarketPlace for a Ayurvadic Company.",
    challenge: "Manual workflows and disconnected systems were slowing care delivery.",
    division: "Software Systems, Marketplace Strategy & Growth",
    result: "Reduced admin time · standardized care pathways · 3× more sales growth in 6 months",
  },
];

export const CaseStudies = () => {
  return (
    <section id="cases" className="section bg-surface">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Selected work</span>
            <h2 className="heading-xl mt-4 text-foreground">
              Outcomes our clients can point to.
            </h2>
          </div>
          <a
            href="#"
            className="md:col-span-5 md:justify-self-end inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            View all case studies
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {cases.map((c, i) => (
            <article key={c.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
                  <img src={c.img} alt={c.title} loading="lazy" className="aspect-[16/11] w-full object-cover" />
                </div>
              </div>
              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{c.industry}</p>
                <h3 className="heading-lg mt-4 text-foreground">{c.title}</h3>
                <div className="mt-8 grid gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Challenge</p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Division</p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground">{c.division}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Result</p>
                    <p className="mt-1 font-display text-lg font-semibold text-foreground">{c.result}</p>
                  </div>
                </div>
                <a href="#" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read case study <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
