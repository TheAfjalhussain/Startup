import { Link } from "react-router-dom";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section id="contact" className="section bg-surface">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-brand p-10 text-primary-foreground md:p-16 lg:p-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
                <span className="h-px w-8 bg-primary-foreground/60" />
                Start a conversation
              </span>
              <h2 className="heading-display mt-5 text-primary-foreground">
                Ready to build with a serious partner?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                Tell us about your goals. We'll respond within one business day with a clear next step.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-4 text-foreground shadow-elevated transition-transform duration-300 ease-smooth hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="font-medium">Start a project</span>
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="https://wa.me/?text=Hi%20Growthix%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  className="group inline-flex items-center justify-between gap-4 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-4 text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4" />
                    <span className="font-medium">Talk on WhatsApp</span>
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
