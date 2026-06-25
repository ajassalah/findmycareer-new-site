import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { FormEvent } from "react";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/data";

type ContactSearch = {
  interestedIn?: string;
  message?: string;
};

const normalizeSearchValue = (value: unknown) => (typeof value === "string" ? value : "");

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    interestedIn: normalizeSearchValue(search.interestedIn),
    message: normalizeSearchValue(search.message),
  }),
  head: () => ({
    meta: [
      { title: "Contact Find My Career - Free Study Abroad Consultation" },
      {
        name: "description",
        content:
          "Contact Find My Career in Colombo for university applications, visas, IELTS preparation, scholarships, and study abroad guidance.",
      },
      { property: "og:title", content: "Contact Find My Career" },
      {
        property: "og:description",
        content:
          "Speak with our study abroad advisors and start planning your next step.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MapPin,
    label: "Visit",
    value: SITE.address,
    href: "https://maps.google.com/?q=No.+18+Beltona+Lane+Colombo+04+Sri+Lanka",
  },
];

function ContactPage() {
  const search = Route.useSearch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim() ?? "";
    const email = form.get("email")?.toString().trim() ?? "";
    const phone = form.get("phone")?.toString().trim() ?? "";
    const interestedIn = form.get("interestedIn")?.toString().trim() ?? "";
    const message = form.get("message")?.toString().trim() ?? "";

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      interestedIn && `Interested in: ${interestedIn}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Study abroad consultation request")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Talk to a <span className="text-accent">study abroad advisor</span></>}
        subtitle="Book a free consultation for university applications, student visas, IELTS preparation, scholarships, and relocation planning."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.08)}
            className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start"
          >
            <motion.div variants={fadeUp} className="space-y-5">
              {contactCards.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Visit" ? "_blank" : undefined}
                  rel={item.label === "Visit" ? "noopener noreferrer" : undefined}
                  className="group flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-base font-semibold text-foreground group-hover:text-accent">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}

              <div className="rounded-2xl border border-border bg-secondary p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric/15 text-electric">
                    <Clock className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Office hours</h2>
                    <p className="mt-2 text-muted-foreground">
                      Monday to Saturday, 9:00 AM to 6:00 PM. Send a message any time and an advisor will follow up as soon as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <iframe
                  title="Find My Career office location"
                  src="https://www.google.com/maps?q=No.%2018%20Beltona%20Lane%20Colombo%2004%20Sri%20Lanka&output=embed"
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] lg:p-10">
              <div className="mb-8 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your email app will open with the details ready to send.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" name="name" placeholder="Your name" required />
                  <Field label="Phone" name="phone" placeholder="+94 ..." />
                </div>
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                <Field
                  label="Interested in"
                  name="interestedIn"
                  placeholder="Student visa, IELTS, Innovator Founder Visa..."
                  defaultValue={search.interestedIn}
                />
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    defaultValue={search.message}
                    placeholder="Tell us about your goals, destination, timeline, and current qualifications."
                    className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-[var(--shadow-glow-gold)] transition-transform hover:scale-[1.02] sm:w-auto">
                  Send enquiry <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground" htmlFor={rest.name}>
        {label}
      </label>
      <input
        id={rest.name}
        {...rest}
        className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>
  );
}
