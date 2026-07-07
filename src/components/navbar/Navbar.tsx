import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import logo from "@/assets/fmc-logo.png";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

// ─── Dropdown animation variants ───────────────────────────────────────────────
const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -4,
    scale: 0.97,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.18, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const instantVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = router.asPath.split("?")[0].split("#")[0];
  const shouldReduceMotion = useReducedMotion();

  // Pages where we always want a solid (non-transparent) navbar
  const forceSolid = pathname.startsWith("/blog/") || pathname.startsWith("/visa-assistance/");
  const isSolid = scrolled || forceSolid;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    setHoverDropdown(null);
  }, [pathname]);

  const dropAnim = shouldReduceMotion ? instantVariants : dropdownVariants;

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isSolid
          ? "backdrop-blur-xl bg-background/90 border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Find My Career — Study Abroad Consultancy"
            className={cn(
              "h-12 lg:h-14 w-auto transition-all duration-300",
              !isSolid && "brightness-0 invert",
            )}
          />
        </Link>

        {/* ─── Desktop Nav ─────────────────────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.to || (l.subItems?.some((s) => pathname === s.to));
            const hasSub = !!l.subItems?.length;
            const isOpen = hoverDropdown === l.label;

            return (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => hasSub && setHoverDropdown(l.label)}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                {l.to ? (
                  <Link
                    href={l.to}
                    className={cn(
                      "relative px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg flex items-center gap-1.5",
                      isSolid ? "text-foreground" : "text-white",
                      active ? "text-accent" : "hover:text-accent",
                    )}
                  >
                    {l.label}
                    {hasSub && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                      />
                    )}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent rounded-full"
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    className={cn(
                      "relative px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg flex items-center gap-1.5",
                      isSolid ? "text-foreground" : "text-white",
                      active ? "text-accent" : "hover:text-accent",
                    )}
                  >
                    {l.label}
                    {hasSub && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                      />
                    )}
                  </button>
                )}

                {/* Desktop dropdown */}
                {hasSub && (
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={dropAnim}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="absolute left-0 top-full pt-2 min-w-[220px] z-50"
                      >
                        <div className="bg-background/95 backdrop-blur-xl border border-border/80 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-2 overflow-hidden">
                          {/* Decorative accent line */}
                          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                          
                          <div className="flex flex-col gap-0.5 mt-1">
                            {l.subItems!.map((sub, idx) => {
                              const subActive = pathname === sub.to;
                              return (
                                <motion.div
                                  key={sub.to}
                                  custom={idx}
                                  variants={shouldReduceMotion ? instantVariants : itemVariants}
                                  initial="hidden"
                                  animate="show"
                                >
                                  <Link
                                    href={sub.to}
                                    className={cn(
                                      "group flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 whitespace-nowrap",
                                      subActive
                                        ? "bg-accent/10 text-accent font-semibold"
                                        : "text-foreground/80 hover:bg-muted hover:text-accent",
                                    )}
                                  >
                                    {/* Active indicator dot */}
                                    <span
                                      className={cn(
                                        "w-1.5 h-1.5 rounded-full shrink-0 transition-all",
                                        subActive
                                          ? "bg-accent scale-100"
                                          : "bg-muted-foreground/30 group-hover:bg-accent/60 scale-75",
                                      )}
                                    />
                                    {sub.label}
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://register.findmycareer.org.uk/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:scale-105 active:scale-95 transition-transform shadow-[var(--shadow-glow-gold)]"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden p-2 rounded-md hover:bg-muted transition-colors",
              scrolled ? "text-foreground" : "text-white",
            )}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:hidden overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl"
          >
            <div className="px-4 py-5 flex flex-col gap-0.5 max-h-[80vh] overflow-y-auto">
              {NAV_LINKS.map((l, i) => {
                const hasSub = !!l.subItems?.length;
                const isActive = pathname === l.to || (l.subItems?.some((s) => pathname === s.to));
                return (
                  <motion.div
                    key={l.label}
                    initial={shouldReduceMotion ? false : { x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: shouldReduceMotion ? 0 : i * 0.04 }}
                  >
                    {hasSub ? (
                      <div className="rounded-xl overflow-hidden">
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === l.label ? null : l.label)
                          }
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-foreground font-bold text-base hover:bg-muted hover:text-accent transition-colors",
                            isActive && "text-accent",
                          )}
                        >
                          {l.label}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              openDropdown === l.label ? "rotate-180" : "",
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === l.label && (
                            <motion.div
                              initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                              animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                              exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              {/* Gradient separator */}
                              <div className="ml-4 mr-2 h-px bg-gradient-to-r from-accent/30 to-transparent mb-1" />
                              <div className="pl-6 pr-2 py-1 flex flex-col gap-0.5">
                                {l.subItems!.map((sub, idx) => {
                                  const subActive = pathname === sub.to;
                                  return (
                                    <motion.div
                                      key={sub.to}
                                      initial={shouldReduceMotion ? false : { x: -10, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ delay: shouldReduceMotion ? 0 : idx * 0.05 }}
                                    >
                                      <Link
                                        href={sub.to}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                          "flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors",
                                          subActive
                                            ? "bg-accent/10 text-accent"
                                            : "text-muted-foreground hover:text-accent hover:bg-muted",
                                        )}
                                      >
                                        <span
                                          className={cn(
                                            "w-1.5 h-1.5 rounded-full shrink-0",
                                            subActive ? "bg-accent" : "bg-muted-foreground/30",
                                          )}
                                        />
                                        {sub.label}
                                      </Link>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={l.to!}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3.5 text-base font-bold text-foreground hover:bg-muted hover:text-accent rounded-xl transition-colors",
                          isActive && "text-accent bg-accent/5",
                        )}
                      >
                        {l.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}

              {/* Divider */}
              <div className="my-2 h-px bg-border" />

              <a
                href="https://register.findmycareer.org.uk/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
