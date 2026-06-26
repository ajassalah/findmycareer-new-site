import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import {
  GraduationCap, Award, Globe2, Briefcase, HeartPulse, Wrench,
  Building2, Monitor, Utensils, CheckCircle2, ArrowRight,
  MapPin, Building, Target, Search, Plane, Lightbulb, Sun, Leaf
} from "lucide-react";

// Assets
import heroImg from "@/assets/New Zealand/Hero Image.jfif";
import studentLife1 from "@/assets/New Zealand/Student Life Image.jfif";
import studentLife2 from "@/assets/New Zealand/Student Life Image1.jfif";
import studentLife3 from "@/assets/New Zealand/Student Life Image2.jfif";
import careerImg from "@/assets/New Zealand/Career Success Image.jfif";
import universitiesImg from "@/assets/New Zealand/University Section Image.jfif";
import universitiesImg2 from "@/assets/New Zealand/University Section Image1.jfif";

export const Route = createFileRoute("/study-in-new-zealand")({
  head: () => ({
    meta: [
      { title: "Study in New Zealand — Find My Career" },
      { name: "description", content: "World-Class Education, Safe Environment, Global Opportunities. Explore top universities and student life in New Zealand." },
    ],
    links: [{ rel: "canonical", href: "/study-in-new-zealand" }],
  }),
  component: StudyInNewZealandPage,
});

const whyStudy = [
  { icon: Award, title: "Globally Recognized Qualifications", desc: "New Zealand's universities and institutions are recognized worldwide for their high academic standards and research excellence." },
  { icon: GraduationCap, title: "High-Quality Education System", desc: "The country's education system emphasizes critical thinking, innovation, practical learning, and student success." },
  { icon: HeartPulse, title: "Safe and Welcoming Environment", desc: "New Zealand is known for its friendly communities, low crime rates, and supportive atmosphere for international students." },
  { icon: Lightbulb, title: "Innovative Teaching Methods", desc: "Students benefit from interactive learning, research opportunities, and industry-focused education." },
  { icon: Sun, title: "Excellent Quality of Life", desc: "New Zealand consistently ranks highly for safety, environmental quality, work-life balance, and overall wellbeing." },
  { icon: Briefcase, title: "Post-Study Opportunities", desc: "Graduates may have access to pathways that allow them to gain valuable international work experience after completing their studies." },
];

const programs = [
  { icon: Building2, title: "Business & Management", desc: "Develop leadership, entrepreneurship, and international business skills." },
  { icon: Monitor, title: "Information Technology", desc: "Study software engineering, cybersecurity, artificial intelligence, and data analytics." },
  { icon: Wrench, title: "Engineering", desc: "Explore civil, mechanical, electrical, and environmental engineering disciplines." },
  { icon: Leaf, title: "Agriculture & Environment", desc: "New Zealand is globally recognized for excellence in agriculture, sustainability, and environmental studies." },
  { icon: HeartPulse, title: "Healthcare & Nursing", desc: "Gain internationally respected qualifications and practical healthcare experience." },
  { icon: Utensils, title: "Hospitality & Tourism", desc: "Study in one of the world's leading tourism destinations and prepare for global career opportunities." },
];

const workBenefits = [
  "Professional work experience",
  "Industry networking opportunities",
  "Financial support during studies",
  "Enhanced employability after graduation",
  "Practical workplace skills",
];

const whyChooseNZ = [
  "Globally recognized qualifications",
  "Safe and welcoming environment",
  "High-quality education system",
  "Practical and innovative learning",
  "Multicultural student community",
  "Excellent quality of life",
  "Strong career opportunities",
  "Stunning natural landscapes",
];

const scholarships = [
  "Academic Excellence Scholarships",
  "Merit-Based Scholarships",
  "Research Scholarships",
  "International Student Grants",
  "University-Specific Awards",
  "Government-Supported Scholarship Programs",
];

const supportServices = [
  { icon: Building, title: "University & Course Selection", desc: "Helping students identify programs aligned with their academic background and career goals." },
  { icon: Target, title: "Admission Assistance", desc: "Comprehensive support with applications, documentation, and offer acceptance." },
  { icon: Award, title: "IELTS Preparation", desc: "Professional coaching to help students achieve required English language scores." },
  { icon: Search, title: "Student Visa Guidance", desc: "Expert assistance throughout the New Zealand student visa application process." },
  { icon: Award, title: "Scholarship Support", desc: "Helping students maximize scholarship and funding opportunities." },
  { icon: Plane, title: "Pre-Departure & Post-Arrival", desc: "Guidance before departure and support after arrival to ensure a smooth transition." },
];

