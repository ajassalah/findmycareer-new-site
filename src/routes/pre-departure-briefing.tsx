import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import {
  Plane, Home, Users, CreditCard, Shield, FileCheck, CheckCircle2, ArrowRight,
} from "lucide-react";

import heroImg from "@/assets/Pre-Departure Briefing.jfif";
import heroImg2 from "@/assets/Pre-Departure Briefing 1.jfif";
import heroImg3 from "@/assets/Pre-Departure Briefing3.jfif";

export const Route = createFileRoute("/pre-departure-briefing")({
  head: () => ({
    meta: [
      { title: "Pre-Departure Briefing — Find My Career" },
      { name: "description", content: "Prepare for a successful journey abroad with our comprehensive pre-departure briefing covering travel, accommodation, finance, health and more." },
    ],
    links: [{ rel: "canonical", href: "/pre-departure-briefing" }],
  }),
  component: PreDepartureBriefingPage,
});

const briefingSections = [
  {
    icon: Plane,
    title: "Travel Preparation",
    color: "from-blue-500/10 to-blue-600/5",
    accent: "text-blue-500",
    iconBg: "bg-blue-500/10",
    items: [
      "Flight booking guidance",
      "Airport procedures and check-in tips",
      "Baggage allowance requirements",
      "Travel insurance advice",
    ],
  },
  {
    icon: Home,
    title: "Accommodation Planning",
    color: "from-purple-500/10 to-purple-600/5",
    accent: "text-purple-500",
    iconBg: "bg-purple-500/10",
    items: [
      "University residences and halls",
      "Private accommodation options",
      "Temporary housing arrangements",
      "Rental agreements and tenancy rights",
    ],
  },
  {
    icon: Users,
    title: "Student Life Orientation",
    color: "from-green-500/10 to-green-600/5",
    accent: "text-green-500",
    iconBg: "bg-green-500/10",
    items: [
      "Understanding local culture and customs",
      "Academic expectations and standards",
      "Campus facilities and student unions",
      "Student responsibilities and code of conduct",
    ],
  },
  {
    icon: CreditCard,
    title: "Financial Planning",
    color: "from-amber-500/10 to-amber-600/5",
    accent: "text-amber-500",
    iconBg: "bg-amber-500/10",
    items: [
      "Opening bank accounts abroad",
      "Currency exchange information",
      "Budget management tips",
      "International payment methods",
    ],
  },
  {
    icon: Shield,
    title: "Health & Safety Guidance",
    color: "from-red-500/10 to-red-600/5",
    accent: "text-red-500",
    iconBg: "bg-red-500/10",
    items: [
      "Overview of local healthcare systems",
      "Emergency contacts and procedures",
      "Student wellbeing and mental health resources",
      "Safety precautions in your new city",
    ],
  },
  {
    icon: FileCheck,
    title: "Documentation Checklist",
    color: "from-teal-500/10 to-teal-600/5",
    accent: "text-teal-500",
    iconBg: "bg-teal-500/10",
    items: [
      "Passport and visa documents",
      "Offer letter and CAS / CoE documents",
      "Medical and vaccination records",
      "Financial documents and bank statements",
      "Emergency contact information",
    ],
  },
];

function PreDepartureBriefingPage() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        eyebrow="Our Services"
        title={<>Pre-Departure <span className="text-accent">Briefing</span></>}
        subtitle="Moving to a new country for education is exciting, but it also comes with challenges. Our comprehensive pre-departure briefing equips you with the essential information and confidence you need."
      />

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 9, repeat: Infinity }} className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #3B82F644 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-3">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="col-span-2 rounded-2xl overflow-hidden aspect-video shadow-lg">
                  <img src={heroImg} alt="Pre-departure briefing" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                  <img src={heroImg2} alt="Travel preparation" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                  <img src={heroImg3} alt="Student life orientation" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-6">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">What We Cover</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Prepare for a Successful Journey Abroad</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our pre-departure briefing covers everything from your flight and accommodation to local culture, finances, and safety — so you arrive with confidence, not anxiety.
              </p>
              <div className="space-y-3 pt-2">
                {["Travel & flight guidance", "Accommodation arrangements", "Financial and banking setup", "Healthcare and safety prep", "Cultural orientation", "Complete documentation checklist"].map((item, i) => (
                  <motion.div key={i} className="flex items-center gap-3" initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <div className="bg-accent/10 p-1 rounded-full shrink-0"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Briefing Sections Grid */}
      <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.08)} className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Session Breakdown</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">What We Cover in the Briefing</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Six comprehensive modules to prepare you for every aspect of your new life abroad.</motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {briefingSections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group bg-gradient-to-br ${section.color} border border-border hover:shadow-lg rounded-2xl p-7 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${section.iconBg} flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform`}>
                    <section.icon className={`w-6 h-6 ${section.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${section.accent.replace("text-", "bg-")}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-[#0A1628] text-white rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 7, repeat: Infinity }} className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #F59E0B55 0%, transparent 70%)" }} />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Goal</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  We ensure every student departs with confidence, knowing exactly what to expect upon arrival and how to adapt successfully to their new environment.
                </p>
                <a href="https://register.findmycareer.org.uk/apply" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow-gold)] hover:scale-105 transition-transform">
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FreeConsultationCTA />
    </div>
  );
}
