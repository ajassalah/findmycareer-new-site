import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export const Route = createFileRoute("/contact")({
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
  { icon: MapPin, label: "Office", value: SITE.address },
  { icon: Phone,  label: "Phone",  value: SITE.phone },
  { icon: Mail,   label: "Email",  value: SITE.email },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's plan your <span className="text-accent">journey</span></>}
        subtitle="Free consultation, zero obligation. Available in English, Sinhala and Tamil."
      />
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="lg:col-span-2 space-y-4">
            {info.map((i) => (
              <motion.div key={i.label} variants={fadeUp} className="rounded-2xl border border-border p-5 bg-card flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0">
                  <i.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</p>
                  <p className="font-semibold text-foreground">{i.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 rounded-3xl border border-border p-6 lg:p-8 bg-card shadow-[var(--shadow-elegant)]"
          >
            <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@email.com" />
              <Field label="Phone" placeholder="+94 ..." />
              <Field label="Interested in" placeholder="UK · Master's" />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-foreground">Your message</label>
              <textarea rows={5} placeholder="Tell us about your goals..." className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform">
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
