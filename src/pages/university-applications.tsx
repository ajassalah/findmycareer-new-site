import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, GraduationCap, Building2, FileText, Send, Award, Calendar, Check, Search, FileSignature } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { cn } from "@/lib/utils";
import { viewportOnce } from "@/lib/animations";

// Reusing images from innovator visa folder as requested
import heroImg from "@/assets/innovator visa/Hero Banner/2JJBoOIUh-O7A340L1s84dvfMmIZ3IanT9Mrrfk-pkeSljGWAFKTsmZWw79ztkppMF8X2O7fCWsNbySHP1m0XvzNH1sc0qpYVp8ekHed9CZh1DSmRnf7KwNQ3Zv9Qi1Mu6-rv1J8SIPc.jfif";
import lifestyleImg from "@/assets/innovator visa/UK Lifestyle & Family Relocation Section/2A56beWCUy-t-Sm-KeXv9Z6yjY8GXH0cFx6fTHNHeCAo_RivM4GLzF3bvV7jsRw9A4MYjE-8S5RmqVbYOKOPZ7am1NuYO6SFjC-JTkCXB7diMqz_2_wntylCO9wyDz5mgJD0sm9SA_4FhsYwvS-cW-6H.jfif";


export default function UniversityApplicationsPage() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="University Applications"
        subtitle="End-to-end support for choosing the right programs and submitting winning applications to top global universities."
        eyebrow="Our Services"
      />

      {/* Overview Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Your Gateway to Global Education</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Navigating the university application process can be overwhelming. From selecting the right course and university to crafting a compelling Statement of Purpose (SOP) and securing admission, our expert counselors are here to guide you every step of the way.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Personalized University Shortlisting",
                  "Course and Career Counseling",
                  "SOP and Resume Review",
                  "Document Preparation",
                  "Direct University Communications",
                  "Interview Preparation",
                ].map((benefit, i) => (
                  <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="mt-1 bg-accent/10 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                    <span className="text-foreground/90 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img src={lifestyleImg} alt="Students on Campus" className="object-cover w-full h-full" />
              <div className="absolute inset-0 border border-white/20 rounded-3xl z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Application Process - Card Style Timeline */}
      <section className="py-20 md:py-32 bg-background relative border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Application Process</h2>
            <p className="text-lg text-muted-foreground">A clear, step-by-step journey to your dream university.</p>
          </div>

          <div className="relative bg-muted/10 border border-border rounded-xl p-8 pt-16 mt-8 shadow-sm">
            {/* Label */}
            <div className="absolute -top-4 left-6 bg-[#0A1628] text-white px-6 py-2 rounded-md font-bold tracking-wide shadow-md">
              OUR PROCESS
            </div>

            <div className="relative pt-4 mt-6">
              {/* Horizontal connecting line (hidden on small screens) */}
              <div className="hidden lg:block absolute top-[1.75rem] left-[7%] right-[7%] h-[2px] border-t-2 border-dashed border-muted-foreground/30 z-0"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
                {[
                  { title: "Profile Evaluation", icon: Search },
                  { title: "Course & Uni Selection", icon: Building2 },
                  { title: "Document Preparation", icon: FileSignature },
                  { title: "Application Submission", icon: Send },
                  { title: "Offer Letter & Next Steps", icon: Award },
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
                    <motion.div whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }} className="w-full h-full bg-background/50 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col items-center text-center shadow-sm group-hover:shadow-md group-hover:border-accent/60 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                      {/* Inner glowing accent effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Icon Circle */}
                      <div className="w-14 h-14 rounded-full bg-[#0A1628] flex items-center justify-center text-white mb-4 shadow-lg z-10">
                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-sm font-bold text-foreground leading-snug z-10">{item.title}</h4>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-sm relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Standard Required Documents</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  While requirements vary by university and course, having these documents prepared will fast-track your application. Our team will review them to ensure they meet the university's standards.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Academic Transcripts & Certificates",
                  "Statement of Purpose (SOP)",
                  "Letters of Recommendation (LOR)",
                  "English Proficiency Test Scores (e.g., IELTS)",
                  "Updated Curriculum Vitae (CV)",
                  "Passport Copy",
                ].map((doc, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 bg-muted/50 backdrop-blur rounded-lg p-4 border border-border/50">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 font-bold text-sm"><Check className="w-4 h-4" /></div>
                    <span className="font-medium text-foreground">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <FreeConsultationCTA />
    </div>
  );
}
