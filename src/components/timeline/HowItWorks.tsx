import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { STEPS } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/animations";

const stepIcons = ["🎯", "🏫", "📝", "🛂", "✈️", "🎓"];

// Lighter step colors — soft sky/indigo palette
const stepColors = [
  "from-sky-400 to-blue-500",
  "from-indigo-400 to-violet-500",
  "from-cyan-400 to-sky-500",
  "from-blue-400 to-indigo-500",
  "from-violet-400 to-purple-500",
  "from-teal-400 to-cyan-500",
];

const stepGlows = [
  "rgba(56,189,248,0.35)",
  "rgba(129,140,248,0.35)",
  "rgba(34,211,238,0.35)",
  "rgba(96,165,250,0.35)",
  "rgba(167,139,250,0.35)",
  "rgba(45,212,191,0.35)",
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const heightVertical = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 lg:py-28 bg-[#0A1628] relative overflow-hidden">
      {/* Ambient glow blobs — suppressed when prefers-reduced-motion */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #38BDF844 0%, transparent 70%)" }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #818CF844 0%, transparent 70%)" }}
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs uppercase tracking-[0.3em] text-sky-400 font-semibold"
          >
            The process
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Your path to studying abroad
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400 max-w-xl mx-auto">
            Six simple steps from dream to degree — we guide you every step of the way.
          </motion.p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* ─── Desktop timeline ────────────────────────────────────────────── */}
          <div className="hidden lg:block relative">
            {/* Animated connector line */}
            <svg
              className="absolute top-12 left-0 w-full h-3 overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 1000 10"
            >
              <line
                x1="0"
                y1="5"
                x2="1000"
                y2="5"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="2"
                strokeDasharray="8 6"
              />
              {!shouldReduceMotion && (
                <motion.line
                  x1="0"
                  y1="5"
                  x2="1000"
                  y2="5"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ pathLength }}
                />
              )}
            </svg>

            <div className="relative grid grid-cols-6 gap-4">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.3 }
                      : { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                  }
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                  className="text-center group cursor-default"
                >
                  {/* Step circle with soft colors */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    {!shouldReduceMotion && (
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.35, 0, 0.35] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${stepColors[i]} opacity-30`}
                      />
                    )}
                    <motion.div
                      initial={shouldReduceMotion ? false : { scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={viewportOnce}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0.3 }
                          : { delay: i * 0.15 + 0.25, type: "spring", stiffness: 200 }
                      }
                      className={`relative w-full h-full rounded-full bg-gradient-to-br ${stepColors[i]} flex items-center justify-center ring-4 ring-white/10 transition-shadow group-hover:ring-white/25`}
                      style={{
                        boxShadow: `0 0 20px ${stepGlows[i]}`,
                      }}
                    >
                      <span className="text-3xl">{stepIcons[i]}</span>
                    </motion.div>
                    {/* Step number badge */}
                    <div
                      className={`absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#0A1628] border-2 border-sky-400/70 flex items-center justify-center text-sky-300 font-black text-xs`}
                    >
                      {s.n}
                    </div>
                  </div>

                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOnce}
                    transition={
                      shouldReduceMotion ? { duration: 0.3 } : { delay: i * 0.15 + 0.3 }
                    }
                    className="bg-white/5 border border-white/8 rounded-2xl p-4 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-sky-400/30 transition-all"
                  >
                    <h3 className="font-bold text-white text-sm">{s.title}</h3>
                    <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Mobile vertical ─────────────────────────────────────────────── */}
          <div className="lg:hidden relative pl-14">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-white/8 rounded-full" />
            {!shouldReduceMotion && (
              <motion.div
                style={{ height: heightVertical }}
                className="absolute left-5 top-0 w-0.5 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]"
              />
            )}
            <div className="space-y-6">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={
                    shouldReduceMotion ? { duration: 0.3 } : { delay: i * 0.1 }
                  }
                  className="relative"
                >
                  {/* Mobile step dot */}
                  <div className="absolute -left-14 top-0">
                    {!shouldReduceMotion && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0, 0.35] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${stepColors[i]} opacity-25`}
                      />
                    )}
                    <div
                      className={`relative w-10 h-10 rounded-full bg-gradient-to-br ${stepColors[i]} flex items-center justify-center text-xl font-bold shadow-lg ring-4 ring-[#0A1628]`}
                    >
                      {stepIcons[i]}
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/8 rounded-xl p-4 group-hover:border-sky-400/30 transition-colors">
                    <h3 className="font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
