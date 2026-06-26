import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { StatsSection } from "@/components/stats/StatsSection";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce, instantFadeUp } from "@/lib/animations";
import { Heart, Compass, Globe2, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Find My Career — 17+ Years of Trusted Guidance" },
      { name: "description", content: "Meet Sri Lanka's most trusted study-abroad team. Learn our story, mission, and the values behind 10,000+ student successes." },
      { property: "og:title", content: "About Find My Career" },
      { property: "og:description", content: "17+ years of guiding Sri Lankan students into world-class universities abroad." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Student-first", desc: "Every plan starts with your goals — never sales targets.", color: "text-rose-500", bg: "bg-rose-500/10" },
  { icon: Compass, title: "Honest guidance", desc: "Transparent advice on programs, costs and timelines.", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Globe2, title: "Global network", desc: "Direct relationships with 150+ universities worldwide.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Award, title: "Proven results",  desc: "98% visa approval and counting since 2007.", color: "text-amber-500", bg: "bg-amber-500/10" },
];

function About() {
  const shouldReduceMotion = useReducedMotion();
  const vFadeUp = shouldReduceMotion ? instantFadeUp : fadeUp;

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <PageHero
        eyebrow="About us"
        title={<>Helping Students Reach the World Since <span className="text-accent">2007</span></>}
        subtitle="Find My Career is a premier education consultancy built by educators, for students. Over 17 years we've turned thousands of dreams into degrees."
      />
      
      {/* Story Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <motion.span variants={vFadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                Our Story
              </motion.span>
              <motion.h2 variants={vFadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight">
                A legacy built on <span className="text-accent">trust</span> and <span className="text-accent">results</span>.
              </motion.h2>
              <motion.div variants={vFadeUp} className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2007, Find My Career started with a simple promise: give students the
                  same quality of elite guidance that top-tier international students receive. Today, our team of dedicated advisors,
                  IELTS coaches and visa specialists work closely with families to ensure every step is transparent and successful.
                </p>
                <p>
                  We're proud to have placed over 10,000 students into leading universities across the UK, Australia,
                  Canada, Europe, and the US — and we're just getting started.
                </p>
              </motion.div>
            </div>

            <motion.div variants={vFadeUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-50" />
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]"
              >
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80" alt="Students consulting" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-muted/30 relative border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span variants={vFadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
              Core Principles
            </motion.span>
            <motion.h2 variants={vFadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">
              What we stand for
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={vFadeUp}
                whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
                className="group relative rounded-3xl p-8 bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300", v.bg, v.color)}>
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FreeConsultationCTA />
    </div>
  );
}
