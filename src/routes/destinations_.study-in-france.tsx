import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Assets
import heroImg from "@/assets/France/Suitable Image.jfif";
import img1 from "@/assets/France/Suitable Image1.jfif";
import img2 from "@/assets/France/Suitable Image2.jfif";

export const Route = createFileRoute("/destinations_/study-in-france")({
  head: () => ({
    meta: [
      { title: "Study in France — Find My Career" },
      { name: "description", content: "Discover World-Class Education in the Heart of Europe. Explore diverse academic pathways in a vibrant international environment." },
    ],
    links: [{ rel: "canonical", href: "/destinations/study-in-france" }],
  }),
  component: StudyInFrancePage,
});

const whyStudy = [
  "Globally recognized universities and business schools",
  "Affordable tuition at many public institutions",
  "Wide range of English-taught programs",
  "Gateway to Europe and international careers",
  "Rich culture, history, and lifestyle",
];

const topUnis = [
  "Sorbonne University",
  "Université Paris-Saclay",
  "HEC Paris",
  "ESSEC Business School"
];

function StudyInFrancePage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Study Destination"
        title={<>Study in <span className="text-accent">France</span></>}
        subtitle="Discover World-Class Education in the Heart of Europe."
        image={heroImg}
      />

      {/* Intro */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          France is a top destination for international students, offering globally recognized qualifications, affordable education options, cutting-edge research opportunities, and a rich cultural experience. From business and engineering to fashion, hospitality, and arts, France provides diverse academic pathways in a vibrant international environment.
        </motion.p>
      </section>

      {/* Why Study */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">The French Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Study in France?</h2>
              
              <div className="space-y-4 mt-8">
                {whyStudy.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ delay: i * 0.1 }} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <p className="text-lg text-foreground font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="col-span-2 aspect-video rounded-3xl overflow-hidden shadow-xl">
                <img src={img1} alt="Study in France" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ delay: 0.1 }} className="col-span-2 aspect-[21/9] rounded-3xl overflow-hidden shadow-lg">
                <img src={img2} alt="France Campus" className="w-full h-full object-cover" />
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
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-bold">Top Universities in France</motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topUnis.map((uni, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-slate-100">{uni}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-background text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Take the Next Step</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your French Education Journey</h2>
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
