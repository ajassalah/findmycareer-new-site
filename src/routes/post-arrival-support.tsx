import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import {
  Plane, Home, BookOpen, CreditCard, Heart, GraduationCap,
  CheckCircle2, ArrowRight, Star,
} from "lucide-react";

import heroImg from "@/assets/Post-Arrival Support.jfif";
import heroImg2 from "@/assets/Post-Arrival Support1.jfif";
import heroImg3 from "@/assets/Post-Arrival Support3.jfif";

export const Route = createFileRoute("/post-arrival-support")({
  head: () => ({
    meta: [
      { title: "Post-Arrival Support — Find My Career" },
      { name: "description", content: "Our commitment doesn't end when you arrive. We support students during their transition into university life and help them settle into their new country." },
    ],
    links: [{ rel: "canonical", href: "/post-arrival-support" }],
  }),
  component: PostArrivalSupportPage,
});

const supportServices = [
  {
    icon: Plane,
    title: "Airport Arrival Guidance",
    color: "from-blue-500/10 to-blue-600/5",
    accent: "text-blue-500",
    iconBg: "bg-blue-500/10",
    items: [
      "Detailed arrival instructions and what to expect",
      "Transportation advice from airport to accommodation",
      "Local navigation support and apps",
    ],
  },
  {
    icon: Home,
    title: "Accommodation Assistance",
    color: "from-purple-500/10 to-purple-600/5",
    accent: "text-purple-500",
    iconBg: "bg-purple-500/10",
    items: [
      "Moving into student housing guidance",
      "Understanding tenancy agreements",
      "Utility and internet setup guidance",
    ],
  },
  {
    icon: BookOpen,
    title: "Student Registration Support",
    color: "from-green-500/10 to-green-600/5",
    accent: "text-green-500",
    iconBg: "bg-green-500/10",
    items: [
      "University enrolment assistance",
      "Course registration guidance",
      "Student ID and library card collection support",
    ],
  },
  {
    icon: CreditCard,
    title: "Banking & Local Setup",
    color: "from-amber-500/10 to-amber-600/5",
    accent: "text-amber-500",
    iconBg: "bg-amber-500/10",
    items: [
      "Bank account setup guidance and documentation",
      "Mobile SIM card recommendations",
      "Public transportation cards and routes",
    ],
  },
  {
    icon: Heart,
    title: "Ongoing Student Support",
    color: "from-red-500/10 to-red-600/5",
    accent: "text-red-500",
    iconBg: "bg-red-500/10",
    items: [
      "Academic adjustment and study skills guidance",
      "Cultural adaptation assistance",
      "Student welfare and wellbeing advice",
      "Referral to university support services",
    ],
  },
  {
    icon: GraduationCap,
    title: "Career & Future Planning",
    color: "from-teal-500/10 to-teal-600/5",
    accent: "text-teal-500",
    iconBg: "bg-teal-500/10",
    items: [
      "Part-time work eligibility and guidance",
      "Internship opportunities and CV support",
      "Graduate pathway information",
      "Post-study visa and settlement information",
    ],
  },
];

const trustReasons = [
  "Personalised support from day one of arrival",
  "Dedicated advisor throughout your academic journey",
  "Multilingual support — English, Sinhala & Tamil",
  "Network of contacts across universities",
  "Referral to professional and legal services",
  "24/7 emergency contact support",
];

function PostArrivalSupportPage() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        eyebrow="Our Services"
        title={<>Post-Arrival <span className="text-accent">Support</span></>}
        subtitle="Our commitment does not end when you reach your destination. We continue to support students during their transition into university life, helping them settle in and focus on success."
      />

      {/* Intro + Images */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #10B98144 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Supporting Your Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Supporting You Beyond Your Arrival</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Moving to a new country is a major life change. Beyond securing admission, we believe successful international education requires ongoing support — from the moment you land to graduation and beyond.
              </p>
              <div className="space-y-3 pt-2">
                {trustReasons.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="bg-accent/10 p-1 rounded-full shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="col-span-2 rounded-2xl overflow-hidden aspect-video shadow-lg">
                <img src={heroImg3} alt="Post-arrival support" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                <img src={heroImg} alt="Student life support" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                <img src={heroImg2} alt="Career guidance" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.08)} className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">What We Provide</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Our Post-Arrival Services Include</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Six pillars of support to help you settle in, succeed academically, and plan your future.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group bg-gradient-to-br ${service.color} border border-border hover:shadow-lg rounded-2xl p-7 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform`}>
                    <service.icon className={`w-6 h-6 ${service.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${service.accent.replace("text-", "bg-")}`} />
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

      {/* Trust Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-[#0A1628] text-white rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, #10B98155 0%, transparent 70%)" }}
              />
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Our Students Trust Us</h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    We believe successful international education extends beyond securing admission. Our dedicated support ensures students feel confident, connected, and prepared throughout their entire study abroad journey.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-slate-300 text-sm italic border-l-4 border-accent pl-4">
                    "Find My Career didn't just help me get admitted — they supported me from landing at the airport to enrolling in my courses. I never felt alone."
                  </p>
                  <a
                    href="https://register.findmycareer.org.uk/apply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow-gold)] hover:scale-105 transition-transform"
                  >
                    Book a Free Consultation <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FreeConsultationCTA />
    </div>
  );
}
