import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import {
  GraduationCap, Award, Globe2, Briefcase, HeartPulse, Wrench,
  Building2, Monitor, LineChart, Cpu, CheckCircle2, ArrowRight,
  MapPin, Building, Target, Search, Plane, CreditCard
} from "lucide-react";

// Assets
import heroImg from "@/assets/Germany/Hero Image.jfif";
import studentLife1 from "@/assets/Germany/Student Life Image.jfif";
import studentLife2 from "@/assets/Germany/Student Life Image1.jfif";
import studentLife3 from "@/assets/Germany/Student Life Image2.jfif";
import careerImg from "@/assets/Germany/Career Success Image.jfif";
import universitiesImg from "@/assets/Germany/University Section Image.jfif";
import universitiesImg2 from "@/assets/Germany/University Section Image1.jfif";


const whyStudy = [
  { icon: GraduationCap, title: "World-Class Education", desc: "Internationally respected universities known for academic excellence, research innovation, and practical learning." },
  { icon: CreditCard, title: "Affordable Education", desc: "Many public universities offer low-cost or tuition-free education, making Germany one of the most affordable destinations in Europe." },
  { icon: Award, title: "Globally Recognized Degrees", desc: "German qualifications are highly valued by employers and academic institutions worldwide." },
  { icon: Briefcase, title: "Strong Economy & Careers", desc: "Europe's largest economy and a global leader in engineering, automotive tech, IT, and business innovation." },
  { icon: Globe2, title: "English-Taught Programs", desc: "Thousands of undergraduate and postgraduate programs are available in English, especially at master's level." },
  { icon: HeartPulse, title: "International Student-Friendly", desc: "Germany welcomes students from across the globe and offers excellent support services for international students." },
];

const programs = [
  { icon: Wrench, title: "Engineering", desc: "Globally renowned for mechanical, automotive, electrical, civil, and industrial engineering programs." },
  { icon: Monitor, title: "Computer Science & AI", desc: "Study cutting-edge technologies including AI, machine learning, cybersecurity, and software engineering." },
  { icon: Building2, title: "Business & Management", desc: "Develop leadership, entrepreneurship, finance, and international business skills." },
  { icon: LineChart, title: "Data Science & IT", desc: "Gain expertise in analytics, cloud computing, software development, and digital transformation." },
  { icon: Cpu, title: "Automotive Engineering", desc: "Learn from a country known worldwide for automotive innovation and manufacturing excellence." },
  { icon: HeartPulse, title: "Healthcare & Life Sciences", desc: "Explore advanced programs in biotechnology, healthcare management, and medical sciences." },
];

const workBenefits = [
  "Practical industry experience",
  "Professional networking opportunities",
  "Additional financial support",
  "Improved employability",
  "Exposure to international work environments",
];

const whyChooseGermany = [
  "Affordable education",
  "Globally recognized qualifications",
  "Strong economy and career opportunities",
  "High-quality research facilities",
  "International learning environment",
  "Modern infrastructure",
  "Excellent quality of life",
  "Gateway to Europe",
];

const scholarships = [
  "Merit-Based Scholarships",
  "Academic Excellence Scholarships",
  "Research Funding Programs",
  "International Student Grants",
  "University-Specific Scholarships",
  "Government and Foundation Scholarships",
];

const supportServices = [
  { icon: Building, title: "University Selection", desc: "Helping students choose the right university and course based on academic goals and career aspirations." },
  { icon: Target, title: "Admission Assistance", desc: "Complete support with university applications and document preparation." },
  { icon: Award, title: "IELTS & English Guidance", desc: "Support for English language requirements and test preparation." },
  { icon: Search, title: "Student Visa Assistance", desc: "Professional guidance throughout the German student visa application process." },
  { icon: Award, title: "Scholarship Support", desc: "Helping students explore funding and scholarship opportunities." },
  { icon: Plane, title: "Pre-Departure & Post-Arrival", desc: "Comprehensive assistance before departure and after arrival in Germany." },
];

