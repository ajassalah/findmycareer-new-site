import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2, Star } from "lucide-react";

const orbiting = ["🇬🇧", "🇦🇺", "🇨🇦", "🇩🇪", "🇫🇷"];

export function FloatingCard() {
  return (
    <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[560px] flex items-center justify-center">
      {/* rotating globe SVG */}
      <motion.div
        className="absolute inset-0 grid place-items-center pointer-events-none"
        aria-hidden
      >
        <svg viewBox="0 0 200 200" className="w-[110%] h-[110%] opacity-20 spin-slow">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#g)" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#3B82F6" strokeOpacity="0.4" />
          {[-60, -30, 0, 30, 60].map((y) => (
            <ellipse key={y} cx="100" cy="100" rx="80" ry={Math.abs(80 - Math.abs(y))} fill="none" stroke="#3B82F6" strokeOpacity="0.25" />
          ))}
          {[-60, -30, 0, 30, 60].map((x) => (
            <ellipse key={x} cx="100" cy="100" rx={Math.abs(80 - Math.abs(x))} ry="80" fill="none" stroke="#3B82F6" strokeOpacity="0.25" />
          ))}
        </svg>
      </motion.div>

      {/* main student card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[320px] sm:w-[360px] bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-[var(--shadow-elegant)] border border-white/40"
      >
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/120?img=12" alt="" className="w-14 h-14 rounded-full ring-2 ring-accent" />
          <div>
            <p className="font-semibold text-[#0A1628]">Dineth Perera</p>
            <p className="text-xs text-slate-500">Computer Science · MSc</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200">
          <div className="flex items-center gap-2 text-emerald-700 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            Accepted to University of Manchester 🎉
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[
            { label: "IELTS", val: "7.5" },
            { label: "GPA", val: "3.8" },
            { label: "Visa", val: "✓" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-slate-50 p-2">
              <p className="text-[10px] uppercase text-slate-500 tracking-wider">{s.label}</p>
              <p className="text-sm font-bold text-[#0A1628]">{s.val}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* visa approved badge */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-20 top-4 right-2 sm:right-6 bg-gradient-to-br from-amber-400 to-amber-500 text-[#0A1628] rounded-2xl px-4 py-3 shadow-[var(--shadow-glow-gold)] flex items-center gap-2 font-semibold text-sm"
      >
        <GraduationCap className="w-5 h-5" />
        Visa Approved
      </motion.div>

      {/* rating chip */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-20 bottom-6 left-2 sm:left-4 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2 text-sm font-medium text-[#0A1628]"
      >
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        4.9 from 2,400+ reviews
      </motion.div>

      {/* orbiting flags */}
      {orbiting.map((f, i) => {
        const angle = (i / orbiting.length) * Math.PI * 2;
        const r = 200;
        return (
          <motion.div
            key={f}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute z-0 w-full h-full pointer-events-none"
            style={{ transformOrigin: "center" }}
          >
            <div
              className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 grid place-items-center rounded-full bg-white/90 backdrop-blur shadow-lg text-2xl"
              style={{ transform: `translate(${(Math.cos(angle) * r).toFixed(2)}px, ${(Math.sin(angle) * r).toFixed(2)}px)` }}
            >
              {f}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
