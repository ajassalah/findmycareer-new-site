import { motion } from "framer-motion";
import { PartnerMarquee } from "@/components/hero/UniversityMarquee";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} className="text-center mb-12">
          <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Network</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            150+ Partner universities worldwide
          </motion.h2>
        </motion.div>
      </div>
      <div className="space-y-4">
        <PartnerMarquee direction="left" />
        <PartnerMarquee direction="right" />
      </div>
    </section>
  );
}
