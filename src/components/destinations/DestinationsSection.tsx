import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { DESTINATIONS } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export function DestinationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Destinations</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Where will your journey take you?
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.07)} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((d) => (
            <motion.div
              key={d.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-[var(--shadow-elegant)] transition-shadow"
            >
              <Link to={d.to} className="block absolute inset-0">
                <img
                  src={d.image}
                  alt={`${d.name} landmark`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent group-hover:from-[#0A1628]/95" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <div className="text-3xl">{d.flag}</div>
                  <h3 className="mt-2 text-xl font-bold">{d.name}</h3>
                  <p className="text-xs text-slate-300">{d.unis} Universities · {d.students.toLocaleString()} Students Placed</p>
                  <div className="overflow-hidden h-6 mt-2">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

