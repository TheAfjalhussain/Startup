const quotes = [
  {
    q: "Growthix help me to build complete startup from scratch. They are very professional and supportive. I highly recommend them for anyone looking to build a successful startup.",
    n: "Afjal Hussain",
    r: "FOUNDER, STALLO",
  },
  {
    q: "They understand our goals, adapt to our needs, and consistently deliver work that exceeds expectations.",
    n: "Amit Dubey",
    r: "FOUNDER, AYUVENGER BIOTECH",
  },
  {
    q: "From strategy to launch, branding, marketing, business strategy — every detail was considered. The platform they built is now central to how we operate.",
    n: "Amit Raj",
    r: "CO-FOUNDER, CLAYZIO",
  },
  {
    q: "Partnering with Growthix was one of the best decisions for our company. They understood our goals clearly and helped us improve our online presence with a structured, thoughtful approach.",
    n: "Kajal Prajapati",
    r: "FOUNDER, BOOKWORM ECOSYSTEM",
  },
  {
    q: "The team at Growthix is exceptional. They took the time to understand our unique challenges and delivered a tailored solution that has significantly improved our work and operations.",
    n: "Prakash Singh",
    r: "FOUNDER, MAHI SOLUTIONS",
  },
  {
    q: "After partnering with Growthix, our digital channels became a major growth driver. Today, our marketing efforts generate more leads than ever before, and we have a clear strategy for how to continue growing.",
    n: "Ramchandra Kumar Soni",
    r: "DIRECTOR, R.K MISSION SCHOOL",
  },
];

export const Testimonials = () => {
  return (
    <section className="section bg-surface">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <span className="eyebrow">Client trust</span>
          <h2 className="heading-xl mt-4 text-foreground">
            Words from leaders we partner with.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.n} className="flex flex-col justify-between gap-8 bg-card p-8 md:p-10">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary/30" fill="currentColor" aria-hidden="true">
                <path d="M9 7H5a2 2 0 0 0-2 2v6h6v-6H6c0-1.1.9-2 2-2V7zm10 0h-4a2 2 0 0 0-2 2v6h6v-6h-2c0-1.1.9-2 2-2V7z" />
              </svg>
              <blockquote className="font-display text-lg leading-relaxed text-foreground">
                "{q.q}"
              </blockquote>
              <figcaption className="border-t border-border pt-5">
                <div className="text-sm font-semibold text-foreground">{q.n}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{q.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
