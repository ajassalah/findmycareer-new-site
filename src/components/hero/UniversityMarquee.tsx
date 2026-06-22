import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/data";

export function UniversityMarquee({ tone = "light" }: { tone?: "light" | "dark" }) {
  const list = [...PARTNERS, ...PARTNERS];
  const text = tone === "light" ? "text-slate-200/80" : "text-slate-600";
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-10 marquee-track whitespace-nowrap">
        {list.map((p, i) => (
          <div key={i} className={`text-sm sm:text-base font-semibold tracking-wide ${text}`}>
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnerMarquee({ direction = "left" }: { direction?: "left" | "right" }) {
  const list = [...PARTNERS, ...PARTNERS];
  return (
    <div className="relative overflow-hidden group">
      <div className={`flex gap-4 whitespace-nowrap ${direction === "left" ? "marquee-track" : "marquee-track-reverse"} group-hover:[animation-play-state:paused]`}>
        {list.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="shrink-0 px-6 py-4 rounded-xl bg-card border border-border shadow-sm font-semibold text-foreground/80"
          >
            {p}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
