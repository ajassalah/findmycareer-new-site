import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { 
  CheckCircle2, BookOpen, Headphones, PenTool, Mic, 
  Target, GraduationCap, Globe, Users, Monitor, FileText 
} from "lucide-react";

import coachImg from "@/assets/Ielts/IELTS Coaching & Training.jfif";
import successImg from "@/assets/Ielts/Exam Success Section.jfif";

const whyMatters = [
  "Universities and colleges worldwide",
  "Immigration authorities in multiple countries",
  "Professional organizations and licensing bodies",
  "Employers seeking internationally recognized English qualifications"
];

const modules = [
  { icon: Headphones, title: "Listening", desc: "Improve your ability to understand conversations, lectures, and academic discussions." },
  { icon: BookOpen, title: "Reading", desc: "Develop strategies for academic and general reading tasks, time management, and comprehension." },
  { icon: PenTool, title: "Writing", desc: "Learn how to structure essays, reports, and responses to meet IELTS assessment criteria." },
  { icon: Mic, title: "Speaking", desc: "Build confidence through mock interviews, pronunciation practice, and fluency development." },
];

const whatWeOffer = [
  { title: "Personalized Learning Plans", desc: "Every student receives guidance tailored to their current English level and target band score." },
  { title: "Mock Examinations", desc: "Experience real exam conditions with practice tests designed to assess your readiness." },
  { title: "Expert Trainer Support", desc: "Learn from experienced IELTS instructors who provide detailed feedback and improvement strategies." },
  { title: "Performance Tracking", desc: "Monitor your progress through regular assessments and targeted coaching." },
  { title: "Exam Registration Guidance", desc: "Receive assistance with IELTS test booking, test dates, and documentation requirements." },
];

const formats = [
  { icon: GraduationCap, title: "IELTS Academic", desc: "Designed for students applying to universities and higher education institutions." },
  { icon: Globe, title: "IELTS General Training", desc: "Suitable for migration, work experience, and vocational training purposes." },
  { icon: Monitor, title: "IELTS on Computer", desc: "A modern testing option offering greater flexibility and faster results." },
  { icon: FileText, title: "IELTS on Paper", desc: "The traditional paper-based examination format preferred by many candidates." },
];

const whyChooseUs = [
  "Experienced IELTS trainers",
  "Small group and one-to-one sessions",
  "Comprehensive study materials",
  "Regular mock exams",
  "Flexible learning options",
  "Proven student success rates",
  "Personalized improvement plans"
];

export function IeltsDetails() {
  return (
    <div className="bg-background">
      {/* Intro & Why Matters */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Achieve Your Target IELTS Score with Expert Guidance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              The International English Language Testing System (IELTS) remains one of the world's most widely accepted English proficiency tests for university admissions, student visas, professional registration, and migration purposes. Thousands of universities and institutions across the UK, Australia, Canada, New Zealand, Ireland, and many other countries recognize IELTS as proof of English language proficiency.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Whether you are planning to study abroad, apply for a student visa, or enhance your academic and professional opportunities, our IELTS preparation services help you build the confidence and skills needed to achieve your desired band score.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} className="bg-muted/30 p-8 rounded-3xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Why IELTS Matters</h3>
            <p className="text-muted-foreground mb-6">A strong IELTS score can significantly improve your chances of securing admission to leading universities and meeting visa requirements.</p>
            <p className="font-semibold mb-4 text-foreground">IELTS is accepted by:</p>
            <ul className="space-y-3">
              {whyMatters.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/90 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 lg:py-28 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Skill Development</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Comprehensive Support</h2>
            <p className="mt-4 text-lg text-muted-foreground">We provide structured training across all four IELTS modules.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                  <mod.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{mod.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer & Formats */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}>
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Approach</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">What We Offer</h2>
            </div>
            <div className="space-y-8">
              {whatWeOffer.map((offer, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A1628] text-white flex items-center justify-center shrink-0 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-muted-foreground">{offer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}>
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Options</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">IELTS Test Formats</h2>
            </div>
            <div className="grid gap-4">
              {formats.map((format, i) => (
                <div key={i} className="bg-muted/30 p-6 rounded-2xl border border-border flex items-start gap-4">
                  <format.icon className="w-8 h-8 text-accent shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">{format.title}</h3>
                    <p className="text-sm text-muted-foreground">{format.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 rounded-3xl overflow-hidden shadow-xl border border-border aspect-video">
              <img src={coachImg} alt="IELTS Coaching" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us & CTA */}
      <section className="py-20 lg:py-28 bg-[#0A1628] text-white relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #F59E0B44 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px] relative">
              <img src={successImg} alt="Exam Success" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Choose Our Coaching?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {whyChooseUs.map((reason, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-sm text-slate-200">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30">
                Your Path to Study Abroad Starts Here
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Ready to hit your target band score?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                A strong IELTS score opens doors to leading universities and global career opportunities. Our expert team is committed to helping you achieve your target band score and move one step closer to your international education goals.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-2">Book a Free IELTS Assessment Today</h3>
                <p className="text-slate-300 mb-6 text-sm">Discover your current English level and receive a personalized preparation plan designed for success.</p>
                <a
                  href="https://register.findmycareer.org.uk/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow-gold)] hover:scale-105 transition-transform"
                >
                  Start Assessment Now <Target className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
