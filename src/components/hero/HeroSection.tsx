import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { FloatingCard } from "./FloatingCard";
import { UniversityMarquee } from "./UniversityMarquee";
import { LANGUAGES } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden text-white pt-20 lg:pt-24" style={{ background: "var(--gradient-hero)" }}>
      <ParticleBackground />

      {/* glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
      />

        <div className="relative flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12">
          <motion.div variants={stagger(0.15)} initial="hidden" animate="show" className="space-y-7 max-w-full overflow-hidden">
            <motion.div variants={fadeUp} className="inline-flex items-start sm:items-center gap-2 px-4 py-2 rounded-2xl sm:rounded-full bg-white/10 border border-white/15 backdrop-blur text-xs sm:text-sm max-w-full">
              <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5 sm:mt-0" />
              <span className="whitespace-normal break-words">🌍 Trusted by 10,000+ Students Since 2007</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight break-words min-w-0">
              Your Dream University
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent break-words whitespace-normal">
                <TypeAnimation
                  sequence={[
                    "Awaits in the UK", 2000,
                    "Awaits in Australia", 2000,
                    "Awaits in Canada", 2000,
                    "Awaits in Europe", 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor
                />
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed break-words">
              Sri Lanka's most trusted education consultancy — guiding students from dream to degree
              with expert visa, application, and IELTS support.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-3 w-full">
              <Link
                to="/apply-now"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow-gold)] hover:scale-105 active:scale-95 transition-transform text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 hover:bg-white hover:text-[#0A1628] font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Free Consultation
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-nowrap items-center gap-2 pt-2 text-xs sm:text-sm text-slate-300 overflow-x-auto w-full max-w-full pb-2 hide-scrollbar">
              <span className="opacity-80 shrink-0">Available in</span>
              {LANGUAGES.map((l) => (
                <span key={l} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 shrink-0 whitespace-nowrap">{l}</span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-full overflow-hidden flex justify-center">
          <FloatingCard />
        </motion.div>
      </div>

      {/* logo strip */}
      <div className="relative pb-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">Our students study at</p>
        <UniversityMarquee tone="light" />
      </div>

      {/* scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-slate-400"
        aria-hidden
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
