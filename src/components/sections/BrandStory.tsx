import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";

export const BrandStory = () => {
  const tiles = [
    { src: story1, label: "Strategy rooms", h: "tall" },
    { src: story2, label: "Engineered systems", h: "short" },
    { src: story3, label: "Design craft", h: "short" },
    { src: story4, label: "Global presence", h: "tall" },
  ];

  return (
    <section id="about" className="section bg-background">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow">The Growthix story</span>
            <h2 className="heading-xl mt-4 text-foreground">
              One brand. Multiple specialized divisions. A single standard of excellence.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="lede">
              We bring together strategists, engineers, designers and operators
              to help organizations move from intent to impact — quietly,
              precisely, and at international standards of execution.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {tiles.map((t, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${
                t.h === "tall" ? "aspect-[3/4] md:row-span-2 md:aspect-[3/5]" : "aspect-square"
              }`}
            >
              <img
                src={t.src}
                alt={t.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-90" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-xs font-medium uppercase tracking-[0.18em] text-white">
                {t.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
