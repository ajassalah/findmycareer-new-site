import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { viewportOnce } from "@/lib/animations";

const decor = [
  { e: "✈️", x: "8%",  y: "20%" },
  { e: "🎓", x: "85%", y: "18%" },
  { e: "🌍", x: "12%", y: "75%" },
  { e: "📚", x: "82%", y: "78%" },
  { e: "⭐", x: "50%", y: "12%" },
];

export function FreeConsultationCTA() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden text-white animated-gradient"
      style={{ backgroundImage: "var(--gradient-cta)" }}
    >
      {decor.map((d, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], rotate: [0, 12, -8, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          className="absolute text-4xl sm:text-5xl select-none pointer-events-none opacity-80"
          style={{ left: d.x, top: d.y }}
          aria-hidden
        >
          {d.e}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight">
          Ready to begin your international education journey?
        </h2>
        <p className="mt-5 text-lg text-slate-200 max-w-xl mx-auto">
          Book a free, no-obligation consultation with our advisors today. Available in English, Sinhala and Tamil.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/apply-now" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow-gold)] hover:scale-105 transition-transform">
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 hover:bg-white hover:text-[#0A1628] font-semibold transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
