import { createFileRoute, useSearch } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

type ContactSearch = {
  interestedIn?: string;
  message?: string;
};

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => {
    return {
      interestedIn: search.interestedIn as string | undefined,
      message: search.message as string | undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Contact Find My Career — Book Your Free Consultation" },
      { name: "description", content: "Talk to our advisors in English, Sinhala or Tamil. Book a free consultation today." },
      { property: "og:title", content: "Contact Find My Career" },
      { property: "og:description", content: "Book your free study-abroad consultation today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const info = [
  { icon: MapPin, label: "Office",  value: SITE.address, href: "https://maps.google.com/?q=No.+18+Beltona+Lane+Colombo+04+Sri+Lanka" },
  { icon: Phone,  label: "Phone",  value: SITE.phone,   href: `tel:${SITE.phone}` },
  { icon: Mail,   label: "Email",  value: SITE.email,   href: `mailto:${SITE.email}` },
];

function Contact() {
  const { interestedIn, message } = Route.useSearch();
  const defaultInterestedIn = interestedIn || "";
  const defaultMessage = message || "";

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's plan your <span className="text-accent">journey</span></>}
        subtitle="Free consultation, zero obligation. Available in English, Sinhala and Tamil."
      />
      <section className="py-20 bg-background max-w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8 w-full">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="lg:col-span-2 space-y-4 max-w-full">
            {info.map((i) => (
              <motion.div key={i.label} variants={fadeUp} className="rounded-2xl border border-border p-5 bg-card flex gap-4 max-w-full">
                <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                  <i.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</p>
                  <a href={i.href} target={i.label === "Office" ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-foreground hover:text-accent transition-colors block break-words whitespace-normal">{i.value}</a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            key={defaultInterestedIn + defaultMessage}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 rounded-3xl border border-border p-5 sm:p-6 lg:p-8 bg-card shadow-[var(--shadow-elegant)] max-w-full w-full"
          >
            <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@email.com" />
              <Field label="Phone" placeholder="+94 ..." />
              <Field label="Interested in" placeholder="UK · Master's" defaultValue={defaultInterestedIn} />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-foreground">Your message</label>
              <textarea rows={5} placeholder="Tell us about your goals..." defaultValue={defaultMessage} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent max-w-full" />
            </div>
            <button className="mt-6 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform w-full sm:w-auto">
              Send message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input {...rest} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
    </div>
  );
}
