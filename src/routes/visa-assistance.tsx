import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  FileText, Send, Clock, CheckCircle2,
  GraduationCap, Briefcase, Globe, Home, Lightbulb, ArrowRight,
  ClipboardCheck, Award, ChevronRight
} from "lucide-react";

// Images from innovator visa folder
import heroImg from "@/assets/innovator visa/Hero Banner/Xy-UYFECk6DY_htArig3lfmrlG7qeC1PUFoFzz_PJh512mB5Krd-Nv2EHbG7OiYAJo7aVNY0vwKJKM-Cuk5qoG4uWsmHg6h3e5JYPAiU7rHpNiuA-ddb.jfif";
import img2 from "@/assets/innovator visa/Hero Banner/YpBJEZlqE1dyV1-ZUoS4zdqVFGLbrzQp-NfS-95tPICEntGVuX7dbHw942ZbU0gT-wldzkMQQQRizjJVMMwzeynUNXNHI1FHfPY2SKbiZiqHemYeDszjmmCBvxf5JcPWI44KMwQJMtdG.jfif";
import img3 from "@/assets/innovator visa/Business Plan & Endorsement Section/5btVkbgK2EkhwbiXKDuHjqkGk6eLCL6YwPfGuuRNRFPjSQD-46f48nqP7Nryxis4nbINlgjbVCOCtVBV98Ms9fQpH2c-ealZz4MrcblKonxfONPuE_7M.jfif";
import img4 from "@/assets/innovator visa/Business Plan & Endorsement Section/k4hrlJDSjIhSY49xKPigmPGGrOPqGAnlC5gDCTE_COpiCI6az9lWaiR5LqMx0fh2LTJiDsVKiYMMLUkGcaklA0ZH1Wzx4a4RWtqyRNOreXd7_XcxfBhG.jfif";
import img5 from "@/assets/innovator visa/Business Plan & Endorsement Section/n8F-9E7S8YXM1cbbieXzOuTQ0BEeLsC3rUjOnafJsJ9VF0l330DJYln-WiQFbACxJnF2HNAk2bU_j4GqTv5mk5uwUl5c9ee0It_i6D4_4ektJIsojxrL.jfif";
import img6 from "@/assets/innovator visa/Hero Banner/hyfi5p87V--RICqyW8TsaeUR4ZCFvUdt3HwDsfV_M3TPL2KA1ska9ydfJWGJ6XQZqjiup8HIDWsfKOdK2LY9mIAzBehCzxUzvistFLx6CJR-Qe17IVWEBk9sK_wWZjgWuZRLpr8wUOJV.jfif";
import img7 from "@/assets/innovator visa/Business Plan & Endorsement Section/pBOcRMZ8Q2n9iDRuSwi9GyXiKZ6ZoMuELQRkZpZF_hUd0tuLye7J50EVm65B2zmJKqIOh7yEusMWTWw2HXNNVONiskhRBzZc9jYJItOKLIlAiK3eJhLW.jfif";
import studentVisaImg from "@/assets/student visa.png";
import workVisaImg from "@/assets/work visa.png";
import visitVisaImg from "@/assets/visit visa.png";
import migrationVisaImg from "@/assets/migration visa.jfif";
import innovativeVisaImg from "@/assets/innovative visa.png";

export const Route = createFileRoute("/visa-assistance")({
  head: () => ({
    meta: [
      { title: "Visa Assistance — Find My Career | Expert Visa Application Support" },
      { name: "description", content: "Expert visa application support with 17+ years of experience. Student Visa, Work Permit, Visit Visa, Migration Visa and Innovator Founder Visa." },
      { property: "og:title", content: "Visa Assistance — Find My Career" },
      { property: "og:url", content: "/visa-assistance" },
    ],
    links: [{ rel: "canonical", href: "/visa-assistance" }],
  }),
  component: VisaAssistancePage,
});

