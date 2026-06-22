import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Star, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function TestimonialsCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section className="py-20 lg:py-28 text-white relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, #F59E0B, transparent 40%), radial-gradient(circle at 90% 80%, #3B82F6, transparent 40%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} className="text-center mb-12">
          <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Testimonials</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Success stories from our students</motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured video card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="relative rounded-3xl overflow-hidden h-80 lg:h-auto group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80" alt="Featured student story" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/40 to-transparent" />
            <motion.div whileHover={{ scale: 1.1 }} className="absolute inset-0 grid place-items-center">
              <div className="w-20 h-20 rounded-full bg-accent text-[#0A1628] grid place-items-center shadow-[var(--shadow-glow-gold)]">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </motion.div>
            <div className="absolute bottom-0 inset-x-0 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Watch story</p>
              <h3 className="mt-2 text-xl font-bold">From Colombo to Cambridge</h3>
              <p className="text-sm text-slate-300">Nimesha's full journey · 3:42</p>
            </div>
          </motion.div>

          {/* Carousel */}
          <div className="lg:col-span-2">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="shrink-0 grow-0 basis-full md:basis-1/2 px-2">
                    <div className="h-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7">
                      <Quote className="w-8 h-8 text-accent/60" />
                      <p className="mt-4 text-slate-200 leading-relaxed">"{t.quote}"</p>
                      <div className="mt-6 flex items-center gap-3">
                        <img src={t.avatar} alt="" className="w-12 h-12 rounded-full ring-2 ring-accent" />
                        <div>
                          <p className="font-semibold">{t.name}</p>
                          <p className="text-xs text-slate-400">{t.uni} · {t.country}</p>
                        </div>
                        <div className="ml-auto flex">
                          {Array.from({ length: t.stars }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex gap-2 justify-end">
              <button onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 grid place-items-center"><ChevronLeft className="w-4 h-4" /></button>
              <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full bg-accent text-[#0A1628] grid place-items-center"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
