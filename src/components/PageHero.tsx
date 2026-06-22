import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow, title, subtitle, children,
}: { eyebrow: string; title: ReactNode; subtitle: string; children?: ReactNode }) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 text-white overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }}
      />
      <motion.div variants={stagger(0.12)} initial="hidden" animate="show" className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">{eyebrow}</motion.span>
        <motion.h1 variants={fadeUp} className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">{title}</motion.h1>
        <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">{subtitle}</motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/apply-now" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform shadow-[var(--shadow-glow-gold)]">
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white hover:text-[#0A1628] font-semibold transition-colors">
            Talk to an Advisor
          </Link>
        </motion.div>
        {children && <div className="mt-10">{children}</div>}
      </motion.div>
    </section>
  );
}
