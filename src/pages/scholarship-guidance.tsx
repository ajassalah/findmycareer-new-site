import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import {
  CheckCircle2, Award, BookOpen, Globe, Star, Search,
  Users, ArrowRight, Sparkles, GraduationCap,
} from "lucide-react";

import heroImg from "@/assets/innovator visa/Hero Banner/YpBJEZlqE1dyV1-ZUoS4zdqVFGLbrzQp-NfS-95tPICEntGVuX7dbHw942ZbU0gT-wldzkMQQQRizjJVMMwzeynUNXNHI1FHfPY2SKbiZiqHemYeDszjmmCBvxf5JcPWI44KMwQJMtdG.jfif";
import cardImg from "@/assets/innovator visa/Business Plan & Endorsement Section/5btVkbgK2EkhwbiXKDuHjqkGk6eLCL6YwPfGuuRNRFPjSQD-46f48nqP7Nryxis4nbINlgjbVCOCtVBV98Ms9fQpH2c-ealZz4MrcblKonxfONPuE_7M.jfif";
import scholarshipImg1 from "@/assets/Scholarships.jfif";
import scholarshipImg2 from "@/assets/Scholarships 1.jfif";


const support = [
  "Scholarship eligibility assessment",
  "Identification of suitable scholarship opportunities",
  "Application strategy and planning",
  "Personal statement and essay guidance",
  "Scholarship interview preparation",
  "Deadline tracking and submission support",
  "Merit-based and need-based scholarship assistance",
];

const scholarshipTypes = [
  { icon: GraduationCap, title: "University Scholarships", desc: "Directly offered by universities to attract talented international students. Often merit-based or tied to specific programs." },
  { icon: Globe, title: "Government Scholarships", desc: "Funded by national governments to foster international relations. Examples include Chevening (UK), Fulbright (USA), and Australia Awards." },
  { icon: BookOpen, title: "Research Scholarships", desc: "For students pursuing postgraduate research degrees, funded by universities or research councils." },
  { icon: Star, title: "International Student Grants", desc: "Grants provided by NGOs and private foundations specifically for international students with demonstrated need." },
  { icon: Award, title: "Academic Excellence Scholarships", desc: "Awarded to students with exceptional academic performance and outstanding qualifications." },
  { icon: Users, title: "Sports & Talent Scholarships", desc: "Available for students with exceptional sporting achievements or artistic talents alongside academic merit." },
  { icon: Search, title: "Country-Specific Programs", desc: "Unique funding programs tailored to students from specific countries, such as Commonwealth Scholarships." },
];

export default function ScholarshipGuidancePage() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        eyebrow="Our Services"
        title={<>Scholarship <span className="text-accent">Guidance</span></>}
        subtitle="Maximize your opportunities with expert guidance to identify, apply for, and secure scholarships from universities, governments, and private organizations worldwide."
      />

      {/* Overview */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #F59E0B44 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Your Partner in Securing Financial Aid</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Studying abroad is a valuable investment in your future, and scholarships can significantly reduce the financial burden of international education. Our dedicated advisors help students at every step of the scholarship journey.
              </p>
              <div className="space-y-3 pt-2">
                {support.map((item, i) => (
                  <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                    <div className="mt-0.5 bg-accent/10 p-1 rounded-full shrink-0"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src={scholarshipImg1} alt="Scholarship Guidance" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2">
                  {["Merit-Based", "Need-Based", "Government", "University"].map((tag) => (
                    <span key={tag} className="bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full text-sm font-medium text-white">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.08)} className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Funding Options</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Types of Scholarships We Help With</motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarshipTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={shouldReduceMotion ? undefined : { y: -8, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }} className="group relative bg-background border border-border rounded-2xl p-7 hover:border-accent/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] text-white flex items-center justify-center mb-5 shadow-md group-hover:-translate-y-1 transition-transform">
                    <type.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{type.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 md:p-12 border border-accent/20 relative overflow-hidden">
            <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #F59E0B55 0%, transparent 70%)" }} />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                  <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Advantage</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Our Scholarship Guidance?</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our team stays updated with the latest scholarship opportunities and admission requirements, helping students improve their chances of securing financial aid while pursuing their academic goals abroad.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
                <img src={scholarshipImg2} alt="Scholarship Success" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Study Abroad Journey?</h2>
            <p className="text-muted-foreground mb-8">From university selection and scholarship applications to pre-departure preparation and post-arrival support, our expert team is here every step of the way.</p>
            <a href="https://register.findmycareer.org.uk/apply" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow-gold)] hover:scale-105 transition-transform">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <FreeConsultationCTA />
    </div>
  );
}
