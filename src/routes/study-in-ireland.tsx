import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Assets
import heroImg from "@/assets/Ireland/Suitable Image.jfif";
import img1 from "@/assets/Ireland/Suitable Image1.jfif";

export const Route = createFileRoute("/study-in-ireland")({
  head: () => ({
    meta: [
      { title: "Study in Ireland — Find My Career" },
      { name: "description", content: "A Global Hub for Education, Innovation & Technology. Explore excellent opportunities for academic and professional growth." },
    ],
    links: [{ rel: "canonical", href: "/study-in-ireland" }],
  }),
  component: StudyInIrelandPage,
});

const whyStudy = [
  "Internationally recognized degrees",
  "Home to global technology companies",
  "Strong career and internship opportunities",
  "English-speaking learning environment",
  "Welcoming and student-friendly culture",
];

const topUnis = [
  "Trinity College Dublin",
  "University College Dublin",
  "University of Galway",
  "Dublin City University"
];

function StudyInIrelandPage() {

  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Study Destination"
        title={<>Study in <span className="text-accent">Ireland</span></>}
        subtitle="A Global Hub for Education, Innovation & Technology."
        image={heroImg}
      />

      {/* Intro */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <motion.p {...motionProps()} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Ireland has become one of the fastest-growing study destinations for international students. Known for its high-quality education system, strong economy, and thriving technology sector, Ireland offers excellent opportunities for academic and professional growth.
        </motion.p>
      </section>

      {/* Why Study */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...motionProps(0, "x", -30)} className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">The Irish Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Study in Ireland?</h2>
              
              <div className="space-y-4 mt-8">
                {whyStudy.map((item, i) => (
                  <motion.div key={i} {...motionProps(i * 0.1, "y", 10)} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <p className="text-lg text-foreground font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid gap-4">
              <motion.div {...motionProps(0, "y", 30)} className="aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <img src={img1} alt="Study in Ireland" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-20 lg:py-28 bg-[#0A1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="mb-16">
            <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Excellence</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-bold">Top Universities in Ireland</motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topUnis.map((uni, i) => (
              <motion.div key={i} {...motionProps(i * 0.1)} className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-slate-100">{uni}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-background text-center px-4">
        <motion.div {...motionProps()} className="max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Take the Next Step</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Irish Education Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step toward achieving your academic and career ambitions with expert guidance.
          </p>
          <a
            href="https://register.findmycareer.org.uk/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow-gold)] hover:scale-105 transition-transform"
          >
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}

