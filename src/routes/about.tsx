import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { StatsSection } from "@/components/stats/StatsSection";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { Heart, Compass, Globe2, Award } from "lucide-react";

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
  { icon: Heart, title: "Student-first", desc: "Every plan starts with your goals — never sales targets." },
  { icon: Compass, title: "Honest guidance", desc: "Transparent advice on programs, costs and timelines." },
  { icon: Globe2, title: "Global network", desc: "Direct relationships with 150+ universities worldwide." },
  { icon: Award, title: "Proven results",  desc: "98% visa approval and counting since 2007." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Helping Sri Lankan students reach the world since <span className="text-accent">2007</span></>}
        subtitle="Find My Career is a Colombo-based education consultancy built by educators, for students. Over 17 years we've turned thousands of dreams into degrees."
      />
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our story</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Founded in 2007, Find My Career started with a simple promise: give Sri Lankan students the
                same quality of guidance students in big cities take for granted. Today, our team of advisors,
                IELTS coaches and visa specialists work in English, Sinhala and Tamil — so every family feels
                at home in the process.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We're proud to have placed over 10,000 students into universities across the UK, Australia,
                Canada and Europe — and we're just getting started.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80" alt="Students consulting" className="w-full h-80 object-cover" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <StatsSection />
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center">What we stand for</h2>
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.08)} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="rounded-2xl p-6 bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent grid place-items-center mb-4">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <FreeConsultationCTA />
    </>
  );
}
