import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

// Images
import studentVisaImg from "@/assets/student visa.png";
import workVisaImg from "@/assets/work visa.png";
import visitVisaImg from "@/assets/visit visa.png";
import migrationVisaImg from "@/assets/migration visa.jfif";
import innovativeVisaImg from "@/assets/innovative visa.png";

const visaModalData = {
  "student-visa": {
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
          "Academic transcripts and certificates from previous institutions",
          "Statement of Purpose (SOP) — explaining your study plans and career goals",
          "Medical insurance and health clearances where applicable",
        ],
      },
      {
        heading: "Countries We Support",
        items: [
          "United Kingdom — Student Route Visa (previously Tier 4)",
          "Australia — Student Visa (Subclass 500)",
          "Canada — Study Permit",
          "United States — F-1/M-1 Student Visa",
          "Germany — Student Visa / Residence Permit",
          "New Zealand — Student Visa",
          "Ireland — Study Visa",
        ],
      },
      {
        heading: "Our Student Visa Services",
        items: [
          "Personalised eligibility assessment and university shortlisting",
          "CAS (Confirmation of Acceptance for Studies) / CoE assistance",
          "Complete document preparation and review",
          "Financial statement and sponsorship letter guidance",
          "IELTS/TOEFL score requirements advice",
          "Visa application form completion and submission",
          "Mock interview preparation and coaching",
          "Post-visa travel and accommodation guidance",
        ],
      },
    ],
  },
  "work-permit": {
    title: "Work Permit",
    subtitle: "Build Your Career Abroad",
    image: workVisaImg,
    accentColor: "#F59E0B",
    intro: "Find My Career provides expert work permit assistance to help skilled professionals secure employment abroad. Whether you have a job offer or are exploring skilled worker pathways, we handle the complex paperwork and requirements across multiple countries.",
    sections: [
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
        heading: "Work Permit Types We Handle",
        items: [
          "UK Skilled Worker Visa — for qualified professionals with UK job offers",
          "UK Health and Care Worker Visa",
          "Canada Express Entry — Federal Skilled Worker Program",
          "Australia Temporary Skill Shortage Visa (Subclass 482)",
          "New Zealand Accredited Employer Work Visa",
          "Germany Work Visa for Skilled Workers",
          "UAE Employment Visa",
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
  "visit-visa": {
    title: "Visit Visa",
    subtitle: "Explore the World Hassle-Free",
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
        ],
      },
      {
        heading: "Core Requirements",
        items: [
          "Valid passport with sufficient validity",
          "Completed visa application form",
          "Recent passport-sized photographs",
          "Proof of financial means (bank statements)",
          "Travel itinerary and return ticket",
          "Accommodation proof (hotel bookings or host invitation)",
          "Travel insurance covering the full duration of stay",
          "Evidence of strong home country ties (employment, property, family)",
        ],
      },
      {
        heading: "Our Visit Visa Services",
        items: [
          "Visa type selection and eligibility check",
          "Document preparation and completeness review",
          "Financial evidence guidance",
          "Application form filling and submission",
          "Appointment scheduling with embassy/consulate",
          "Travel insurance recommendations",
          "Interview preparation if required",
        ],
      },
    ],
  },
  "migration-visa": {
    title: "Migration Visa",
    subtitle: "Your New Life Starts Here",
    image: migrationVisaImg,
    accentColor: "#8B5CF6",
    intro: "Thinking of making a permanent move abroad? Find My Career provides comprehensive migration visa support, guiding families and individuals through the complex process of permanent residency and settlement applications.",
    sections: [
      {
        heading: "Migration Pathways We Support",
        items: [
          "UK Skilled Worker leading to Indefinite Leave to Remain (ILR)",
          "Australia General Skilled Migration — Subclass 189, 190 & 491",
          "Canada Permanent Residence via Express Entry",
          "New Zealand Skilled Migrant Residence Visa",
          "Germany Settlement Permit (Niederlassungserlaubnis)",
          "Family Reunion and Dependent Visa routes",
        ],
      },
      {
        heading: "Core Documentation",
        items: [
          "Valid passport and certified identity documents",
          "Skills assessment from relevant authority",
          "English language test results",
          "Police clearance certificates",
          "Medical examination reports",
          "Evidence of work experience and qualifications",
          "Proof of financial stability",
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
  "innovator-founder-visa": {
    title: "Innovator Founder Visa",
    subtitle: "Launch Your Business in the UK",
    image: innovativeVisaImg,
    accentColor: "#EC4899",
    intro: "The UK Innovator Founder Visa is the premier route for entrepreneurs with innovative, viable and scalable business ideas. Find My Career provides end-to-end support — from business plan preparation and endorsement to the final visa submission.",
    sections: [
      {
        heading: "Eligibility Criteria",
        items: [
          "A genuine, innovative, and original business concept",
          "The business must be viable — realistic and achievable with clear market demand",
          "The business must be scalable — capable of growth and job creation",
          "Endorsement from a UK Home Office-approved endorsing body",
          "English language requirement — B2 level or above",
          "Maintenance funds requirement — sufficient personal savings",
        ],
      },
      {
        heading: "Our Innovator Founder Visa Services",
        items: [
          "Business idea assessment and feasibility review",
          "Business plan writing and endorsement preparation",
          "Market research and financial forecasting support",
          "Identification of the right endorsing body for your sector",
          "Mock endorsement interview preparation",
          "Full visa application support and submission",
          "Post-visa business launch guidance",
        ],
      },
      {
        heading: "Key Benefits",
        items: [
          "Live and work in the UK",
          "Bring eligible family dependants",
          "Build and run your innovative business",
          "Access the UK's thriving startup ecosystem",
          "Pathway to Indefinite Leave to Remain in as little as 3 years",
          "Permitted to take additional skilled employment",
        ],
      },
    ],
  },
};

type VisaKey = keyof typeof visaModalData;

export const Route = createFileRoute("/visa-assistance_/$visaKey")({
  component: VisaDetailPage,
  loader: ({ params }) => {
    const data = visaModalData[params.visaKey as VisaKey];
    if (!data) throw new Error("Visa type not found");
    return { data, visaKey: params.visaKey as VisaKey };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.data.title ?? "Visa Details"} | Find My Career` },
      { name: "description", content: loaderData?.data.intro ?? "" },
    ],
  }),
});

function VisaDetailPage() {
  const { data } = Route.useLoaderData();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Ambient glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: data.accentColor }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <Link
            to="/visa-assistance"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Visa Assistance
          </Link>

          {/* Header */}
          <div className="mb-8">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-5"
              style={{ background: data.accentColor }}
            >
              {data.subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight text-foreground">
              {data.title}
            </h1>
          </div>

          {/* Hero image */}
          <div className="relative h-64 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 to-transparent pointer-events-none" />
          </div>

          {/* Intro */}
          <p
            className="text-xl font-medium text-foreground/80 mb-10 leading-relaxed pb-10 border-b border-border/50 border-l-4 pl-5"
            style={{ borderLeftColor: data.accentColor }}
          >
            {data.intro}
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {data.sections.map((section, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: si * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ background: data.accentColor }}
                  />
                  {section.heading}
                </h2>
                {"content" in section && section.content && (
                  <p className="text-muted-foreground leading-relaxed">{section.content as string}</p>
                )}
                {"items" in section && section.items && (
                  <ul className="space-y-3">
                    {(section.items as string[]).map((item, ii) => (
                      <li key={ii} className="flex items-start gap-3 text-foreground/80">
                        <ChevronRight
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: data.accentColor }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA footer */}
          <div
            className="mt-16 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: `linear-gradient(135deg, rgba(10,22,40,0.8), ${data.accentColor}22)`,
              border: `1px solid ${data.accentColor}33`,
            }}
          >
            <div>
              <h4 className="text-lg font-bold text-foreground mb-1">
                Ready to start your visa journey?
              </h4>
              <p className="text-sm text-black">
                Book a consultation with our immigration experts today.
              </p>
            </div>
            <a
              href="https://register.findmycareer.org.uk/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm hover:scale-105 active:scale-95 transition-transform shadow-lg shrink-0"
              style={{ background: `linear-gradient(135deg, #0A1628, ${data.accentColor})` }}
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
