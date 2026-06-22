import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from "@/lib/animations";

const bands = [
  { skill: "Listening", score: 8.5, pct: 85 },
  { skill: "Reading",   score: 7.5, pct: 75 },
  { skill: "Writing",   score: 7.0, pct: 70 },
  { skill: "Speaking",  score: 8.0, pct: 80 },
];

const perks = [
  "Small batches with personal feedback",
  "Mock tests every week",
  "Native-style speaking practice",
  "Free repeat until you score 7.0+",
];

export function IeltsPromo() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative bg-[#0A1628] text-white px-6 sm:px-10 lg:px-16 py-20 lg:py-28"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">IELTS Preparation</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Score 7.0+ in IELTS with our expert coaches
          </h2>
          <p className="mt-4 text-slate-300 max-w-md">Structured 6-week program built by examiners who've trained thousands of Sri Lankan students.</p>
          <motion.ul variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-6 space-y-3">
            {perks.map((p) => (
              <motion.li key={p} variants={fadeUp} className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {p}
              </motion.li>
            ))}
          </motion.ul>
          <Link to="/ielts-preparation" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:scale-105 active:scale-95 transition-transform">
            Enroll in IELTS Prep <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative px-6 sm:px-10 lg:px-16 py-20 lg:py-28 grid place-items-center"
          style={{ background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)" }}
        >
          <motion.div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">IELTS Score Report</p>
                <p className="mt-1 text-2xl font-black text-[#0A1628]">Overall band 7.5</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 grid place-items-center text-white font-black text-xl">7.5</div>
            </div>
            <div className="mt-6 space-y-4">
              {bands.map((b, i) => (
                <div key={b.skill}>
                  <div className="flex justify-between text-sm font-medium text-[#0A1628]">
                    <span>{b.skill}</span><span>{b.score}</span>
                  </div>
                  <div className="mt-1 h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.pct}%` }}
                      viewport={viewportOnce}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-[#0A1628] to-[#3B82F6]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
