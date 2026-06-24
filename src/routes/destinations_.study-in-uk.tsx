import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import {
  GraduationCap, Clock, Award, Globe2, Lightbulb, Briefcase,
  Building2, Monitor, Wrench, HeartPulse, Scale, Utensils,
  CheckCircle2, ArrowRight, MapPin, Building, Target, Search, Plane
} from "lucide-react";

// Assets
import heroImg from "@/assets/uk/uk hero image.jfif";
import whyStudyImg from "@/assets/uk/Why Study in the UK Section Images.jfif";
import whyStudyImg2 from "@/assets/uk/Why Study in the UK Section Images1.jfif";
import careerImg from "@/assets/uk/Career & Success Section Images.jfif";
import universitiesImg from "@/assets/uk/UK Universities.jfif";
import citiesImg from "@/assets/uk/UK Cities & Student Experience.jfif";
import studentLifeImg from "@/assets/uk/Student Life in the UK.jfif";

export const Route = createFileRoute("/destinations_/study-in-uk")({
  head: () => ({
    meta: [
      { title: "Study in the UK — Find My Career" },
      { name: "description", content: "World-Class Education, Global Opportunities, Bright Future. Explore top universities, costs, and student life in the United Kingdom." },
    ],
    links: [{ rel: "canonical", href: "/destinations/study-in-uk" }],
  }),
  component: StudyInUkPage,
});

const whyStudy = [
  { icon: Award, title: "Globally Recognized", desc: "Home to prestigious institutions known for academic excellence and innovation." },
  { icon: Clock, title: "Shorter Course Duration", desc: "Undergraduate degrees in 3 years, Master's in 1 year, saving time and tuition costs." },
  { icon: GraduationCap, title: "High-Quality Education", desc: "Rigorous academic standards, modern facilities, and industry-focused programs." },
  { icon: Globe2, title: "Multicultural Environment", desc: "A diverse and welcoming international community from around the world." },
  { icon: Lightbulb, title: "Research & Innovation", desc: "Global leader in research, tech, business innovation, and creative industries." },
  { icon: Briefcase, title: "Post-Study Work", desc: "Eligible graduates can gain valuable professional experience after completing studies." },
];

const programs = [
  { icon: Building2, title: "Business & Management", desc: "Develop leadership and strategic management skills in globally recognized business schools." },
  { icon: Monitor, title: "Computer Science & AI", desc: "Study cutting-edge tech including AI, cybersecurity, software engineering, and data science." },
  { icon: Wrench, title: "Engineering", desc: "Explore mechanical, civil, electrical, aerospace, and advanced engineering disciplines." },
  { icon: HeartPulse, title: "Health & Nursing", desc: "Gain practical knowledge in healthcare, nursing, public health, and medical sciences." },
  { icon: Scale, title: "Law", desc: "Study internationally respected legal systems and develop professional legal expertise." },
  { icon: Utensils, title: "Hospitality & Tourism", desc: "Prepare for careers in one of the world's largest and fastest-growing industries." },
];

const benefits = [
  "Internationally recognized qualifications",
  "Access to world-class research facilities",
  "Diverse cultural experiences",
  "Strong graduate employability",
  "Excellent student support services",
  "Opportunities to build global networks",
  "Post-study work pathways",
  "Gateway to international career opportunities",
];

const supportServices = [
  { icon: Building, title: "University Selection", desc: "Find the right university and course based on your academic background and career goals." },
  { icon: Target, title: "Application Assistance", desc: "Receive expert support with applications, documentation, and admission requirements." },
  { icon: Award, title: "IELTS & English Prep", desc: "Improve your English language skills and achieve your target IELTS score." },
  { icon: Search, title: "Student Visa Guidance", desc: "Get professional support with visa documentation and application processes." },
  { icon: Award, title: "Scholarship Assistance", desc: "Explore available scholarships and funding opportunities." },
  { icon: Plane, title: "Pre-Departure & Post-Arrival", desc: "Receive guidance before departure and assistance after arriving in the UK." },
];

const expenses = ["Tuition Fees", "Accommodation", "Living Expenses", "Health Surcharge", "Travel Costs", "Study Materials"];

const topUnis = [
  "University of Oxford", "University of Cambridge", "Imperial College London", 
  "University College London (UCL)", "King's College London", "London School of Economics (LSE)",
  "University of Manchester", "University of Edinburgh", "University of Warwick", "University of Bristol"
];

