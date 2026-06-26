import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import {
  GraduationCap, Award, Globe2, Briefcase, HeartPulse, Wrench,
  Building2, Monitor, LineChart, Utensils, CheckCircle2, ArrowRight,
  MapPin, Building, Target, Search, Plane
} from "lucide-react";

// Assets
import heroImg from "@/assets/Australia/Hero Image.jfif";
import studentLife1 from "@/assets/Australia/Student Life Images.jfif";
import studentLife2 from "@/assets/Australia/Student Life Images1.jfif";
import studentLife3 from "@/assets/Australia/Student Life Images2.jfif";
import careerImg from "@/assets/Australia/Career Success Images.jfif";
import universitiesImg from "@/assets/Australia/University Section Images.jfif";
import universitiesImg2 from "@/assets/Australia/University Section Images1.jfif";

export const Route = createFileRoute("/study-in-australia")({
  head: () => ({
    meta: [
      { title: "Study in Australia — Find My Career" },
      { name: "description", content: "World-Class Education, Exceptional Lifestyle, Global Career Opportunities. Explore top universities and student life in Australia." },
    ],
    links: [{ rel: "canonical", href: "/study-in-australia" }],
  }),
  component: StudyInAustraliaPage,
});

const whyStudy = [
  { icon: Award, title: "Globally Recognized", desc: "Australian degrees are respected and recognized by employers, universities, and professional organizations around the world." },
  { icon: GraduationCap, title: "World-Class Universities", desc: "Home to several globally ranked universities known for excellence in teaching, research, and innovation." },
  { icon: Briefcase, title: "Post-Study Work", desc: "Attractive post-study work pathways, allowing eligible graduates to gain valuable international work experience." },
  { icon: HeartPulse, title: "High Quality of Life", desc: "Consistently ranks among the world's best countries for quality of life, safety, healthcare, and student satisfaction." },
  { icon: Globe2, title: "Multicultural Environment", desc: "Students from over 190 countries choose Australia each year, creating a diverse international community." },
  { icon: Wrench, title: "Industry-Focused", desc: "Australian institutions emphasize practical learning, internships, and real-world industry experience." },
];

const programs = [
  { icon: Building2, title: "Business & Management", desc: "Develop leadership, entrepreneurship, and strategic management skills." },
  { icon: Monitor, title: "IT & Cybersecurity", desc: "Study software development, artificial intelligence, data science, and cybersecurity." },
  { icon: Wrench, title: "Engineering", desc: "Explore civil, mechanical, electrical, mining, and environmental engineering disciplines." },
  { icon: HeartPulse, title: "Nursing & Healthcare", desc: "Internationally respected healthcare and nursing programs with practical training opportunities." },
  { icon: LineChart, title: "Accounting & Finance", desc: "Prepare for global careers in banking, finance, auditing, and business consultancy." },
  { icon: Utensils, title: "Hospitality & Tourism", desc: "Gain industry-focused skills in one of Australia's strongest sectors." },
];

const workBenefits = [
  "Practical work experience",
  "Professional networking opportunities",
  "Additional income support",
  "Enhanced employability after graduation",
];

const scholarships = [
  "Merit-Based Scholarships",
  "Academic Excellence Awards",
  "Research Scholarships",
  "International Student Grants",
  "University-Specific Scholarships",
  "Government Funding Programs",
];

const supportServices = [
  { icon: Building, title: "University Selection", desc: "Helping students choose the right academic pathway based on their goals and budget." },
  { icon: Target, title: "Application Support", desc: "End-to-end assistance with university applications and documentation." },
  { icon: Award, title: "IELTS & English Prep", desc: "Expert coaching to help students achieve required English language scores." },
  { icon: Search, title: "Student Visa Guidance", desc: "Professional assistance with Australian student visa applications." },
  { icon: Award, title: "Scholarship Assistance", desc: "Helping students maximize funding opportunities." },
  { icon: Plane, title: "Pre-Departure & Post-Arrival", desc: "Comprehensive support before departure and after arrival in Australia." },
];

const topUnis = [
  "The University of Melbourne", "The University of Sydney", "The University of New South Wales (UNSW Sydney)",
  "Australian National University (ANU)", "Monash University", "The University of Queensland",
  "The University of Western Australia", "University of Adelaide", "University of Technology Sydney (UTS)", "Macquarie University"
];

const cities = ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra", "Gold Coast"];

