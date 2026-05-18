import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const primary = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", mega: "services" as const },
  { label: "Divisions", to: "/divisions", mega: "divisions" as const },
  { label: "Industries", to: "/industries" },
  { label: "Projects", to: "/projects" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

const megaMenus = {
  services: {
    title: "What we do",
    desc: "End-to-end services delivered by senior, multi-disciplinary teams.",
    columns: [
      {
        heading: "Strategy",
        items: [
          { label: "Business Growth Advisory", to: "/services" },
          { label: "Go-to-Market Strategy", to: "/services" },
          { label: "Operating Model Design", to: "/services" },
        ],
      },
      {
        heading: "Build",
        items: [
          { label: "Product Engineering", to: "/services" },
          { label: "Custom Software Systems", to: "/services" },
          { label: "Cloud & Platform", to: "/services" },
        ],
      },
      {
        heading: "Brand & Scale",
        items: [
          { label: "Branding & Identity", to: "/services" },
          { label: "Web & Digital Design", to: "/services" },
          { label: "Marketing & Performance", to: "/services" },
        ],
      },
    ],
  },
  divisions: {
    title: "Our divisions",
    desc: "One brand, organized into specialized practice areas.",
    columns: [
      {
        heading: "Divisions",
        items: [
          { label: "Business Growth", to: "/divisions" },
          { label: "Technology & Product", to: "/divisions" },
          { label: "Branding & Design", to: "/divisions" },
          { label: "Marketing & Scale", to: "/divisions" },
          { label: "Software Systems", to: "/divisions" },
        ],
      },
      {
        heading: "Resources",
        items: [
          { label: "Case Studies", to: "/projects" },
          { label: "Insights", to: "/insights" },
          { label: "Industries", to: "/industries" },
        ],
      },
      {
        heading: "Engage",
        items: [
          { label: "Talk to Growthix", to: "/contact" },
          { label: "Partner with us", to: "/contact" },
          { label: "Careers", to: "/about" },
        ],
      },
    ],
  },
} as const;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<null | "services" | "divisions">(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMega(null); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      onMouseLeave={() => setMega(null)}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled || mega
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container-px mx-auto flex h-20 max-w-[1440px] items-center justify-between">
        <Logo size="md" />

        <nav className="hidden items-center gap-1 lg:flex">
          {primary.map((item) =>
            item.mega ? (
              <button
                key={item.label}
                type="button"
                onMouseEnter={() => setMega(item.mega!)}
                onClick={() => setMega(mega === item.mega ? null : item.mega!)}
                className={`relative inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors ${
                  mega === item.mega ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mega === item.mega ? "rotate-180" : ""}`} />
              </button>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                onMouseEnter={() => setMega(null)}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden md:inline-flex btn-primary !py-2.5 !px-5">
            Talk to us
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mega menu */}
      {mega && (
        <div
          onMouseEnter={() => setMega(mega)}
          className="hidden border-t border-border bg-background/95 backdrop-blur-xl lg:block"
        >
          <div className="container-px mx-auto max-w-[1440px] py-12">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="eyebrow">{megaMenus[mega].title}</span>
                <p className="mt-4 font-display text-2xl font-semibold leading-tight text-foreground">
                  {megaMenus[mega].desc}
                </p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                  Start a conversation <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="grid gap-10 lg:col-span-8 lg:grid-cols-3">
                {megaMenus[mega].columns.map((col) => (
                  <div key={col.heading}>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{col.heading}</h4>
                    <ul className="mt-5 space-y-3">
                      {col.items.map((it) => (
                        <li key={it.label}>
                          <Link
                            to={it.to}
                            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                          >
                            {it.label}
                            <ChevronRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-border bg-background shadow-elevated transition-transform duration-500 ease-smooth ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-20 items-center justify-between border-b border-border px-6">
            <Logo size="sm" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-6">
            {primary.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-border/60 py-4 text-base font-medium ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {item.label}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-6 btn-primary">
              Talk to Growthix <ChevronRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
