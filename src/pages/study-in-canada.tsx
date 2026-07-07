import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import {
  GraduationCap, Award, Globe2, Briefcase, HeartPulse, Wrench,
  Building2, Monitor, LineChart, Utensils, CheckCircle2, ArrowRight,
  MapPin, Building, Target, Search, Plane, CreditCard
} from "lucide-react";

// Assets
import heroImg from "@/assets/Canada/Hero Image.jfif";
import studentLife1 from "@/assets/Canada/Student Life Images.jfif";
import studentLife2 from "@/assets/Canada/Student Life Images1.jfif";
import careerImg from "@/assets/Canada/Career Success Images.jfif";
import careerImgAlt from "@/assets/Canada/Career Success Images1.jfif";
import universitiesImg from "@/assets/Canada/University Section Images.jfif";
import universitiesImg2 from "@/assets/Canada/University Section Images1.jfif";


const whyStudy = [
  { icon: Award, title: "Globally Recognized", desc: "Canadian degrees, diplomas, and certificates are respected by employers and academic institutions worldwide." },
  { icon: GraduationCap, title: "High-Quality Education", desc: "Canadian universities and colleges are known for academic excellence, innovation, and research-driven learning." },
  { icon: CreditCard, title: "Affordable Study Options", desc: "Canada offers excellent value for money while maintaining high educational standards compared to other leading destinations." },
  { icon: HeartPulse, title: "Safe and Welcoming", desc: "Canada consistently ranks among the safest countries in the world and is known for its inclusive and multicultural society." },
  { icon: Briefcase, title: "Strong Career Opportunities", desc: "Students benefit from industry-focused education, internships, co-op programs, and strong employer connections." },
  { icon: Globe2, title: "Post-Graduation Opportunities", desc: "Canada remains a popular destination for students seeking international work experience after completing their studies." },
];

const programs = [
  { icon: Building2, title: "Business & Management", desc: "Develop leadership, entrepreneurship, and strategic management skills in globally recognized programs." },
  { icon: Monitor, title: "IT & Artificial Intelligence", desc: "Study software development, AI, cybersecurity, cloud computing, and data analytics." },
  { icon: Wrench, title: "Engineering", desc: "Explore civil, mechanical, electrical, software, and environmental engineering programs." },
  { icon: HeartPulse, title: "Healthcare & Nursing", desc: "Gain practical experience through internationally respected healthcare and nursing programs." },
  { icon: Utensils, title: "Hospitality & Tourism", desc: "Prepare for careers in Canada's growing tourism and hospitality industries." },
  { icon: LineChart, title: "Accounting & Finance", desc: "Build expertise in finance, banking, auditing, and international business management." },
];

const workBenefits = [
  "Industry experience",
  "Professional networking",
  "Improved employability",
  "Additional financial support",
  "Enhanced workplace skills",
];

const whyChooseCanada = [
  "Globally recognized education",
  "High quality of life",
  "Safe and welcoming communities",
  "Diverse and multicultural society",
  "Excellent research opportunities",
  "Industry-focused learning",
  "Strong graduate employability",
  "International career prospects",
];

const scholarships = [
  "Merit-Based Scholarships",
  "Academic Excellence Awards",
  "Entrance Scholarships",
  "Research Scholarships",
  "Graduate Funding Opportunities",
  "University-Specific International Student Scholarships",
];

const supportServices = [
  { icon: Building, title: "University & College Selection", desc: "Helping students choose institutions that match their academic goals and budget." },
  { icon: Target, title: "Admission Assistance", desc: "Complete support with applications, documentation, and offer acceptance." },
  { icon: Award, title: "IELTS & English Prep", desc: "Professional coaching to help students meet language requirements." },
  { icon: Search, title: "Student Visa Guidance", desc: "Expert assistance with student visa applications and documentation." },
  { icon: Award, title: "Scholarship Support", desc: "Guidance on scholarships, grants, and funding opportunities." },
  { icon: Plane, title: "Pre-Departure & Post-Arrival", desc: "Helping students transition smoothly before and after arriving in Canada." },
];