// ─── Modal content for each visa type ───────────────────────────────────────
const visaModalData = {
  student: {
    title: "Student Visa",
    subtitle: "Your gateway to world-class education abroad",
    image: studentVisaImg,
    accentColor: "#3B82F6",
    intro: "At Find My Career, we specialize in helping aspiring students achieve their dreams of studying abroad. Our comprehensive Student Visa Services guide you through every step of the visa application process, ensuring a smooth and successful journey to your educational goals.",
    sections: [
      {
        heading: "What is a Student Visa?",
        content: "A student visa is one of the most vital documents students need while pursuing higher education abroad. The visa stamping takes place after receiving the offer letter from your chosen foreign educational institution. It serves to explain your reasons and intentions for studying in that particular country.",
      },
      {
        heading: "Key Requirements",
        items: [
          "Valid passport with at least 6 months validity beyond your stay and two blank pages",
          "Unconditional offer letter from a recognised educational institution",
          "Proof of English proficiency (IELTS, TOEFL, PTE) — minimum scores as per visa regulations",
          "Evidence of sufficient funds to cover tuition and living expenses",
          "Academic transcripts and previous qualifications",
          "Health insurance and medical clearance (where required)",
          "Statement of Purpose (SOP) clearly outlining your study intentions",
          "Completed and signed visa application forms",
        ],
      },
      {
        heading: "Common Reasons for Rejection",
        items: [
          "Insufficient financial evidence or inconsistent bank statements",
          "Failure to meet English language proficiency requirements",
          "Incomplete or improperly certified documentation",
          "Unclear or unconvincing study intentions in the SOP",
          "Previous visa violations or immigration history issues",
          "Poor communication during the visa interview",
        ],
      },
      {
        heading: "Countries We Support",
        content: "We handle student visa applications for the United Kingdom (Student Route), Australia (Subclass 500), Canada, Germany, France, Ireland, New Zealand, and more. Each country has specific requirements — our advisors are experts in all of them.",
      },
    ],
  },
  work: {
    title: "Work Permit",
    subtitle: "Build your professional career on a global stage",
    image: workVisaImg,
    accentColor: "#ffffffff",
    intro: "Whether you have secured a job offer or are exploring skilled worker pathways, Find My Career handles the complex paperwork and requirements of work permit applications. Our advisors are constantly updated on the latest immigration rules and employer sponsorship requirements.",
    sections: [
      {
        heading: "Types of Work Permits We Handle",
        items: [
          "Skilled Worker Visa (UK) — for those with a job offer from an approved employer",
          "Intra-Company Transfer Visa — for employees relocating within multinational companies",
          "Temporary Work Visas — for specific occupations and project-based roles",
          "Graduate Work Visas — for international students who completed studies abroad",
          "Seasonal and Agricultural Work Permits",
          "Entrepreneur and Investor Visas",
        ],
      },
      {
        heading: "General Requirements",
        items: [
          "Valid job offer from a licensed/approved sponsor employer",
          "Proof of qualifications and relevant work experience",
          "English language proficiency evidence (where required)",
          "Criminal background clearance certificate",
          "Medical examination results (where required by destination country)",
          "Completed application forms and valid passport",
          "Evidence of salary meeting minimum threshold requirements",
        ],
      },
      {
        heading: "Our Work Permit Support Includes",
        items: [
          "Assessment of your eligibility for the relevant work permit category",
          "Guidance on finding licensed sponsor employers",
          "Complete document preparation and verification",
          "Application submission and appointment scheduling",
          "Status tracking and embassy communications",
          "Advice on conditions, renewal, and pathways to settlement",
        ],
      },
    ],
  },
  visit: {
    title: "Visit Visa",
    subtitle: "Explore the world or visit loved ones",
    image: visitVisaImg,
    accentColor: "#10B981",
    intro: "Planning a trip for tourism, family visits, or business? Find My Career ensures your visit visa application is complete, well-supported, and submitted correctly the first time — demonstrating strong ties to your home country and sufficient financial resources.",
    sections: [
      {
        heading: "Types of Visit Visas",
        items: [
          "Tourist Visa — for leisure travel, sightseeing, and recreation",
          "Family Visit Visa — to visit relatives or friends residing abroad",
          "Business Visit Visa — for meetings, conferences, and trade events",
          "Medical Visit Visa — to seek medical treatment abroad",
          "Transit Visa — for those passing through a country to a third destination",
        ],
      },
      {
        heading: "Key Requirements",
        items: [
          "Valid passport with appropriate remaining validity",
          "Completed and signed visa application form",
          "Recent passport-sized photographs meeting specification",
          "Bank statements demonstrating sufficient financial means",
          "Proof of employment or business ownership (showing strong home ties)",
          "Travel itinerary including accommodation bookings",
          "Return flight ticket or proof of onward travel",
          "Travel/health insurance coverage",
          "Invitation letter (if visiting family or friends)",
        ],
      },
      {
        heading: "How We Help",
        items: [
          "Assessing your visit visa eligibility and advising on the right category",
          "Preparing a strong application package that demonstrates genuine visitor intent",
          "Advising on how to present financial and employment evidence effectively",
          "Drafting and reviewing supporting letters and travel itineraries",
          "Submitting the application and scheduling biometrics appointments",
          "Following up on processing and advising on appeals if required",
        ],
      },
    ],
  },
  migration: {
    title: "Migration Visa",
    subtitle: "Make your permanent move with expert guidance",
    image: migrationVisaImg,
    accentColor: "#8B5CF6",
    intro: "Countries issue migration visas to attract economic contributors, reunite families, and meet demographic objectives. Find My Career's migration specialists guide you through the entire process of permanently relocating — from initial eligibility assessment to final settlement.",
    sections: [
      {
        heading: "Why Countries Issue Migration Visas",
        items: [
          "Economic Growth — attracting entrepreneurs, investors, and business professionals",
          "Talent Acquisition — drawing in highly skilled individuals, researchers, and professionals",
          "Population Growth — supporting countries with declining or aging populations",
          "Family Reunification — keeping families together across international borders",
          "Humanitarian Obligations — fulfilling commitments to refugees and vulnerable individuals",
          "Cultural Diversity — enriching society with diverse perspectives and skills",
        ],
      },
      {
        heading: "Migration Pathways We Support",
        items: [
          "Points-based skilled migration (Australia, Canada, New Zealand)",
          "Family reunification and spouse/partner visas",
          "Investor and entrepreneur migration visas",
          "Indefinite Leave to Remain (ILR) — UK settlement",
          "Permanent Residency (PR) applications",
          "Naturalisation and citizenship guidance",
        ],
      },
      {
        heading: "Our End-to-End Migration Support",
        items: [
          "Initial eligibility assessment and points calculation",
          "Expression of Interest (EOI) submission for points-based systems",
          "Complete document preparation including police clearances and medical exams",
          "Health and character requirement guidance",
          "Submission to the relevant immigration authority",
          "Ongoing status monitoring and response to requests for information",
          "Post-approval settlement and integration advice",
        ],
      },
    ],
  },
};

