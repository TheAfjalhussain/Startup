import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Instagram, Mail, MapPin } from "lucide-react";
import vertical from "@/assets/growthix-vertical.png";

const cols = [
  {
    title: "Company",
    links: [
      { l: "About", to: "/about" },
      { l: "Leadership", to: "/about" },
      { l: "Careers", to: "/about" },
      { l: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { l: "Business Growth", to: "/divisions" },
      { l: "Technology & Product", to: "/divisions" },
      { l: "Branding & Design", to: "/divisions" },
      { l: "Marketing & Scale", to: "/divisions" },
      { l: "Software Systems", to: "/divisions" },
    ],
  },
  {
    title: "Industries",
    links: [
      { l: "Healthcare", to: "/industries" },
      { l: "Finance", to: "/industries" },
      { l: "Retail", to: "/industries" },
      { l: "SaaS", to: "/industries" },
      { l: "Logistics", to: "/industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { l: "Insights", to: "/insights" },
      { l: "Case Studies", to: "/projects" },
      { l: "Services", to: "/services" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container-px mx-auto max-w-[1440px] py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Growthix home" className="inline-block">
              <img src={vertical} alt="Growthix" className="h-40 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Your multi-division partner for business growth, technology, design and digital execution — built for clients across the world.
            </p>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald" />
                <a href="mailto:support@growthix.in" className="hover:text-foreground">support@growthix.in</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-emerald" />
                <span>Global · India</span>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.l}>
                      <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {l.l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Growthix. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/privacy-policy" className="hover:text-foreground">Privacy</a>
            <a href="/terms-of-service" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
            <a href="#" className="hover:text-foreground">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
