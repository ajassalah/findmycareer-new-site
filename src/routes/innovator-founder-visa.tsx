import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Check, ArrowRight, Lightbulb, FileText, TrendingUp, Search, Briefcase, Globe, Shield, Rocket, Target, Users, Plane, Computer, Activity, GraduationCap, Leaf, ShoppingCart, Lock, Database, Cog, FileSignature, ClipboardCheck, Award, FileCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { cn } from "@/lib/utils";

// Images
import heroImg from "@/assets/innovator visa/Hero Banner/2JJBoOIUh-O7A340L1s84dvfMmIZ3IanT9Mrrfk-pkeSljGWAFKTsmZWw79ztkppMF8X2O7fCWsNbySHP1m0XvzNH1sc0qpYVp8ekHed9CZh1DSmRnf7KwNQ3Zv9Qi1Mu6-rv1J8SIPc.jfif";
import businessPlanImg from "@/assets/innovator visa/Business Plan & Endorsement Section/5btVkbgK2EkhwbiXKDuHjqkGk6eLCL6YwPfGuuRNRFPjSQD-46f48nqP7Nryxis4nbINlgjbVCOCtVBV98Ms9fQpH2c-ealZz4MrcblKonxfONPuE_7M.jfif";
import lifestyleImg from "@/assets/innovator visa/UK Lifestyle & Family Relocation Section/2A56beWCUy-t-Sm-KeXv9Z6yjY8GXH0cFx6fTHNHeCAo_RivM4GLzF3bvV7jsRw9A4MYjE-8S5RmqVbYOKOPZ7am1NuYO6SFjC-JTkCXB7diMqz_2_wntylCO9wyDz5mgJD0sm9SA_4FhsYwvS-cW-6H.jfif";
import heroNewImg from "@/assets/innovator visa/Hero Banner/hero.png";

export const Route = createFileRoute("/innovator-founder-visa")({
  component: InnovatorFounderVisaPage,
});

function InnovatorFounderVisaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="UK Innovator Founder Visa"
        subtitle="Launch and grow an innovative business in the UK with expert guidance on endorsement, business planning, and visa applications."
        eyebrow="Business & Investment"
      />

      {/* Section 1: What is the Innovator Founder Visa? */}
      <section className="py-10 md:py-16 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What is the Innovator Founder Visa?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Innovator Founder Visa is designed for entrepreneurs who want to establish and run an innovative business in the United Kingdom. Applicants must have an original business idea that is innovative, viable, and scalable, and must obtain endorsement from an approved endorsing body before applying.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Live and work in the UK for 3 years",
                  "Bring your spouse and children",
                  "Run one or multiple businesses",
                  "Work outside your business in eligible skilled roles",
                  "Pathway to UK settlement (ILR)",
                  "No mandatory £50,000 investment requirement under current rules",
                ].map((benefit, i) => (
                  <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="mt-1 bg-green-500/10 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                    <span className="text-foreground/90 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl lg:scale-[1.15] lg:translate-x-4 xl:scale-[1.2] xl:translate-x-8"
            >
              <img src={heroNewImg} alt="hero" className="w-full h-auto object-contain" />
              <div className="absolute inset-0 border border-white/20 rounded-3xl z-10 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Visa Requirements */}
      <section className="py-10 md:py-14 bg-muted/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Visa Requirements</h2>
            <p className="text-lg text-muted-foreground">Your business must meet three core criteria to qualify for endorsement.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Innovative", desc: "A genuine original business idea that offers something new or significantly different.", icon: Lightbulb },
              { title: "Viable", desc: "You must have the skills, knowledge, experience, and resources to make the business successful.", icon: Target },
              { title: "Scalable", desc: "The business should demonstrate growth potential, job creation, and expansion into wider markets.", icon: TrendingUp },
            ].map((req, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <req.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{req.title}</h3>
                <p className="text-muted-foreground">{req.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Requirements</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[ "Minimum age: 18 years", "English language proficiency", "Endorsement from an approved body", "Personal maintenance funds", "Valid passport and supporting documents" ].map((req, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground/80 font-medium text-sm">
                  <Check className="w-4 h-4 text-accent" /> {req}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our End-to-End Support */}
      <section className="py-10 md:py-14 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our End-to-End Support</h2>
            <p className="text-lg text-muted-foreground">Comprehensive guidance through every step of your entrepreneurial journey in the UK.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Business Idea Assessment", desc: "We evaluate whether your concept meets UK endorsement criteria.", icon: Search },
              { title: "Business Plan Development", desc: "Professional Innovator Founder business plan creation.", icon: FileText },
              { title: "Financial Forecasting", desc: "Investor-ready financial projections.", icon: TrendingUp },
              { title: "Endorsement Support", desc: "Guidance through the endorsement process.", icon: CheckCircle2 },
              { title: "Visa Application Assistance", desc: "Preparation and submission support.", icon: FileText },
              { title: "Post-Visa Business Support", desc: "Growth planning, compliance, and expansion support.", icon: Rocket },
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-border p-8 hover:border-accent/50 transition-colors bg-gradient-to-b from-background to-muted/20">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Application Process */}
      <section className="py-10 md:py-14 bg-muted/30 relative border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Application Process</h2>
            <p className="text-lg text-muted-foreground">A streamlined roadmap to your UK business launch.</p>
          </div>

          <div className="relative bg-background border border-border rounded-xl p-8 pt-16 mt-8 shadow-sm">
            {/* Label */}
            <div className="absolute -top-4 left-6 bg-[#0A1628] text-white px-6 py-2 rounded-md font-bold tracking-wide shadow-md">
              TYPICAL PROCESS
            </div>

            <div className="relative pt-4 mt-6">
              {/* Horizontal connecting line (hidden on small screens) */}
              <div className="hidden lg:block absolute top-[1.75rem] left-[7%] right-[7%] h-[2px] border-t-2 border-dashed border-muted-foreground/30 z-0"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4 relative z-10">
                {[
                  { title: "Business Idea Assessment", icon: Lightbulb },
                  { title: "Business Plan Preparation", icon: FileSignature },
                  { title: "Endorsement Application", icon: ClipboardCheck },
                  { title: "Endorsement Approval", icon: Award },
                  { title: "Innovator Founder Visa Application", icon: Globe },
                  { title: "Business Launch & Growth", icon: Rocket },
                  { title: "Settlement Application (if eligible after 3 years)", icon: FileCheck },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: i * 0.1 }} 
                    className="flex flex-col items-center group relative"
                  >
                    {/* Number Indicator on the line */}
                    <div className="w-10 h-10 rounded-full bg-[#C8102E] text-white font-bold flex items-center justify-center text-sm shadow-md mb-6 z-10 ring-4 ring-background group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    
                    {/* Card Container */}
                    <div className="w-full h-full bg-background/50 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col items-center text-center shadow-sm group-hover:shadow-md group-hover:border-accent/60 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                      {/* Inner glowing accent effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Icon Circle */}
                      <div className="w-14 h-14 rounded-full bg-[#0A1628] flex items-center justify-center text-white mb-4 shadow-lg z-10">
                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-sm font-bold text-foreground leading-snug z-10">{item.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4b: Packages */}
      <section className="py-20 bg-muted/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Packages</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Choose the Right Package for You</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Our packages bundle complementary services at a discounted rate. Most clients choose the Professional package.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            
            {/* Essential Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-[2rem] p-8 md:p-10 border border-border shadow-sm hover:shadow-md transition-shadow relative">
              <h3 className="text-2xl font-bold text-foreground">Essential</h3>
              <p className="mt-3 text-sm text-muted-foreground min-h-[40px]">Basic support for getting started and validating your idea.</p>
              
              <div className="mt-8">
                <Link to="/contact" search={{ interestedIn: "Innovator Founder Visa - Essential Package", message: "Hi, I am interested in the Essential Package for the Innovator Founder Visa. Please provide more details." }} className="block text-center w-full py-3.5 px-4 bg-primary/5 hover:bg-primary/10 text-primary font-semibold rounded-xl transition-colors">
                  Choose Essential
                </Link>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Initial Eligibility Assessment",
                  "Candidate Profiling & Review",
                  "Business Idea Validation",
                  "2 Mentoring sessions included"
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative bg-[#3B82F6] rounded-[2rem] p-8 md:p-10 shadow-xl md:scale-[1.05] z-10 text-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-4 py-1.5 rounded-full text-xs tracking-wider whitespace-nowrap shadow-md uppercase">
                MOST POPULAR
              </div>
              
              <h3 className="text-2xl font-bold mt-2">Professional</h3>
              <p className="mt-3 text-sm text-blue-100 min-h-[40px]">Comprehensive support from idea validation to endorsement.</p>

              <div className="mt-8">
                <Link to="/contact" search={{ interestedIn: "Innovator Founder Visa - Professional Package", message: "Hi, I am interested in the Professional Package for the Innovator Founder Visa. Please provide more details." }} className="block text-center w-full py-3.5 px-4 bg-white text-blue-600 hover:bg-slate-50 font-semibold rounded-xl shadow-sm transition-colors">
                  Choose Professional
                </Link>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3 text-sm font-medium">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span>All in the Essential plan</span>
                </div>
                {[
                  "Market Research Guidance",
                  "Business Model Development",
                  "Business Plan & Financials",
                  "Prototype (included)",
                  "5 Mentoring sessions",
                  "Full MVP Development (Add-on)"
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 text-sm text-blue-50">
                    <Check className="w-5 h-5 text-blue-200 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Premium Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-card rounded-[2rem] p-8 md:p-10 border border-border shadow-sm hover:shadow-md transition-shadow relative">
              <h3 className="text-2xl font-bold text-foreground">Premium</h3>
              <p className="mt-3 text-sm text-muted-foreground min-h-[40px]">Full-service support including MVP development.</p>

              <div className="mt-8">
                <Link to="/contact" search={{ interestedIn: "Innovator Founder Visa - Premium Package", message: "Hi, I am interested in the Premium Package for the Innovator Founder Visa. Please provide more details." }} className="block text-center w-full py-3.5 px-4 bg-[#0A1628] hover:bg-[#1E3A5F] text-white font-semibold rounded-xl transition-colors">
                  Choose Premium
                </Link>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3 text-sm font-medium text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>All in the Professional plan</span>
                </div>
                {[
                  "Pitch Deck Creation Support",
                  "Innovation Assessment Prep",
                  "Endorsement Prep & Interview",
                  "Full MVP Development (included)",
                  "Unlimited* Mentoring sessions"
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
          <p className="mt-16 text-xs text-muted-foreground text-center">*Unlimited mentoring is subject to fair-use during the active engagement period.</p>
        </div>
      </section>

      {/* Section 5: Why Entrepreneurs Choose the UK */}
      <section className="py-10 md:py-14 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Entrepreneurs Choose the UK</h2>
            <p className="text-lg text-muted-foreground">The UK offers an unparalleled ecosystem for startups and innovative businesses.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Access to Global Markets", desc: "The UK serves as a gateway to European and international markets.", icon: Globe },
              { title: "World-Class Startup Ecosystem", desc: "Access to investors, accelerators, and innovation hubs.", icon: Rocket },
              { title: "Strong Legal Framework", desc: "A stable business environment for startups and investors.", icon: Shield },
              { title: "Talent Pool", desc: "Access to skilled professionals across multiple industries.", icon: Users },
              { title: "Innovation-Friendly Environment", desc: "Particularly strong in AI, FinTech, HealthTech, EdTech, and SaaS sectors.", icon: Lightbulb },
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-muted/40 border border-border">
                <feature.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Eligible Business Sectors */}
      <section className="py-10 md:py-14 bg-primary/5 relative border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Eligible Business Sectors</h2>
            <p className="text-lg text-muted-foreground">The Innovator Founder Visa supports a wide range of forward-thinking industries.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Artificial Intelligence (AI)", icon: Computer },
              { name: "FinTech", icon: Activity },
              { name: "HealthTech", icon: Activity },
              { name: "EdTech", icon: GraduationCap },
              { name: "Green Technology", icon: Leaf },
              { name: "E-commerce Innovation", icon: ShoppingCart },
              { name: "Software as a Service (SaaS)", icon: Database },
              { name: "Cybersecurity", icon: Lock },
              { name: "Digital Platforms", icon: Globe },
              { name: "Advanced Manufacturing", icon: Cog },
            ].map((sector, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-background rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all">
                <sector.icon className="w-8 h-8 text-accent/80" />
                <span className="font-semibold text-sm">{sector.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Common Reasons Applications Fail */}
      <section className="py-10 md:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-destructive/5 rounded-3xl p-8 md:p-12 border border-destructive/20 relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Common Reasons Applications Fail</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  This section is excellent for building trust and showing our expertise. Insights commonly discussed by founders and endorsing bodies emphasize innovation, validation, scalability, and strong business planning.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Business idea is not innovative",
                  "Weak business plan",
                  "Lack of scalability",
                  "Insufficient market research",
                  "Poor financial projections",
                  "Inadequate evidence for endorsement",
                ].map((reason, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 bg-background/80 backdrop-blur rounded-lg p-4 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive shrink-0 font-bold text-sm">✕</div>
                    <span className="font-medium text-foreground">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQs */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "How long is the visa valid?", a: "3 years initially." },
              { q: "Can I bring my family?", a: "Yes, eligible dependants can accompany you." },
              { q: "Do I need investment funds?", a: "Not necessarily, but you must demonstrate access to sufficient resources and funding where required." },
              { q: "Can I apply for settlement?", a: "Yes, eligible applicants may apply for settlement after 3 years." },
              { q: "Can multiple founders apply?", a: "Yes, entrepreneurial teams can be endorsed." },
            ].map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <FreeConsultationCTA />
    </div>
  );
}
