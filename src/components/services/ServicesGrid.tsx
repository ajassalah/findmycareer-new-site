import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">What we do</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Everything you need to study abroad
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A complete suite of services — from your first consultation to landing in your new country.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.08)} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-7 bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-[var(--shadow-elegant)] overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors" />
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="relative w-14 h-14 rounded-xl grid place-items-center bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-accent mb-5 shadow-lg"
              >
                <s.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="relative text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link href={s.to} className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

