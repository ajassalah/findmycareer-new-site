import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Frequently Asked Questions | Find My Career" },
      { name: "description", content: "Find answers to the most common questions about studying abroad, visa guidance, university applications, IELTS, scholarships, and more." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "What is Find My Career?",
    a: "Find My Career is a trusted overseas education consultancy that helps students achieve their study abroad goals. We provide expert guidance on university admissions, course selection, student visas, IELTS preparation, scholarships, accommodation, and pre-departure support. With years of experience, we assist students in finding the best educational opportunities worldwide.",
  },
  {
    q: "Which countries can I study in through Find My Career?",
    a: "We assist students in applying to leading universities and colleges in: United Kingdom, Australia, Canada, Germany, New Zealand, Ireland, France, and the United States. Our counselors help you choose the most suitable destination based on your academic background, budget, and career aspirations.",
  },
  {
    q: "How do I choose the right university and course?",
    a: "Our experienced education consultants evaluate your academic qualifications, career objectives, budget, preferred country, and future employment goals. Based on this assessment, we recommend universities and programs that best match your profile.",
  },
  {
    q: "Do you assist with university applications?",
    a: "Yes. We provide complete admission support, including university selection, application preparation, Statement of Purpose (SOP) guidance, document review, offer letter processing, and admission follow-up. Our team ensures your application is submitted accurately and on time.",
  },
  {
    q: "Do I need IELTS to study abroad?",
    a: "Many universities require proof of English language proficiency through exams such as IELTS, PTE Academic, TOEFL, or the Duolingo English Test. However, some universities may offer alternatives depending on your educational background and chosen program. We can advise you on the specific requirements for your destination.",
  },
  {
    q: "Do you provide IELTS preparation support?",
    a: "Yes. We offer IELTS guidance and preparation support to help students achieve their target scores for university admissions and visa requirements.",
  },
  {
    q: "Can you help me obtain a student visa?",
    a: "Absolutely. Our visa specialists assist students with visa documentation, financial evidence preparation, application submission, visa interview guidance, and compliance checks. We help ensure your visa application meets the latest immigration requirements.",
  },
  {
    q: "Are scholarships available for international students?",
    a: "Yes. Many universities offer scholarships based on academic excellence, leadership achievements, sports performance, and financial need. Our team helps students identify suitable scholarship opportunities and prepare competitive applications.",
  },
  {
    q: "Do you provide accommodation assistance?",
    a: "Yes. We help students explore suitable accommodation options including university residences, student apartments, shared accommodation, and private housing. We guide students in finding safe and affordable accommodation before departure.",
  },
  {
    q: "Can international students work while studying?",
    a: "Many countries allow international students to work part-time while studying, subject to visa regulations. Work rights vary by country, university, and visa category. Our advisors can explain the current rules for your chosen destination.",
  },
  {
    q: "How much does it cost to study abroad?",
    a: "The total cost depends on factors such as country of study, university tuition fees, accommodation, living expenses, health insurance, and visa fees. We provide personalized cost estimates to help students plan their education budget effectively.",
  },
  {
    q: "How early should I apply for admission?",
    a: "We recommend starting your study abroad journey at least 6–12 months before your intended intake. Early preparation improves your chances of securing admission, scholarships, and visa approvals.",
  },
  {
    q: "What documents are required for university admission?",
    a: "Typical documents include: academic transcripts, educational certificates, passport copy, Curriculum Vitae (CV), Statement of Purpose (SOP), reference letters, and English language test results. Requirements may vary depending on the university and program.",
  },
  {
    q: "Do you provide pre-departure support?",
    a: "Yes. We conduct pre-departure briefings covering travel arrangements, airport procedures, accommodation preparation, student life abroad, cultural adaptation, and health insurance requirements. This helps students transition smoothly to their new country.",
  },
  {
    q: "Why choose Find My Career?",
    a: "We offer personalized student counseling, experienced education consultants, university admission support, student visa guidance, IELTS assistance, scholarship support, accommodation assistance, pre-departure and post-arrival support, and transparent professional service. With years of experience in international education consulting, Find My Career is committed to helping students achieve their academic and career goals abroad.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/40 transition-colors"
      >
        <span className="font-semibold text-foreground text-base">
          <span className="text-accent mr-2">{index + 1}.</span>{q}
        </span>
        <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-border pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        eyebrow="Support"
        title={<>Frequently Asked <span className="text-accent">Questions</span></>}
        subtitle="Everything you need to know about studying abroad with Find My Career."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.06)} className="flex flex-col gap-4">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} index={i} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="mt-16 text-center bg-muted/30 border border-border rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">Our advisors are happy to help. Book a free consultation today.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow-gold)] hover:scale-105 transition-transform"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <FreeConsultationCTA />
    </div>
  );
}
