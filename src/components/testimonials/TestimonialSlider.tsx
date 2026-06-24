import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialSlider() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  
  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section className="py-20 lg:py-28 bg-[#0A1628] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">What our students say</h2>
        </div>

        <div className="w-full">
          <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
            <div className="flex">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 px-3">
                  <div className="h-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 flex flex-col">
                    <Quote className="w-8 h-8 text-accent/60 mb-4 shrink-0" />
                    <p className="text-slate-200 leading-relaxed flex-1 text-sm sm:text-base">"{t.quote}"</p>
                    <div className="mt-6 flex items-center gap-3">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-accent object-cover shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-sm truncate">{t.name}</p>
                        <p className="text-xs text-slate-400 truncate">{t.uni} · {t.country}</p>
                      </div>
                      <div className="ml-auto flex shrink-0">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex gap-3 justify-center">
            <button onClick={prev} aria-label="Previous" className="w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 grid place-items-center transition-colors"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={next} aria-label="Next" className="w-12 h-12 rounded-full bg-accent text-[#0A1628] hover:bg-amber-400 grid place-items-center transition-colors"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
