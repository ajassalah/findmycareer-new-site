import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Trophy, Users, ShieldCheck, Building2 } from "lucide-react";
import { STATS } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const icons = [Trophy, Users, ShieldCheck, Building2];

function Counter({ end, duration = 2200 }: { end: number; duration?: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setV(Math.round(end * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{v.toLocaleString()}</span>;
}

export function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 text-white overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #3B82F6 0%, transparent 40%), radial-gradient(circle at 80% 70%, #F59E0B 0%, transparent 40%)" }} />

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeUp} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Numbers that speak for themselves</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Nearly two decades of placing Sri Lankan students into world-class universities.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl p-6 lg:p-8 bg-white/5 border border-white/10 backdrop-blur-xl hover:border-accent/50 transition-colors flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <p className="text-4xl lg:text-5xl font-black">
                  <Counter end={s.value} />
                  <span className="text-accent">{s.suffix}</span>
                </p>
                <p className="mt-2 text-sm lg:text-base text-slate-300">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
