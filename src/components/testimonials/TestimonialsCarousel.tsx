import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/animations";

// Import new success story video
import storyVideo1 from "@/assets/success stories/AQNBsqx8Hu1K-kDM5SCQEk21hQG1nK3f2sjE4z-1sVeVCwbtZMJJ69UY0ZSfsV70DGcr6rrEj7RHwTsPZcXtCFJATszb_jJiA9c.mp4";
import storyVideo2 from "@/assets/success stories/AQMsv9fqhsGEVqpT_ck0xxImBZHr76tcl-sMTXyNf-dIbKcycUVJCSbEh_eVRHKT2bHTGS8Z1NDCbrUUkURyENM.mp4";
// Use images as the covers for the videos
import dilshanImg from "@/assets/success stories/Dilshan Samarakoon.jpg";
import farhaImg from "@/assets/success stories/Farha Farizan.jpg";

export function TestimonialsCarousel({ hideMarquee = false }: { hideMarquee?: boolean }) {
  const [playingVideo, setPlayingVideo] = useState<1 | 2 | null>(null);
  
  // Double the list for infinite marquee
  const marqueeList = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 lg:py-28 text-white relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, #F59E0B, transparent 40%), radial-gradient(circle at 90% 80%, #3B82F6, transparent 40%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} className="text-center mb-12">
          <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Testimonials</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Success stories from our students</motion.h2>
        </motion.div>

        {/* Featured videos section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Video 1 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="relative rounded-3xl overflow-hidden aspect-video sm:aspect-auto sm:h-[450px] group bg-black/20">
            {playingVideo === 1 ? (
              <div className="absolute inset-0 w-full h-full z-20 flex items-center justify-center bg-black">
                <video 
                  src={storyVideo1} 
                  autoPlay 
                  controls 
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-contain" 
                  poster={dilshanImg}
                />
                <button onClick={() => setPlayingVideo(null)} className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-colors">
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            ) : (
              <div className="absolute inset-0 w-full h-full cursor-pointer" onClick={() => setPlayingVideo(1)}>
                <img src={dilshanImg} alt="Featured student story" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
                
                <motion.div whileHover={{ scale: 1.1 }} className="absolute inset-0 grid place-items-center">
                  <div className="w-20 h-20 rounded-full bg-accent text-[#0A1628] grid place-items-center shadow-[var(--shadow-glow-gold)]">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </motion.div>

                <div className="absolute bottom-0 inset-x-0 p-6 pointer-events-none bg-gradient-to-t from-[#0A1628]/80 to-transparent">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold drop-shadow-md">Watch story</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Video 2 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} transition={{ delay: 0.1 }} className="relative rounded-3xl overflow-hidden aspect-video sm:aspect-auto sm:h-[450px] group bg-black/20">
            {playingVideo === 2 ? (
              <div className="absolute inset-0 w-full h-full z-20 flex items-center justify-center bg-black">
                <video 
                  src={storyVideo2} 
                  autoPlay 
                  controls 
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-contain" 
                  poster={farhaImg}
                />
                <button onClick={() => setPlayingVideo(null)} className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-colors">
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            ) : (
              <div className="absolute inset-0 w-full h-full cursor-pointer" onClick={() => setPlayingVideo(2)}>
                <img src={farhaImg} alt="Featured student story" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
                
                <motion.div whileHover={{ scale: 1.1 }} className="absolute inset-0 grid place-items-center">
                  <div className="w-20 h-20 rounded-full bg-accent text-[#0A1628] grid place-items-center shadow-[var(--shadow-glow-gold)]">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </motion.div>

                <div className="absolute bottom-0 inset-x-0 p-6 pointer-events-none bg-gradient-to-t from-[#0A1628]/80 to-transparent">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold drop-shadow-md">Watch story</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Running style testimonial marquee */}
      {!hideMarquee && (
        <div className="relative w-full overflow-hidden flex group">
          <div className="flex gap-6 marquee-track whitespace-normal px-3 group-hover:[animation-play-state:paused] w-max" style={{ animationDuration: '120s' }}>
            {marqueeList.map((t, idx) => (
              <div key={idx} className="w-[320px] sm:w-[400px] shrink-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-7 flex flex-col transition-colors hover:bg-white/10">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-accent/60 mb-4 shrink-0" />
                <p className="text-slate-200 leading-relaxed flex-1 text-sm sm:text-base line-clamp-4">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-accent object-cover shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm truncate">{t.name}</p>
                    <p className="text-xs text-slate-400 truncate">{t.uni} · {t.country}</p>
                  </div>
                  <div className="ml-auto flex shrink-0">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
