import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { STEPS } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const heightVertical = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">The process</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Your path to studying abroad
          </motion.h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Desktop timeline */}
          <div className="hidden lg:block relative">
            <svg className="absolute top-12 left-0 w-full h-3 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 10">
              <line x1="0" y1="5" x2="1000" y2="5" stroke="hsl(0 0% 90%)" strokeWidth="3" />
              <motion.line x1="0" y1="5" x2="1000" y2="5" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" style={{ pathLength }} />
            </svg>
            <div className="relative grid grid-cols-6 gap-4">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.12 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 200 }}
                    className="relative w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white grid place-items-center text-2xl font-black shadow-[var(--shadow-elegant)] ring-4 ring-background"
                  >
                    {s.n}
                  </motion.div>
                  <h3 className="mt-5 font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="lg:hidden relative pl-12">
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-border rounded-full" />
            <motion.div style={{ height: heightVertical }} className="absolute left-5 top-0 w-1 bg-accent rounded-full" />
            <div className="space-y-8">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="absolute -left-12 top-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white grid place-items-center font-bold shadow-lg ring-4 ring-background">
                    {s.n}
                  </div>
                  <h3 className="font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
