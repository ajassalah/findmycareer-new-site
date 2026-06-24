import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export function TestimonialGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} className="text-center mb-12">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold">What our students say</motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={viewportOnce} 
          variants={stagger(0.1)} 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-card border border-border rounded-3xl p-7 flex flex-col shadow-sm">
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <p className="text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-accent/30 object-cover" />
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.uni} · {t.country}</p>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
