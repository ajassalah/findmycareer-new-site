import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2, Check, ArrowRight, Lightbulb, FileText, TrendingUp, Search,
  Globe, Shield, Rocket, Target, Users, Plane, Computer, Activity, GraduationCap,
  Leaf, ShoppingCart, Lock, Database, Cog, FileSignature, ClipboardCheck, Award,
  FileCheck, Sparkles, Building, Star, ChevronRight,
} from "lucide-react";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { cn } from "@/lib/utils";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

// Images
import heroNewImg from "@/assets/innovator visa/Hero Banner/hero.png";

export const Route = createFileRoute("/innovator-founder-visa")({
  head: () => ({
    meta: [
      { title: "UK Innovator Founder Visa — Find My Career" },
      { name: "description", content: "Expert guidance for the UK Innovator Founder Visa. Business plan development, endorsement support and visa application assistance." },
    ],
  }),
  component: InnovatorFounderVisaPage,
});

// ─── Animation variants ───────────────────────────────────────────────────────
const cardHover = { y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" };

const processSteps = [
  { title: "Business Idea Assessment", icon: Lightbulb, color: "from-amber-400 to-orange-500" },
  { title: "Business Plan Preparation", icon: FileSignature, color: "from-blue-400 to-indigo-500" },
  { title: "Endorsement Application", icon: ClipboardCheck, color: "from-emerald-400 to-teal-500" },
  { title: "Endorsement Approval", icon: Award, color: "from-violet-400 to-purple-500" },
  { title: "Visa Application", icon: Globe, color: "from-sky-400 to-blue-500" },
  { title: "Business Launch & Growth", icon: Rocket, color: "from-rose-400 to-pink-500" },
  { title: "Settlement (after 3 years)", icon: FileCheck, color: "from-teal-400 to-cyan-500" },
];

function InnovatorFounderVisaPage() {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = (delay = 0, axis: "y" | "x" = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : {
          initial: { opacity: 0, [axis]: distance },
          whileInView: { opacity: 1, [axis]: 0 },
          viewport: viewportOnce,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <div className="flex flex-col min-h-screen">

      {/* ─────────────────────────────────────────────────────────── HERO ─── */}
      <section
        className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #0F2547 50%, #0A1628 100%)" }}
      >
        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow orbs */}
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -top-40 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, #F59E0B33 0%, transparent 65%)" }}
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 9, repeat: Infinity }}
              className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, #3B82F633 0%, transparent 65%)" }}
            />
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger(0.1)}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest border border-accent/30">
                  <Sparkles className="w-3 h-3" />
                  Business &amp; Investment
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                UK Innovator{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  Founder Visa
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Launch and grow your innovative business in the UK. We guide entrepreneurs through endorsement, business planning, and visa applications with a proven track record.
              </motion.p>

              {/* Hero stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { n: "98%", label: "Visa Success" },
                  { n: "17+", label: "Years Experience" },
                  { n: "500+", label: "Clients Served" },
                ].map((s) => (
                  <div key={s.n} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                    <div className="text-2xl font-black text-accent">{s.n}</div>
                    <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/contact"
                  search={{ interestedIn: "Innovator Founder Visa" }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-bold hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                >
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white border border-white/20 font-semibold hover:bg-white/20 transition-colors"
                >
                  See the Process <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroNewImg}
                  alt="Innovator Founder Visa"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 via-transparent to-transparent pointer-events-none rounded-3xl" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">Endorsed &amp; Approved</div>
                    <div className="text-xs text-muted-foreground">By UK Home Office bodies</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-2xl px-4 py-3 shadow-xl font-bold text-sm"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  #1 Rated Consultancy
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── WHAT IS THE VISA ─── */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...motionProps(0, "x", -30)} className="space-y-6">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                What is the Innovator Founder Visa?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Innovator Founder Visa is designed for entrepreneurs who want to establish and run an innovative business in the United Kingdom. Applicants must have an original business idea that is innovative, viable, and scalable, and must obtain endorsement from an approved endorsing body before applying.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {[
                  "Live and work in the UK for 3 years",
                  "Bring your spouse and children",
                  "Run one or multiple businesses",
                  "Work in eligible skilled roles",
                  "Pathway to UK settlement (ILR)",
                  "No mandatory £50,000 investment",
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    {...motionProps(i * 0.08, "y", 12)}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 bg-emerald-500/10 p-1 rounded-full shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-foreground/90 font-medium text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div {...motionProps(0.3)}>
                <Link
                  to="/contact"
                  search={{ interestedIn: "Innovator Founder Visa" }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:scale-105 active:scale-95 transition-transform"
                >
                  Check Your Eligibility <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Requirements cards */}
            <div className="space-y-4">
              {[
                { title: "Innovative", desc: "A genuine original business idea that offers something new or significantly different.", icon: Lightbulb, color: "from-amber-400/20 to-orange-400/10 border-amber-400/30", iconBg: "bg-amber-500/10 text-amber-500" },
                { title: "Viable", desc: "You must have the skills, knowledge, experience, and resources to make the business successful.", icon: Target, color: "from-blue-400/20 to-indigo-400/10 border-blue-400/30", iconBg: "bg-blue-500/10 text-blue-500" },
                { title: "Scalable", desc: "The business should demonstrate growth potential, job creation, and expansion into wider markets.", icon: TrendingUp, color: "from-emerald-400/20 to-teal-400/10 border-emerald-400/30", iconBg: "bg-emerald-500/10 text-emerald-500" },
              ].map((req, i) => (
                <motion.div
                  key={i}
                  {...motionProps(i * 0.12, "x", 30)}
                  whileHover={shouldReduceMotion ? undefined : cardHover}
                  className={cn(
                    "flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br border transition-all duration-300",
                    req.color,
                  )}
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", req.iconBg)}>
                    <req.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{req.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{req.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── APPLICATION PROCESS ─── */}
      <section id="process" className="py-16 md:py-24 bg-[#0A1628] relative overflow-hidden">
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, #F59E0B22 0%, transparent 65%)" }}
            />
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.08)}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Step by Step
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              The Application Process
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-slate-400 max-w-xl mx-auto">
              A streamlined roadmap to your UK business launch.
            </motion.p>
          </motion.div>

          {/* Timeline grid */}
          <div className="relative">
            {/* Connector line desktop */}
            <div className="hidden lg:block absolute top-[2.25rem] left-[7%] right-[7%] h-px border-t-2 border-dashed border-white/10 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-5 lg:gap-3 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  {...motionProps(i * 0.08, "y", 30)}
                  whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                  className="flex flex-col items-center group"
                >
                  {/* Number circle */}
                  <div className={cn("w-11 h-11 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-black text-sm shadow-lg mb-5 ring-4 ring-[#0A1628] group-hover:scale-110 transition-transform z-10", step.color)}>
                    {i + 1}
                  </div>

                  {/* Card */}
                  <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center gap-3 group-hover:bg-white/10 group-hover:border-white/25 group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div className={cn("absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none", step.color.replace("from-", "from-").replace(" to-", " to-").replace(/\d+/g, (m) => String(Math.min(Number(m), 10))))} style={{ opacity: 0 }} />
                    <div className={cn("w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white shadow-md z-10", step.color)}>
                      <step.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-xs font-bold text-white leading-snug z-10">{step.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Inline CTA */}
          <motion.div
            {...motionProps(0.2)}
            className="mt-16 text-center"
          >
            <Link
              to="/contact"
              search={{ interestedIn: "Innovator Founder Visa" }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(245,158,11,0.4)]"
            >
              Start Your Application Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────── OUR SERVICES ─── */}
      <section className="py-16 md:py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.08)}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Our Support
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              End-to-End Guidance
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
              Comprehensive support through every step of your entrepreneurial journey.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Business Idea Assessment", desc: "We evaluate whether your concept meets UK endorsement criteria — saving you time and rejection risk.", icon: Search, accent: "text-amber-500", bg: "bg-amber-500/8" },
              { title: "Business Plan Development", desc: "Professional Innovator Founder business plans crafted by our expert team to meet endorsing body standards.", icon: FileText, accent: "text-blue-500", bg: "bg-blue-500/8" },
              { title: "Financial Forecasting", desc: "Investor-ready financial projections, revenue models and cashflow analyses included.", icon: TrendingUp, accent: "text-emerald-500", bg: "bg-emerald-500/8" },
              { title: "Endorsement Support", desc: "Full guidance through the endorsement application process with our approved body network.", icon: CheckCircle2, accent: "text-violet-500", bg: "bg-violet-500/8" },
              { title: "Visa Application Assistance", desc: "End-to-end preparation and submission support for your UKVI application.", icon: FileText, accent: "text-sky-500", bg: "bg-sky-500/8" },
              { title: "Post-Visa Business Support", desc: "Growth planning, compliance advice, and expansion support after your visa is granted.", icon: Rocket, accent: "text-rose-500", bg: "bg-rose-500/8" },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...motionProps(i * 0.07, "y", 20)}
                whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
                className="group relative overflow-hidden rounded-2xl border border-border p-7 hover:border-accent/40 transition-all duration-300 bg-background"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform", service.bg)}>
                  <service.icon className={cn("w-6 h-6", service.accent)} />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── PACKAGES ─── */}
      <section className="py-16 md:py-24 bg-muted/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...motionProps()}
            className="text-center mb-14"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Packages</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Choose the Right Package for You
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our packages bundle complementary services at a discounted rate. Most clients choose the Professional package.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
            {/* Essential */}
            <motion.div
              {...motionProps(0, "y", 20)}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="bg-card rounded-[2rem] p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">Essential</h3>
              <p className="mt-3 text-sm text-muted-foreground min-h-[40px]">Basic support for getting started and validating your idea.</p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  search={{ interestedIn: "Innovator Founder Visa - Essential Package", message: "Hi, I am interested in the Essential Package for the Innovator Founder Visa." }}
                  className="block text-center w-full py-3.5 px-4 bg-primary/5 hover:bg-primary/10 text-primary font-semibold rounded-xl transition-colors"
                >
                  Choose Essential
                </Link>
              </div>
              <div className="mt-6 space-y-3">
                {["Initial Eligibility Assessment", "Candidate Profiling & Review", "Business Idea Validation", "2 Mentoring sessions included"].map((f, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional — featured */}
            <motion.div
              {...motionProps(0.1, "y", 20)}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="relative bg-gradient-to-br from-[#1E3A5F] to-[#0A1628] rounded-[2rem] p-8 shadow-2xl md:scale-[1.04] z-10 text-white border border-blue-500/20"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-bold px-5 py-1.5 rounded-full text-xs tracking-wider whitespace-nowrap shadow-md uppercase">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mt-2">Professional</h3>
              <p className="mt-3 text-sm text-blue-200 min-h-[40px]">Comprehensive support from idea validation to endorsement.</p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  search={{ interestedIn: "Innovator Founder Visa - Professional Package", message: "Hi, I am interested in the Professional Package for the Innovator Founder Visa." }}
                  className="block text-center w-full py-3.5 px-4 bg-accent text-accent-foreground hover:bg-amber-400 font-bold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
                >
                  Choose Professional
                </Link>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex gap-3 text-sm font-semibold text-blue-100">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>All in Essential plan</span>
                </div>
                {["Market Research Guidance", "Business Model Development", "Business Plan & Financials", "Prototype (included)", "5 Mentoring sessions", "Full MVP Development (Add-on)"].map((f, i) => (
                  <div key={i} className="flex gap-3 text-sm text-blue-200">
                    <Check className="w-5 h-5 text-blue-300 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Premium */}
            <motion.div
              {...motionProps(0.2, "y", 20)}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="bg-card rounded-[2rem] p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="mt-3 text-sm text-muted-foreground min-h-[40px]">Full-service support including MVP development.</p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  search={{ interestedIn: "Innovator Founder Visa - Premium Package", message: "Hi, I am interested in the Premium Package for the Innovator Founder Visa." }}
                  className="block text-center w-full py-3.5 px-4 bg-[#0A1628] hover:bg-[#1E3A5F] text-white font-semibold rounded-xl transition-colors"
                >
                  Choose Premium
                </Link>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex gap-3 text-sm font-semibold text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>All in Professional plan</span>
                </div>
                {["Pitch Deck Creation Support", "Innovation Assessment Prep", "Endorsement Prep & Interview", "Full MVP Development (included)", "Unlimited* Mentoring sessions"].map((f, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <p className="mt-10 text-xs text-muted-foreground text-center">*Unlimited mentoring is subject to fair-use during the active engagement period.</p>
        </div>
      </section>

      {/* ─────────────────────────────── WHY UK ─── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.08)}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Why the UK
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Why Entrepreneurs Choose the UK
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
              The UK offers an unparalleled ecosystem for startups and innovative businesses.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Access to Global Markets", desc: "The UK serves as a gateway to European and international markets.", icon: Globe, color: "bg-blue-500/10 text-blue-500" },
              { title: "World-Class Startup Ecosystem", desc: "Access to investors, accelerators, and innovation hubs.", icon: Rocket, color: "bg-amber-500/10 text-amber-500" },
              { title: "Strong Legal Framework", desc: "A stable, transparent business environment for startups and investors.", icon: Shield, color: "bg-emerald-500/10 text-emerald-500" },
              { title: "Talent Pool", desc: "Access to skilled professionals across multiple industries.", icon: Users, color: "bg-violet-500/10 text-violet-500" },
              { title: "Innovation-Friendly", desc: "Particularly strong in AI, FinTech, HealthTech, EdTech, and SaaS sectors.", icon: Lightbulb, color: "bg-sky-500/10 text-sky-500" },
            ].map((f, i) => (
              <motion.div
                key={i}
                {...motionProps(i * 0.08, "y", 20)}
                whileHover={shouldReduceMotion ? undefined : { y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                className="group p-6 rounded-2xl bg-muted/40 border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", f.color)}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── ELIGIBLE SECTORS ─── */}
      <section className="py-16 md:py-20 bg-muted/30 relative border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...motionProps()} className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Sectors</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Eligible Business Sectors</h2>
            <p className="mt-4 text-lg text-muted-foreground">The Innovator Founder Visa supports forward-thinking industries.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { name: "Artificial Intelligence", icon: Computer },
              { name: "FinTech", icon: Activity },
              { name: "HealthTech", icon: Activity },
              { name: "EdTech", icon: GraduationCap },
              { name: "Green Technology", icon: Leaf },
              { name: "E-commerce Innovation", icon: ShoppingCart },
              { name: "SaaS", icon: Database },
              { name: "Cybersecurity", icon: Lock },
              { name: "Digital Platforms", icon: Globe },
              { name: "Advanced Manufacturing", icon: Cog },
            ].map((sector, i) => (
              <motion.div
                key={i}
                {...motionProps(i * 0.04, "y", 15)}
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.03 }}
                className="bg-background rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2.5 border border-border hover:border-accent/30 hover:shadow-md transition-all duration-200"
              >
                <sector.icon className="w-7 h-7 text-accent/80" />
                <span className="font-semibold text-xs leading-snug">{sector.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── COMMON FAILURES ─── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-destructive/5 to-rose-500/5 rounded-3xl p-8 md:p-12 border border-destructive/15 relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...motionProps(0, "x", -20)}>
                <span className="inline-block text-xs uppercase tracking-[0.3em] text-destructive font-semibold mb-3">Watch Out</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Common Reasons Applications Fail</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Avoid these pitfalls with our expert guidance. Insights commonly flagged by endorsing bodies and the Home Office.
                </p>
                <Link
                  to="/contact"
                  search={{ interestedIn: "Innovator Founder Visa" }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0A1628] text-white font-semibold text-sm hover:bg-[#1E3A5F] transition-colors"
                >
                  Get Expert Help <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <div className="space-y-3">
                {[
                  "Business idea is not innovative",
                  "Weak or generic business plan",
                  "Lack of demonstrated scalability",
                  "Insufficient market research",
                  "Poor or unrealistic financial projections",
                  "Inadequate evidence for endorsement body",
                ].map((reason, i) => (
                  <motion.div
                    key={i}
                    {...motionProps(i * 0.08, "x", 20)}
                    className="flex items-center gap-3 bg-background/80 backdrop-blur rounded-xl p-4 shadow-sm border border-border/50"
                  >
                    <div className="w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center text-destructive shrink-0 font-bold text-sm">
                      ✕
                    </div>
                    <span className="font-medium text-foreground text-sm">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── FAQS ─── */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...motionProps()} className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "How long is the visa valid?", a: "3 years initially, with the possibility of extension or settlement after 3 years." },
              { q: "Can I bring my family?", a: "Yes, eligible dependants (spouse/civil partner and children under 18) can accompany you." },
              { q: "Do I need investment funds?", a: "Not necessarily, but you must demonstrate access to sufficient resources and funding where required by your business plan." },
              { q: "Can I apply for settlement?", a: "Yes, eligible applicants may apply for Indefinite Leave to Remain (ILR) after 3 years of holding the visa." },
              { q: "Can multiple founders apply?", a: "Yes, entrepreneurial teams can be endorsed together, with each member needing their own visa application." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                {...motionProps(i * 0.08, "y", 10)}
                className="bg-background rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-base font-bold mb-2 flex items-start gap-2">
                  <span className="text-accent shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-5">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FreeConsultationCTA />
    </div>
  );
}
