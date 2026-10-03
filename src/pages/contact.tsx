import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
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
import { DESTINATIONS, SERVICES, SITE } from "@/lib/data";
import { COUNTRIES, flagForCountry } from "@/lib/countries";

type ContactSearch = {
  interestedIn?: string;
  message?: string;
};

const normalizeSearchValue = (value: unknown) => (typeof value === "string" ? value : "");


const mapUrl = (address: string) => `https://maps.google.com/?q=${encodeURIComponent(address)}`;
const mapEmbedUrl = (address: string) => `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: `${SITE.phone} / ${SITE.ukPhone}`,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE.ukPhone,
    href: `https://wa.me/${SITE.ukPhone.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  ...SITE.addresses.map((location) => ({
    icon: MapPin,
    label: `Visit - ${location.label}`,
    value: location.address,
    href: mapUrl(location.address),
  })),
];

export default function ContactPage() {
  const { query } = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [country, setCountry] = useState("LK");
  const selectedCountry = COUNTRIES.find((item) => item.code === country);
  const search: ContactSearch = {
    interestedIn: normalizeSearchValue(query.interestedIn),
    message: normalizeSearchValue(query.message),
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Contact submission failed");
      }
      setStatus("success");
      formElement.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your enquiry.");
    }
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
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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

              <div className="grid gap-5 sm:grid-cols-2">
                {SITE.addresses.map((location) => (
                  <div key={location.label} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    <iframe
                      title={`Find My Career ${location.label} office location`}
                      src={mapEmbedUrl(location.address)}
                      className="h-72 w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                ))}
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
                    Send your enquiry directly to our admissions team.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label="Full name" name="name" placeholder="Your full name" minLength={2} required />
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="country">Country <span className="text-red-500">*</span></label>
                  <select id="country" name="country" value={country} onChange={(event) => setCountry(event.target.value)} required className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                    <option value="">Select your country</option>
                    {COUNTRIES.map((item) => <option key={item.code} value={item.code}>{flagForCountry(item.code)} {item.name}{item.dialCode ? ` (${item.dialCode})` : ""}</option>)}
                  </select>
                </div>
                <Field label="Phone number" name="phone" placeholder={`e.g. ${selectedCountry?.dialCode || "+country code"} 77 123 4567`} minLength={10} pattern="[+0-9 ()-]{10,}" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="interestedIn">
                    Interested in
                  </label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    defaultValue={search.interestedIn}
                    required
                    className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a service or destination</option>
                    <optgroup label="Services">
                      {SERVICES.map((service) => <option key={service.to} value={service.title}>{service.title}</option>)}
                    </optgroup>
                    <optgroup label="Destinations">
                      {DESTINATIONS.map((destination) => <option key={destination.to} value={`Study in ${destination.name}`}>Study in {destination.name}</option>)}
                    </optgroup>
                    <option value="Innovator Founder Visa">Innovator Founder Visa</option>
                  </select>
                </div>
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
                    minLength={10}
                    required
                    className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-[var(--shadow-glow-gold)] transition-transform hover:scale-[1.02] sm:w-auto">
                  {status === "sending" ? "Sending…" : "Send enquiry"} <ArrowRight className="h-4 w-4" />
                </button>
                {status === "success" && <p role="status" className="text-sm text-green-600">Thanks — your enquiry has been sent. We’ll be in touch soon.</p>}
                {status === "error" && <p role="alert" className="text-sm text-red-600">{errorMessage} Please email {SITE.email} directly if the problem continues.</p>}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {status === "success" && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/60 px-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Enquiry sent">
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-2xl">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-3xl text-green-600">✓</div>
            <h2 className="mt-5 text-2xl font-bold text-foreground">Enquiry sent successfully</h2>
            <p className="mt-2 text-muted-foreground">Thank you for contacting Find My Career. Our team will get back to you soon.</p>
            <button type="button" onClick={() => setStatus("idle")} className="mt-6 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Close</button>
          </div>
        </div>
      )}
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
