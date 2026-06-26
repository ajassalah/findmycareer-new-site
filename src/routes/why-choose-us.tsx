import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { StatsSection } from "@/components/stats/StatsSection";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import {
  ShieldCheck, Clock, Globe2, Users, Award, MessageCircle,
  BookOpen, Headphones, Star, CheckCircle2, Sparkles, TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Find My Career — Sri Lanka's Most Trusted Study Abroad Consultancy" },
      { name: "description", content: "17+ years of expertise, 98% visa success rate, and 10,000+ students placed. Discover why Find My Career is the #1 choice for students studying abroad." },
      { property: "og:title", content: "Why Choose Find My Career" },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUs,
});

const advantages = [
  {
    icon: Clock,
    title: "17+ Years of Experience",
    desc: "Since 2007, we've guided thousands of students to top universities. Our team's depth of experience means fewer surprises, faster processing, and better outcomes for you.",
  },
  {
    icon: ShieldCheck,
    title: "98% Visa Success Rate",
    desc: "Our meticulous document preparation and mock interview coaching delivers one of the highest visa approval rates in Sri Lanka — consistently.",
  },
  {
    icon: Globe2,
    title: "150+ Partner Universities",
    desc: "We have direct, official partnerships with leading institutions across the UK, Australia, Canada, Europe and beyond — giving you access to exclusive pathways.",
  },
  {
    icon: Users,
    title: "Multilingual Support",
    desc: "Our advisors serve you in English, Sinhala and Tamil, ensuring every student and family fully understands every step of the journey.",
  },
  {
    icon: Award,
    title: "Scholarship Specialists",
    desc: "We've helped students unlock hundreds of thousands of dollars in scholarships. Our team knows which institutions are most generous and how to write winning applications.",
  },
  {
    icon: MessageCircle,
    title: "Honest, Transparent Advice",
    desc: "We never push a university or program because of commissions. Our advice is always in your best interest — even if it means recommending a different path.",
  },
  {
    icon: BookOpen,
    title: "End-to-End Service",
    desc: "From your first free consultation to post-arrival settlement support, our team handles every step — so you can focus on preparing for your new chapter.",
  },
  {
    icon: Headphones,
    title: "Dedicated Post-Arrival Support",
    desc: "We don't disappear once you land. Our team stays connected, helping you settle into your university, city, and student life abroad.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "Over 10,000 students placed, thousands of visas approved, and a 17-year reputation built purely on results and word-of-mouth trust.",
  },
];

const testimonials = [
  { name: "Dineth Perera", uni: "University of Manchester", quote: "The team's experience was unmatched. They guided me from IELTS all the way to visa approval." },
  { name: "Anushka Fernando", uni: "University of Melbourne", quote: "I saved over $15,000 in scholarships thanks to their guidance. Incredible team." },
  { name: "Tharindu Silva", uni: "University of Toronto", quote: "I was rejected once before. With Find My Career I reapplied and got in with full confidence." },
];

const differentiators = [
  "Free, no-obligation initial consultation",
  "Personalised roadmap for every student",
  "In-house IELTS coaching team",
  "98% visa approval rate since 2007",
  "Scholarships identified for every student",
  "Support in English, Sinhala & Tamil",
  "Regular progress updates & check-ins",
  "Post-arrival buddy programme",
];

function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title={<>Sri Lanka's most <span className="text-accent">trusted</span> study-abroad partner</>}
        subtitle="17+ years of expertise. 10,000+ students placed. 98% visa success rate. Here's why thousands of families choose us."
      />

      {/* Advantages Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.05)} className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our advantages</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              9 reasons families trust us
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every one of these isn't just a tagline — they are promises backed by 17 years of consistent delivery.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={shouldReduceMotion ? undefined : { y: -8, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }} className="group relative bg-background border border-border rounded-2xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] text-white flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform shadow-md">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* What Makes Us Different - checklist */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">The difference</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything included — nothing hidden</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From day one, you get a dedicated advisor who knows your profile inside out. No handoffs to junior staff. No surprise fees. Just expert support from start to finish.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                {differentiators.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="mt-0.5 bg-accent/10 p-1 rounded-full shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial cards */}
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-muted/40 border border-border rounded-2xl p-6 relative overflow-hidden group hover:border-accent/30 transition-colors"
                >
                  <div className="absolute top-4 right-4 text-accent/30 group-hover:text-accent/60 transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/90 italic mb-4">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.uni}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FreeConsultationCTA />
    </>
  );
}
