import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import logo from "@/assets/fmc-logo.png";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

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
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isSolid
          ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Find My Career — Study Abroad Consultancy" className={cn("h-12 lg:h-14 w-auto transition-all duration-300", !isSolid && "brightness-0 invert")} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.to;
            const hasSub = !!l.subItems?.length;

            return (
              <div key={l.label} className="relative group">
                {l.to ? (
                  <Link
                    to={l.to}
                    className={cn(
                      "relative px-4 py-2 text-base font-bold transition-colors rounded-md flex items-center gap-1",
                      isSolid ? "text-foreground" : "text-white",
                      "hover:text-accent",
                    )}
                  >
                    {l.label}
                    {hasSub && <ChevronDown className="w-4 h-4" />}
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
                      "relative px-4 py-2 text-base font-bold transition-colors rounded-md flex items-center gap-1",
                      isSolid ? "text-foreground" : "text-white",
                      "hover:text-accent",
                    )}
                  >
                    {l.label}
                    {hasSub && <ChevronDown className="w-4 h-4" />}
                  </button>
                )}

                {hasSub && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                    <div className="bg-background border border-border rounded-xl shadow-lg p-2 min-w-[200px] flex flex-col gap-1">
                      {l.subItems!.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className="px-4 py-2 text-base font-semibold text-foreground/80 hover:text-accent hover:bg-muted rounded-md transition-colors whitespace-nowrap"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
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
            className={cn("lg:hidden p-2 rounded-md hover:bg-muted", scrolled ? "text-foreground" : "text-white")}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {NAV_LINKS.map((l, i) => {
                const hasSub = !!l.subItems?.length;
                return (
                  <motion.div
                    key={l.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {hasSub ? (
                      <div>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === l.label ? null : l.label)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-md text-foreground font-bold text-lg hover:bg-muted hover:text-accent"
                        >
                          {l.label}
                          <ChevronDown className={cn("w-5 h-5 transition-transform", openDropdown === l.label ? "rotate-180" : "")} />
                        </button>
                        <AnimatePresence>
                          {openDropdown === l.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-8 pr-4 py-2 flex flex-col gap-1">
                                {l.subItems!.map((sub) => (
                                  <Link
                                    key={sub.to}
                                    to={sub.to}
                                    onClick={() => setOpen(false)}
                                    className="block px-4 py-2 text-base font-semibold text-muted-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={l.to!}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 text-lg font-bold text-foreground hover:bg-muted hover:text-accent rounded-md transition-colors"
                      >
                        {l.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
              <a
                href="https://register.findmycareer.org.uk/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-accent text-accent-foreground font-semibold"
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