const topUnis = [
  "University of Auckland", "University of Otago", "Victoria University of Wellington",
  "University of Canterbury", "Massey University", "University of Waikato",
  "Lincoln University", "Auckland University of Technology (AUT)"
];

const cities = ["Auckland", "Wellington", "Christchurch", "Dunedin", "Hamilton", "Palmerston North"];

function StudyInNewZealandPage() {

  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Study Destination"
        title={<>Study in <span className="text-accent">New Zealand</span></>}
        subtitle="World-Class Education, Safe Environment, Global Opportunities."
        image={heroImg}
      />

      {/* Intro */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <motion.p {...motionProps()} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          New Zealand has emerged as one of the most desirable study destinations for international students, offering internationally recognized qualifications, high-quality education, a welcoming multicultural society, and an exceptional quality of life. Known for its innovative teaching methods, stunning natural landscapes, and student-focused learning environment, New Zealand provides students with the perfect balance of academic excellence and personal growth.
        </motion.p>
        <motion.p {...motionProps(0.1)} className="mt-6 text-lg text-foreground font-medium">
          Whether you are pursuing undergraduate, postgraduate, diploma, vocational, or research programs, New Zealand offers globally respected qualifications that can open doors to career opportunities around the world.
        </motion.p>
      </section>

      {/* Why Study in New Zealand */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...motionProps(0, "x", -30)} className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">The Kiwi Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Study in New Zealand?</h2>
              
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
                <img src={studentLife1} alt="New Zealand Student Life" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div {...motionProps(0.1, "y", 30)} className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src={studentLife2} alt="Students in New Zealand" className="w-full h-full object-cover" />
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
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-bold">Popular Courses in New Zealand</motion.h2>
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
              <img src={careerImg} alt="Career Opportunities in New Zealand" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div {...motionProps(0, "x", 30)}>
              <h2 className="text-3xl font-bold mb-6">Work Opportunities While Studying</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                International students may have opportunities to gain valuable work experience while completing their studies.
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
                New Zealand qualifications are respected globally and can help graduates access opportunities across various sectors, including IT, Engineering, Healthcare, Business & Finance, Agriculture, Environmental Science, Tourism & Hospitality, and Education. Graduates benefit from practical education, industry engagement, and exposure to international work environments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Services & Scholarships */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Our New Zealand Study Abroad Services</h2>
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
          
          <motion.div {...motionProps(0, "x", 30)} className="bg-muted/30 p-8 rounded-3xl border border-border flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-4">Scholarships in New Zealand</h3>
            <p className="text-muted-foreground text-sm mb-6">Many universities and educational institutions offer scholarships to support international students.</p>
            <h4 className="font-semibold mb-4">Opportunities Include:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {scholarships.map(s => (
                <span key={s} className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">{s}</span>
              ))}
            </div>
            <div className="mt-auto p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-sm font-medium text-foreground">Our advisors assist students in identifying suitable funding opportunities and preparing strong scholarship applications.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Universities & Cities */}
      <section className="py-20 lg:py-28 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div {...motionProps(0, "x", -30)}>
              <h2 className="text-3xl font-bold mb-4">Top Universities in New Zealand</h2>
              <p className="text-muted-foreground mb-6">New Zealand's universities are internationally respected for teaching quality and research innovation:</p>
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
              <img src={universitiesImg} alt="New Zealand Universities" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }} className="aspect-video rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img src={universitiesImg2} alt="New Zealand Cities" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div {...motionProps(0, "x", 30)} className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Best Student Cities</h2>
              <p className="text-muted-foreground mb-6">New Zealand offers vibrant, student-friendly cities that combine academic excellence with an exceptional lifestyle.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {cities.map((city, i) => (
                  <span key={i} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium flex items-center gap-1 shadow-sm hover:border-accent hover:text-accent transition-colors">
                    <MapPin className="w-3 h-3 text-accent" /> {city}
                  </span>
                ))}
              </div>
              
              <h4 className="font-semibold mb-3">Why Students Choose New Zealand:</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {whyChooseNZ.map((reason, i) => (
                  <div key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> {reason}
                  </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your New Zealand Education Journey Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step toward achieving your academic and career ambitions with expert guidance from our experienced study abroad consultants.
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