function StudyInAustraliaPage() {

  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Study Destination"
        title={<>Study in <span className="text-accent">Australia</span></>}
        subtitle="World-Class Education, Exceptional Lifestyle, Global Career Opportunities."
        image={heroImg}
      />

      {/* Intro */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <motion.p {...motionProps()} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Australia is one of the most popular destinations for international students, offering high-quality education, globally recognized qualifications, a welcoming multicultural environment, and excellent career prospects. With world-ranked universities, innovative teaching methods, and strong industry connections, Australia provides students with the skills and experience needed to succeed in today's competitive global economy.
        </motion.p>
        <motion.p {...motionProps(0.1)} className="mt-6 text-lg text-foreground font-medium">
          Whether you're planning to pursue undergraduate, postgraduate, vocational, or research programs, Australia offers outstanding opportunities for academic and personal growth.
        </motion.p>
      </section>

      {/* Why Study in Australia */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...motionProps(0, "x", -30)} className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">The Aussie Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Study in Australia?</h2>
              
              <div className="grid gap-6 mt-8">
                {whyStudy.map((item, i) => (
                  <motion.div key={i} {...motionProps(i * 0.1, "y", 10)} whileHover={shouldReduceMotion ? undefined : { y: -3 }} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div {...motionProps(0, "y", 30)} className="col-span-2 aspect-video rounded-3xl overflow-hidden shadow-xl">
                <img src={studentLife1} alt="Australian Student Life" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div {...motionProps(0.1, "y", 30)} className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src={studentLife2} alt="Students in Australia" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div {...motionProps(0.2, "y", 30)} className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src={studentLife3} alt="Campus Life" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Courses</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-bold">Popular Courses in Australia</motion.h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div key={i} {...motionProps(i * 0.1)} whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }} className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:border-accent/30 transition-all duration-300 group">
              <prog.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{prog.title}</h3>
              <p className="text-muted-foreground text-sm">{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work & Career */}
      <section className="py-20 lg:py-28 bg-[#0A1628] text-white relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #F59E0B66 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }} className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src={careerImg} alt="Career Opportunities in Australia" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div {...motionProps(0, "x", 30)}>
              <h2 className="text-3xl font-bold mb-6">Work Opportunities for Students</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                International students in Australia may have opportunities to work part-time while studying, helping them gain valuable experience and support living expenses.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {workBenefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm text-slate-200">{b}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Career Opportunities After Graduation</h3>
              <p className="text-slate-300 leading-relaxed">
                Australian qualifications are highly valued worldwide. Graduates benefit from strong industry connections, practical skills, and access to opportunities across sectors such as technology, healthcare, engineering, business, finance, and education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Services & Scholarships */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Our Australia Study Abroad Services</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {supportServices.map((srv, i) => (
                <motion.div key={i} {...motionProps(i * 0.1, "y", 10)} whileHover={shouldReduceMotion ? undefined : { y: -3 }} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <srv.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{srv.title}</h4>
                    <p className="text-sm text-muted-foreground">{srv.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div {...motionProps(0, "x", 30)} className="bg-muted/30 p-8 rounded-3xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Scholarships</h3>
            <p className="text-muted-foreground text-sm mb-6">Many Australian universities offer scholarships to outstanding international students.</p>
            <h4 className="font-semibold mb-4">Opportunities Include:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {scholarships.map(s => (
                <span key={s} className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">{s}</span>
              ))}
            </div>
            <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-sm font-medium text-foreground">Our advisors help students identify suitable scholarships and prepare competitive applications.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Universities & Cities */}
      <section className="py-20 lg:py-28 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div {...motionProps(0, "x", -30)}>
              <h2 className="text-3xl font-bold mb-4">Top Universities in Australia</h2>
              <p className="text-muted-foreground mb-6">Australia is home to some of the world's leading universities:</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {topUnis.map((uni, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm font-medium">{uni}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }} className="aspect-video rounded-3xl overflow-hidden shadow-lg">
              <img src={universitiesImg} alt="Australian Universities" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }} className="aspect-video rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img src={universitiesImg2} alt="Australian Cities" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div {...motionProps(0, "x", 30)} className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Best Student Cities</h2>
              <p className="text-muted-foreground mb-6">Australia offers vibrant and student-friendly cities with excellent infrastructure and career opportunities.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {cities.map((city, i) => (
                  <span key={i} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium flex items-center gap-1 shadow-sm hover:border-accent hover:text-accent transition-colors">
                    <MapPin className="w-3 h-3 text-accent" /> {city}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-background text-center px-4">
        <motion.div {...motionProps()} className="max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Take the Next Step</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Australian Education Journey Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the next step toward a world-class education and a successful international career with expert guidance from our study abroad specialists.
          </p>
          <a
            href="https://register.findmycareer.org.uk/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow-gold)] hover:scale-105 transition-transform"
          >
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}

