import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { Target, Eye, Sparkles, Globe2, Users, GraduationCap, Lightbulb, Heart, ArrowRight } from "lucide-react";

import missionImg from "@/assets/innovator visa/Business Plan & Endorsement Section/k4hrlJDSjIhSY49xKPigmPGGrOPqGAnlC5gDCTE_COpiCI6az9lWaiR5LqMx0fh2LTJiDsVKiYMMLUkGcaklA0ZH1Wzx4a4RWtqyRNOreXd7_XcxfBhG.jfif";
import visionImg from "@/assets/innovator visa/Hero Banner/YpBJEZlqE1dyV1-ZUoS4zdqVFGLbrzQp-NfS-95tPICEntGVuX7dbHw942ZbU0gT-wldzkMQQQRizjJVMMwzeynUNXNHI1FHfPY2SKbiZiqHemYeDszjmmCBvxf5JcPWI44KMwQJMtdG.jfif";
import teamImg from "@/assets/innovator visa/Business Plan & Endorsement Section/5btVkbgK2EkhwbiXKDuHjqkGk6eLCL6YwPfGuuRNRFPjSQD-46f48nqP7Nryxis4nbINlgjbVCOCtVBV98Ms9fQpH2c-ealZz4MrcblKonxfONPuE_7M.jfif";
import visionPng from "@/assets/vision.png";
import vision1Png from "@/assets/vision1.png";

export const Route = createFileRoute("/mission-vision")({
  head: () => ({
    meta: [
      { title: "Mission & Vision — Find My Career" },
      { name: "description", content: "Our mission is to empower students with expert guidance on their journey to higher education abroad. Learn about our vision for global educational excellence." },
    ],
    links: [{ rel: "canonical", href: "/mission-vision" }],
  }),
  component: MissionVisionPage,
});

const missionValues = [
  { icon: Users, title: "Personalized Support", desc: "Every student is unique. We tailor our guidance to each individual's goals, background, and aspirations." },
  { icon: GraduationCap, title: "Academic Excellence", desc: "We connect students with universities that truly match their academic potential and career ambitions." },
  { icon: Heart, title: "Student-First Always", desc: "Our advice is driven by your best interests — never by commissions or hidden agendas." },
  { icon: Globe2, title: "Seamless Process", desc: "We make complex international education pathways stress-free and straightforward from start to finish." },
];

const visionPillars = [
  { icon: Lightbulb, title: "Innovation", desc: "Continuously evolving our services to meet the needs of a changing global education landscape." },
  { icon: Globe2, title: "Global Reach", desc: "Connecting Sri Lankan students to world-class universities across every continent." },
  { icon: Sparkles, title: "Empowerment", desc: "Giving every student the resources, confidence, and clarity to transform academic dreams into reality." },
  { icon: Users, title: "Future Leaders", desc: "Fostering a generation of global leaders, thinkers, and change-makers through quality education." },
];

function MissionVisionPage() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        eyebrow="About Us"
        title={<>Our <span className="text-accent">Mission</span> & <span className="text-accent">Vision</span></>}
        subtitle="Guided by purpose, driven by passion — everything we do is rooted in helping students achieve their fullest academic potential."
      />

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Animated background glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #C8102E33 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              {...motionProps(0, "x", -40)}
              className="space-y-8"
            >
              {/* Label */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C8102E]/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#C8102E]" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C8102E] font-bold">Our Mission</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-foreground">
                Empowering Students to <span className="text-[#C8102E]">Reach Further</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to empower students by providing expert guidance and personalized support throughout their journey to higher education abroad. We strive to make the process seamless and stress-free, ensuring that each student finds the right university that aligns with their academic goals, personal interests, and career aspirations.
              </p>

              {/* Values grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {missionValues.map((val, i) => (
                  <motion.div
                    key={i}
                    {...motionProps(i * 0.1 , "y", 16)}
                    whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }} className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-muted/30 hover:bg-background hover:border-[#C8102E]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#C8102E]/10 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform">
                      <val.icon className="w-4 h-4 text-[#C8102E]" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground mb-1">{val.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img src={missionImg} alt="Our Mission" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-5 -left-5 bg-background border border-border rounded-2xl p-5 shadow-xl"
              >
                <p className="text-3xl font-black text-[#C8102E]">10,000+</p>
                <p className="text-sm text-muted-foreground mt-1">Students Empowered</p>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-[#C8102E] text-white rounded-2xl px-4 py-3 shadow-lg"
              >
                <p className="text-sm font-bold">17+ Years</p>
                <p className="text-xs opacity-80">of Excellence</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider with label */}
      <div className="relative py-8 bg-muted/20 border-y border-border overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground font-medium tracking-widest uppercase">Our Vision</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Animated background glow */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #F59E0B33 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 rounded-2xl overflow-hidden aspect-video shadow-xl">
                  <img src={visionPng} alt="Our Vision" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                  <img src={vision1Png} alt="Global reach" className="w-full h-full object-cover" />
                </div>
                {/* Vision stat card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl bg-[#0A1628] text-white p-6 flex flex-col justify-center shadow-xl"
                >
                  <p className="text-3xl font-black text-accent">150+</p>
                  <p className="text-sm mt-1 text-slate-300">Partner Universities Worldwide</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              {...motionProps(0, "x", 40)}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Our Vision</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-foreground">
                A World Where Every Student <span className="text-accent">Thrives Globally</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading global provider of personalized, comprehensive, and innovative educational consultancy services — empowering students to achieve their fullest potential by facilitating access to world-class graduate education opportunities.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We envision a world where every student has the guidance, resources, and support they need to transform their academic dreams into reality, fostering a future of global leaders, thinkers, and change-makers.
              </p>

              {/* Vision pillars */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {visionPillars.map((pillar, i) => (
                  <motion.div
                    key={i}
                    {...motionProps(i * 0.1 , "y", 16)}
                    whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }} className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-muted/30 hover:bg-background hover:border-accent/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform">
                      <pillar.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground mb-1">{pillar.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined CTA Banner */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-[#0A1628] text-white rounded-3xl p-10 md:p-14 overflow-hidden">
              {/* Animated shimmer */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, #F59E0B55 0%, transparent 70%)" }}
              />

              <div className="relative z-10 text-center">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  variants={stagger(0.1)}
                >
                  <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">Join Us</motion.span>
                  <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-black mb-4">
                    Ready to Begin Your Global Education Journey?
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                    Our mission and vision come to life through every student we guide. Let us help you take the next step toward your academic future.
                  </motion.p>
                  <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
                    <a
                      href="https://register.findmycareer.org.uk/apply"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow-gold)] hover:scale-105 transition-transform"
                    >
                      Book a Free Consultation <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FreeConsultationCTA />
    </div>
  );
}