const topUnis = [
  "Technical University of Munich (TUM)", "Ludwig Maximilian University of Munich (LMU Munich)",
  "Heidelberg University", "RWTH Aachen University", "Free University of Berlin",
  "Humboldt University of Berlin", "Karlsruhe Institute of Technology (KIT)", 
  "University of Freiburg", "University of Hamburg", "Technical University of Berlin"
];

const cities = ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Dresden", "Aachen"];

export default function StudyInGermanyPage() {

  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Study Destination"
        title={<>Study in <span className="text-accent">Germany</span></>}
        subtitle="World-Class Education, Affordable Tuition, Global Career Opportunities."
        image={heroImg}
      />

      {/* Intro */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <motion.p {...motionProps()} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Germany has become one of the most attractive study destinations for international students, offering high-quality education, globally recognized degrees, strong industry connections, and affordable tuition costs. Known for its excellence in engineering, technology, business, and research, Germany provides students with an outstanding opportunity to gain a world-class education while experiencing life in the heart of Europe.
        </motion.p>
        <motion.p {...motionProps(0.1)} className="mt-6 text-lg text-foreground font-medium">
          With hundreds of English-taught programs, modern universities, and a strong economy, Germany continues to attract ambitious students from around the world seeking academic excellence and international career opportunities.
        </motion.p>
      </section>

      {/* Why Study in Germany */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...motionProps(0, "x", -30)} className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">The German Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Study in Germany?</h2>
              
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
                <img src={studentLife1} alt="German Student Life" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div {...motionProps(0.1, "y", 30)} className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src={studentLife2} alt="Students in Germany" className="w-full h-full object-cover" />
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
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-bold">Popular Courses in Germany</motion.h2>
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
              <img src={careerImg} alt="Career Opportunities in Germany" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div {...motionProps(0, "x", 30)}>
              <h2 className="text-3xl font-bold mb-6">Work Opportunities While Studying</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Germany provides opportunities for international students to gain valuable work experience while pursuing their studies.
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
                Germany offers excellent career prospects for graduates in sectors such as Engineering, IT, AI, Manufacturing, Automotive Industry, Healthcare, Finance, and Business Management. Graduates benefit from Germany's strong economy, global corporations, and demand for skilled professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Services & Scholarships */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Our Germany Study Abroad Services</h2>
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
            <h3 className="text-2xl font-bold mb-4">Scholarships in Germany</h3>
            <p className="text-muted-foreground text-sm mb-6">Germany offers numerous scholarship opportunities for international students through universities, foundations, and government-supported organizations.</p>
            <h4 className="font-semibold mb-4">Opportunities Include:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {scholarships.map(s => (
                <span key={s} className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">{s}</span>
              ))}
            </div>
            <div className="mt-auto p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-sm font-medium text-foreground">Our advisors help students identify suitable funding opportunities and prepare strong scholarship applications.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Universities & Cities */}
      <section className="py-20 lg:py-28 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div {...motionProps(0, "x", -30)}>
              <h2 className="text-3xl font-bold mb-4">Top Universities in Germany</h2>
              <p className="text-muted-foreground mb-6">Germany is home to some of Europe's most prestigious universities:</p>
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
              <img src={universitiesImg} alt="German Universities" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }} className="aspect-video rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img src={universitiesImg2} alt="German Cities" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div {...motionProps(0, "x", 30)} className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Best Student Cities</h2>
              <p className="text-muted-foreground mb-6">Germany offers vibrant student cities with excellent infrastructure, affordable living options, and strong employment opportunities.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {cities.map((city, i) => (
                  <span key={i} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium flex items-center gap-1 shadow-sm hover:border-accent hover:text-accent transition-colors">
                    <MapPin className="w-3 h-3 text-accent" /> {city}
                  </span>
                ))}
              </div>
              
              <h4 className="font-semibold mb-3">Why Students Choose Germany:</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {whyChooseGermany.map((reason, i) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your German Education Journey Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Achieve your academic and career ambitions with expert guidance from our experienced study abroad consultants.
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