type VisaKey = keyof typeof visaModalData;

// ─── Process steps ────────────────────────────────────────────────────────────
const processSteps = [
  { title: "Document Preparation", icon: FileText, desc: "We gather and prepare all necessary documents — application forms, passports, photographs, financial documents, travel itineraries and other supporting materials." },
  { title: "Application Submission", icon: Send, desc: "We submit the visa application on behalf of the applicant to the consulate or embassy, scheduling appointments if necessary and ensuring all documents are correct." },
  { title: "Status Tracking", icon: Clock, desc: "We actively monitor the status of your visa application and keep you informed of any updates, requests for additional information, or interview schedules." },
  { title: "Interview Preparation", icon: ClipboardCheck, desc: "If required, we provide mock interview sessions and coaching to ensure you are confident and well-prepared for any consular interviews." },
  { title: "Approval & Collection", icon: Award, desc: "Once your visa is approved, we guide you through the next steps — including understanding your visa conditions and preparing for travel." },
];

// ─── Visa type card data ──────────────────────────────────────────────────────
const visaTypes = [
  {
    key: "student-visa" as VisaKey,
    icon: GraduationCap,
    title: "Student Visa",
    subtitle: "Study in Your Dream Destination",
    desc: "Our expert team guides you through every step of the student visa process — from gathering documents to preparing for visa interviews, maximising your chances of approval.",
    features: ["University acceptance letter guidance", "Financial statement preparation", "CAS / CoE assistance", "Interview preparation", "IELTS score requirements advice"],
    gradient: "from-blue-500/10 to-blue-600/5",
    accent: "text-blue-500",
    border: "border-blue-500/20 hover:border-blue-500/50",
    badgeBg: "bg-blue-500/10 text-blue-600",
    image: studentVisaImg,
  },
  {
    key: "work-permit" as VisaKey,
    icon: Briefcase,
    title: "Work Permit",
    subtitle: "Build Your Career Abroad",
    desc: "Whether you have a job offer or are seeking skilled worker pathways, we handle the complex paperwork and requirements of work permit applications across multiple countries.",
    features: ["Skilled Worker Visa support", "Employer sponsorship guidance", "Points-based system assessment", "Intra-company transfer support", "Document verification and preparation"],
    gradient: "from-amber-500/10 to-amber-600/5",
    accent: "text-amber-500",
    border: "border-amber-500/20 hover:border-amber-500/50",
    badgeBg: "bg-amber-500/10 text-amber-600",
    image: workVisaImg,
  },
  {
    key: "visit-visa" as VisaKey,
    icon: Globe,
    title: "Visit Visa",
    subtitle: "Explore the World Hassle-Free",
    desc: "Planning a visit for tourism, family, or business? We ensure your visit visa application is complete, well-supported, and submitted correctly the first time.",
    features: ["Tourism & family visit visas", "Business visit visas", "Bank statement guidance", "Travel itinerary preparation", "Invitation letter support"],
    gradient: "from-green-500/10 to-green-600/5",
    accent: "text-green-500",
    border: "border-green-500/20 hover:border-green-500/50",
    badgeBg: "bg-green-500/10 text-green-600",
    image: visitVisaImg,
  },
  {
    key: "migration-visa" as VisaKey,
    icon: Home,
    title: "Migration Visa",
    subtitle: "Your New Life Starts Here",
    desc: "Our migration specialists guide families and individuals through points-based immigration systems, family reunification pathways, and settlement routes.",
    features: ["Points-based migration assessment", "Family reunification visas", "Settlement (ILR) applications", "Citizenship pathway planning", "Document legalisation support"],
    gradient: "from-purple-500/10 to-purple-600/5",
    accent: "text-purple-500",
    border: "border-purple-500/20 hover:border-purple-500/50",
    badgeBg: "bg-purple-500/10 text-purple-600",
    image: migrationVisaImg,
  },
];


