// import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, PlayCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "../../../public/hero-bg.mp4.asset.json";
import hero from "@/assets/hero-bg.mp4";
import { Link } from "react-router-dom";

const stats = [
  { v: "25+", l: "Projects delivered" },
  { v: "3+", l: "Countries served" },
  { v: "10+", l: "Industries covered" },
  { v: "98%", l: "Client retention" },
];

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden"
    >
      {/* Full-bleed background video */}
      <video
        src={hero}
        poster={heroBg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden="true"
      />
      <img src={heroBg} alt="Growthix enterprise hero" className="sr-only" />

      {/* Cinematic overlays */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 50% 8% / 0.55) 0%, hsl(220 50% 8% / 0.35) 35%, hsl(220 50% 8% / 0.65) 75%, hsl(220 50% 8% / 0.92) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 mix-blend-overlay opacity-40 animate-hero-sheen"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 40%, hsl(152 65% 50% / 0.45) 50%, transparent 60%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        aria-hidden="true"
      />

      <div className="container-px mx-auto w-full max-w-[1440px] pb-16 pt-40 md:pb-24 md:pt-48 lg:pb-28">
        {/* Eyebrow */}
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald" />
          Global multi-division service company
        </div>

        {/* Headline */}
        <h1 className="heading-display reveal reveal-delay-1 mt-8 max-w-5xl text-white">
          Engineering the systems that{" "}
          <span className="italic font-light text-white/90">scale</span> the
          world&apos;s most ambitious businesses.
        </h1>

        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          Growthix unites strategy, design, technology, marketing & consulting under one
          enterprise standard — built for organizations ready to operate at
          global scale.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-foreground shadow-elevated transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95"
          >
            Explore Services <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
          >
            <PlayCircle className="h-4 w-4" /> Talk to Growthix
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Stats bar */}
        <div className="reveal reveal-delay-4 mt-16 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`px-6 py-6 md:px-8 md:py-7 ${
                  i > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""
                } ${i === 1 ? "border-t-0 md:border-l" : ""} ${
                  i === 2 ? "md:border-l" : ""
                }`}
              >
                <div className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 md:flex">
        <span>Scroll</span>
        <span className="h-10 w-px animate-pulse bg-white/40" />
      </div>
    </section>
  );
};
