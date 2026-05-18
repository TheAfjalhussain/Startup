import map from "@/assets/global-map.jpg";

const regions = [
  { code: "USA", city: "New York · San Francisco" },
  { code: "UK", city: "London" },
  { code: "Germany", city: "Berlin · Munich" },
  { code: "UAE", city: "Dubai · Abu Dhabi" },
  { code: "India", city: "Bengaluru · Mumbai" },
  { code: "Singapore", city: "APAC hub" },
];

export const GlobalReach = () => {
  return (
    <section className="section bg-background">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Global reach</span>
            <h2 className="heading-xl mt-4 text-foreground">
              A distributed team built for international engagements.
            </h2>
          </div>
          <p className="md:col-span-5 lede md:text-right">
            We collaborate across time zones with structured rituals — the way
            modern global teams should operate.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-soft">
              <img src={map} alt="Global presence map" loading="lazy" className="aspect-[16/10] w-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              {regions.map((r, i) => (
                <div
                  key={r.code}
                  className={`flex items-center justify-between p-5 md:p-6 ${i !== 0 ? "border-t border-border" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald shadow-[0_0_12px_hsl(var(--accent-emerald))]" />
                    <span className="font-display text-lg font-semibold text-foreground">{r.code}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{r.city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