// ─── Main Page ────────────────────────────────────────────────────────────────
function VisaAssistancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        eyebrow="Our Services"
        title={<>Expert <span className="text-accent">Visa Assistance</span></>}
        subtitle="With 17 years of experience and an ever-evolving knowledge base, our expert team successfully navigates the complexities of visa applications on your behalf."
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Visa Application Process</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Your Trusted Partner for<br />Every Visa Application
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a visa application service provider, Find My Career has the capabilities and know-how to successfully manage visa applications using 17 years of accumulated experience. We are constantly up to date with our knowledge in an ever-evolving immigration environment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced staff handle the full process from document preparation and application submission to status tracking and interview coaching — ensuring the highest possible chance of approval.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {["98% Visa Success Rate", "17+ Years of Experience", "All Visa Types Covered", "Multilingual Support", "Direct Consulate Liaison", "Document Verification"].map((item, i) => (
                  <motion.div key={i} className="flex items-center gap-3" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <div className="bg-accent/10 p-1 rounded-full shrink-0"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                    <span className="text-foreground/90 font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src={heroImg} alt="Visa Application Support" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex gap-3 flex-wrap">
                  {["Student Visa", "Work Permit", "Visit Visa", "Migration"].map((tag) => (
                    <span key={tag} className="bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process Timeline */}
      <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">How it works</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">The Application Process</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Our experienced staff will be engaged in every stage, ensuring a smooth, successful application.</motion.p>
          </motion.div>

          <div className="relative bg-background border border-border rounded-xl p-8 pt-16 mt-8 shadow-sm">
            <div className="absolute -top-4 left-6 bg-[#0A1628] text-white px-6 py-2 rounded-md font-bold tracking-wide shadow-md text-sm">VISA APPLICATION PROCESS</div>
            <div className="relative pt-4 mt-6">
              <div className="hidden lg:block absolute top-[1.75rem] left-[7%] right-[7%] h-[2px] border-t-2 border-dashed border-muted-foreground/30 z-0" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
                {processSteps.map((step, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center group">
                    <div className="w-10 h-10 rounded-full bg-[#C8102E] text-white font-bold flex items-center justify-center text-sm shadow-md mb-6 z-10 ring-4 ring-background group-hover:scale-110 transition-transform">{i + 1}</div>
                    <div className="w-full bg-background/50 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col items-center text-center shadow-sm group-hover:shadow-md group-hover:border-accent/60 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-14 h-14 rounded-full bg-[#0A1628] flex items-center justify-center text-white mb-4 shadow-lg z-10"><step.icon className="w-6 h-6" strokeWidth={1.5} /></div>
                      <h4 className="text-sm font-bold text-foreground leading-snug z-10 mb-2">{step.title}</h4>
                      <p className="text-xs text-muted-foreground z-10 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types with More Details */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Expertise</motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Visa Types We Handle</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">From student and work visas to migration and business visas, we cover every pathway.</motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {visaTypes.map((visa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group rounded-3xl border bg-gradient-to-br ${visa.gradient} ${visa.border} transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl`}
              >
                {/* Card image */}
                <div className="relative h-52 overflow-hidden">
                  <img src={visa.image} alt={visa.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-background/90 shadow-sm ${visa.accent}`}>
                      <visa.icon className="w-3.5 h-3.5" />
                      {visa.subtitle}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-black text-white">{visa.title}</h3>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-5">{visa.desc}</p>
                  <div className="space-y-2 mb-6">
                    {visa.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-3">
                        <div className="bg-background/60 border border-border p-0.5 rounded-full shrink-0">
                          <CheckCircle2 className={`w-4 h-4 ${visa.accent}`} />
                        </div>
                        <span className="text-sm text-foreground/80 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/visa-assistance/$visaKey"
                      params={{ visaKey: visa.key }}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A1628] text-white font-semibold text-sm hover:scale-105 active:scale-95 transition-transform shadow-md`}
                    >
                      More Details <ChevronRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://register.findmycareer.org.uk/apply"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Innovator Founder Visa — full-width banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 group rounded-3xl border border-[#C8102E]/20 hover:border-[#C8102E]/50 bg-gradient-to-br from-[#C8102E]/10 to-[#C8102E]/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C8102E]/10 text-[#C8102E] mb-4">
                    <Lightbulb className="w-3.5 h-3.5" /> Business & Investment
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">Innovator Founder Visa</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#C8102E] mb-4">Launch Your Business in the UK</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">The UK Innovator Founder Visa is for entrepreneurs with an innovative, viable, and scalable business idea. We provide full end-to-end support from endorsement body applications to the visa itself.</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {["Business idea assessment", "Endorsement body support", "Business plan development", "Visa application support", "Post-visa business guidance"].map((f, fi) => (
                      <div key={fi} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0" />
                        <span className="text-sm text-foreground/80 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to="/innovator-founder-visa" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A1628] text-white font-semibold text-sm hover:scale-105 active:scale-95 transition-transform shadow-md">
                    Full Details <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="https://register.findmycareer.org.uk/apply" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors">
                    Apply Now
                  </a>
                </div>
              </div>
              <div className="relative min-h-[240px] lg:min-h-0 overflow-hidden">
                <img src={innovativeVisaImg} alt="Innovator Founder Visa" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/10 to-transparent lg:bg-gradient-to-l" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FreeConsultationCTA />
    </div>
  );
}
