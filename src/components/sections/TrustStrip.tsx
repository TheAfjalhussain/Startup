const logos = [
  "STALLO", "CLAYZIO", "AYUVENGER", "BOOKWORM", "GULMOHAR CERAMIC", "MAHI SOLUTIONS", "R.K MISSION", "POLARIS STUDIO"
];

export const TrustStrip = () => {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-px mx-auto max-w-[1440px] py-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by ambitious teams across <span className="text-foreground"> · India</span>
          </p>
          <div className="hidden h-px flex-1 bg-border md:mx-8 md:block" />
        </div>

        <div className="relative mt-8 overflow-hidden">
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
          <div className="flex w-max marquee gap-14">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="font-display text-xl font-bold tracking-[0.18em] text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