const cities = ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Leeds", "Liverpool", "Nottingham"];
const cityLoves = ["Excellent public transport", "Safe and student-friendly communities", "Part-time employment opportunities", "Rich cultural and social experiences", "Diverse international student populations"];

function StudyInUkPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Study Destination"
        title={<>Study in the <span className="text-accent">United Kingdom</span></>}
        subtitle="World-Class Education, Global Opportunities, Bright Future."
        image={heroImg}
      />

      {/* Intro */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          The United Kingdom remains one of the world's most popular destinations for international students, offering globally recognized qualifications, outstanding academic standards, and excellent career opportunities. Home to some of the world's leading universities, the UK provides a diverse and multicultural environment where students can gain internationally respected degrees and valuable global experience.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ delay: 0.1 }} className="mt-6 text-lg text-foreground font-medium">
          Whether you are looking to pursue undergraduate, postgraduate, foundation, or professional courses, studying in the UK can open doors to academic excellence and long-term career success.
        </motion.p>
      </section>

      {/* Why Study in the UK */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">The UK Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Study in the United Kingdom?</h2>
              
              <div className="grid gap-6 mt-8">
                {whyStudy.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ delay: i * 0.1 }} className="flex gap-4">
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
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="col-span-2 aspect-video rounded-3xl overflow-hidden shadow-xl">
                <img src={whyStudyImg} alt="UK University" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ delay: 0.1 }} className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src={whyStudyImg2} alt="Students in UK" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ delay: 0.2 }} className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img src={studentLifeImg} alt="UK Student Life" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Courses</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-bold">Popular Study Programs</motion.h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ delay: i * 0.1 }} className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group">
              <prog.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{prog.title}</h3>
              <p className="text-muted-foreground text-sm">{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits & Career */}
      <section className="py-20 lg:py-28 bg-[#0A1628] text-white relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #F59E0B66 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src={careerImg} alt="Career Opportunities" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}>
              <h2 className="text-3xl font-bold mb-6">Top Benefits for International Students</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm text-slate-200">{b}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Career Opportunities After Graduation</h3>
              <p className="text-slate-300 leading-relaxed">
                A UK qualification can enhance your employability and provide access to career opportunities across the world. Graduates benefit from strong industry connections, practical learning experiences, and internationally recognized credentials valued by employers globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Services & Costs */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Student Support Services</h2>
            <p className="text-muted-foreground mb-8">Our experienced advisors assist students throughout every stage of their study abroad journey:</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {supportServices.map((srv, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ delay: i * 0.1 }} className="flex gap-4">
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
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} className="bg-muted/30 p-8 rounded-3xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Cost of Studying</h3>
            <p className="text-muted-foreground text-sm mb-6">Costs vary depending on the university, course, and location.</p>
            <h4 className="font-semibold mb-4">Typical Expenses Include:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {expenses.map(e => (
                <span key={e} className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">{e}</span>
              ))}
            </div>
            <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-sm font-medium text-foreground">Our advisors can help you understand the latest requirements and prepare a realistic study budget.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Universities & Cities */}
      <section className="py-20 lg:py-28 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}>
              <h2 className="text-3xl font-bold mb-4">Top Universities in the UK</h2>
              <p className="text-muted-foreground mb-6">The UK is home to some of the world's most prestigious universities, known for academic excellence, research innovation, and strong graduate employability.</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {topUnis.map((uni, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm font-medium">{uni}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">And many more tailored to your goals!</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} className="aspect-video rounded-3xl overflow-hidden shadow-lg">
              <img src={universitiesImg} alt="UK Universities" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} className="aspect-video rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img src={citiesImg} alt="UK Cities" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Popular Student Cities</h2>
              <p className="text-muted-foreground mb-6">Students can choose from vibrant and welcoming cities across the UK:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {cities.map((city, i) => (
                  <span key={i} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium flex items-center gap-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-accent" /> {city}
                  </span>
                ))}
              </div>
              <h4 className="font-semibold mb-3">Why Students Love These Cities:</h4>
              <ul className="space-y-2">
                {cityLoves.map((love, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> {love}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-background text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">Take the Next Step</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your UK Education Journey Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step towards achieving your academic and career ambitions with expert guidance from our experienced study abroad consultants.
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