const topUnis = [
  "University of Toronto", "University of British Columbia", "McGill University",
  "University of Alberta", "University of Waterloo", "McMaster University",
  "Western University", "Queen's University", "University of Calgary", "York University"
];

const cities = ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton", "Winnipeg"];

export default function StudyInCanadaPage() {

  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Study Destination"
        title={<>Study in <span className="text-accent">Canada</span></>}
        subtitle="Quality Education, Diverse Communities, Unlimited Opportunities."
        image={heroImg}
      />

      {/* Intro */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <motion.p {...motionProps()} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Canada continues to be one of the world's most attractive destinations for international students, offering internationally recognized qualifications, high academic standards, a welcoming multicultural environment, and excellent career opportunities. Known for its safety, quality of life, and student-friendly policies, Canada provides an ideal environment for students seeking a world-class education and a successful future.
        </motion.p>
        <motion.p {...motionProps(0.1)} className="mt-6 text-lg text-foreground font-medium">
          Whether you're planning to pursue undergraduate, postgraduate, diploma, certificate, or research programs, Canada offers a wide range of academic pathways tailored to diverse career goals.
        </motion.p>
      </section>

      {/* Why Study in Canada */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...motionProps(0, "x", -30)} className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">The Canadian Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Study in Canada?</h2>
              
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
                <img src={studentLife1} alt="Canadian Student Life" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div {...motionProps(0.1, "y", 30)} className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src={studentLife2} alt="Students in Canada" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div {...motionProps(0.2, "y", 30)} className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src={careerImgAlt} alt="Campus Life" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Courses</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-bold">Popular Courses in Canada</motion.h2>
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
          style={{ background: "radial-gradient(circle, #DC262666 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }} className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={careerImg} alt="Career Opportunities in Canada" className="w-full h-auto object-cover" />
            </motion.div>

            <motion.div {...motionProps(0, "x", 30)}>
              <h2 className="text-3xl font-bold mb-6">Work Opportunities for Students</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                International students may be eligible to work while studying, allowing them to gain practical experience and support their living expenses.
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
                Canadian qualifications are highly valued worldwide. Graduates benefit from strong industry links, practical education, and opportunities across sectors including technology, healthcare, engineering, finance, education, and business management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Services & Scholarships */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Our Canada Study Abroad Services</h2>
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
            <h3 className="text-2xl font-bold mb-4">Scholarships in Canada</h3>
            <p className="text-muted-foreground text-sm mb-6">Many Canadian universities and institutions offer scholarships and financial assistance to international students.</p>
            <h4 className="font-semibold mb-4">Available Types:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {scholarships.map(s => (
                <span key={s} className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">{s}</span>
              ))}
            </div>
            <div className="mt-auto p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-sm font-medium text-foreground">Our advisors help students identify scholarship opportunities and prepare strong applications.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Universities & Cities */}
      <section className="py-20 lg:py-28 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div {...motionProps(0, "x", -30)}>
              <h2 className="text-3xl font-bold mb-4">Top Universities in Canada</h2>
              <p className="text-muted-foreground mb-6">Canada is home to some of the world's most respected universities:</p>
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
              <img src={universitiesImg} alt="Canadian Universities" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }} className="aspect-video rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img src={universitiesImg2} alt="Canadian Cities" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div {...motionProps(0, "x", 30)} className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Best Student Cities</h2>
              <p className="text-muted-foreground mb-6">Canada offers vibrant cities that combine academic excellence with outstanding quality of life.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {cities.map((city, i) => (
                  <span key={i} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium flex items-center gap-1 shadow-sm hover:border-accent hover:text-accent transition-colors">
                    <MapPin className="w-3 h-3 text-accent" /> {city}
                  </span>
                ))}
              </div>
              
              <h4 className="font-semibold mb-3">Why Students Choose Canada:</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {whyChooseCanada.map((reason, i) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Canadian Education Journey Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the next step toward achieving your academic and career goals with expert guidance from our experienced study abroad consultants.
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

