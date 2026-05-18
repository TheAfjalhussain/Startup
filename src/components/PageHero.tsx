import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}

export const PageHero = ({ eyebrow, title, description, children }: PageHeroProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.45]" aria-hidden="true" />
      <div className="container-px mx-auto max-w-[1440px] py-16 md:py-24">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="heading-display mt-5 text-foreground">{title}</h1>
            {description && <p className="lede mt-6 max-w-2xl">{description}</p>}
          </div>
          {children && <div className="md:col-span-4">{children}</div>}
        </div>
      </div>
    </section>
  );
};
