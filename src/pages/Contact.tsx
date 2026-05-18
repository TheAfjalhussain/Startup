import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Mail, MessageCircle, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<null | "ok" | "error">(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    const body = `Hi Growthix,%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0ACompany: ${encodeURIComponent(form.company)}%0A%0A${encodeURIComponent(form.message)}`;
    window.location.href = `mailto:support@growthix.in?subject=New%20enquiry%20from%20${encodeURIComponent(form.name)}&body=${body}`;
    setStatus("ok");
  };

  const whatsappHref = () => {
    const text = `Hi Growthix, I'm ${form.name || "[name]"} Our Contact email ${form.email || "[email]" } from ${form.company || "[company]"}. ${form.message || "I'd like to discuss a project."}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's start <span className="text-emerald">a conversation.</span></>}
        description="Tell us about your goals. We respond within one business day with a clear next step."
      />

      <section className="section bg-background">
        <div className="container-px mx-auto max-w-[1440px] grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="heading-lg text-foreground">Reach the team directly.</h2>
            <p className="lede mt-4">Choose the channel that suits you. All enquiries are reviewed by a senior partner.</p>

            <div className="mt-10 space-y-4">
              {[
                { i: Mail, l: "Email", v: "support@growthix.in", href: "mailto:support@growthix.in" },
                { i: Phone, l: "Phone", v: "+91 7667845540", href: "tel:+917667845540" },
                { i: MessageCircle, l: "WhatsApp", v: "Chat with us", href: whatsappHref() },
                { i: MapPin, l: "Headquarters", v: "Distributed · IN" },
              ].map(({ i: Icon, l, v, href }) => (
                <div key={l} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
                    {href ? (
                      <a href={href} className="mt-1 block font-medium text-foreground hover:text-primary">{v}</a>
                    ) : (
                      <div className="mt-1 font-medium text-foreground">{v}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-elevated md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Your name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              </div>
              <div className="mt-5">
                <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              </div>
              <div className="mt-5">
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Tell us about your project, timeline and goals."
                />
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-destructive">Please fill in name, email and message.</p>
              )}
              {status === "ok" && (
                <p className="mt-4 text-sm text-emerald">Opening your email client…</p>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="btn-primary">
                  Send enquiry <ArrowRight className="h-4 w-4" />
                </button>
                <a href={whatsappHref()} target="_blank" rel="noreferrer" className="btn-ghost">
                  Send via WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, value, onChange, type = "text", required = false }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) => (
  <div>
    <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      {label}{required && " *"}
    </label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
    />
  </div>
);

export default Contact;
