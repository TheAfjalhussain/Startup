import { PageHero } from "@/components/PageHero";
import { WhyGrowthix } from "@/components/sections/WhyGrowthix";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story4 from "@/assets/story-4.jpg";

const values = [
  { t: "Clarity", d: "We reduce complexity into structured, deliverable systems." },
  { t: "Craft", d: "Every artifact, code line and pixel meets a senior bar." },
  { t: "Outcomes", d: "We measure success by business impact, not deliverables." },
  { t: "Partnership", d: "Long-term thinking, transparent communication, shared ownership." },
];

const About = () => (
  <>
    <PageHero
      eyebrow="About Growthix"
      title={<>A premium service company <span className="text-emerald">built for serious business.</span></>}
      description="Growthix was founded to operate as a single trusted partner across strategy, technology, design and growth — combining the discipline of a global firm with the focus of a specialized team."
    />

    <section className="section bg-background">
      <div className="container-px mx-auto max-w-[1440px] grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elevated">
            <img src={story1} alt="Growthix strategy" className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-6 self-center">
          <span className="eyebrow">Our story</span>
          <h2 className="heading-xl mt-4 text-foreground">One company. Multiple specialized divisions.</h2>
          <p className="lede mt-6">
            Growthix exists to give ambitious organizations a single, dependable
            partner — one that can think strategically, build engineered systems,
            craft enduring brands and scale modern marketing.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            From a tightly-run studio in 2022 to a distributed team operating
            across the India, our work has always been
            grounded in the same standard: clarity, craft, and outcomes that
            compound over time.
          </p>
        </div>
      </div>
    </section>

    <section className="section bg-surface">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <span className="eyebrow">Values</span>
          <h2 className="heading-xl mt-4 text-foreground">Principles that shape every engagement.</h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="bg-card p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={story2} alt="Engineered systems" className="aspect-[16/10] w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={story4} alt="Global presence" className="aspect-[16/10] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <WhyGrowthix />
    <GlobalReach />
    <ContactCTA />
  </>
);

export default About;
