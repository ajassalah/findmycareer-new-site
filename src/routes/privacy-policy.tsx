import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Find My Career" },
      { name: "description", content: "Learn how Find My Career collects, uses, and protects your personal information when using our education consultancy services." },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    title: "1. Who We Are",
    content: `Find My Career is an international education consultancy that provides services including Study Abroad Consultation, University Admissions Assistance, Student Visa Guidance, Scholarship Support, IELTS Preparation, Accommodation Assistance, Pre-Departure Briefings, and Post-Arrival Support.\n\nBy using our website and services, you agree to the practices described in this Privacy Policy.`,
  },
  {
    title: "2. Information We Collect",
    content: `We may collect the following information:\n\n**Personal Information:** Full Name, Email Address, Phone Number, Date of Birth, Nationality, Passport Information (when required for applications), Academic Qualifications, Employment Information, Preferred Study Destination.\n\n**Technical Information:** IP Address, Browser Type, Device Information, Website Usage Data, Cookies and Tracking Information.\n\n**Documents You Provide:** Academic Certificates, Transcripts, CV/Resume, Passport Copies, English Language Test Results, Financial Documents, Visa Application Documents.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your information to provide educational consultancy services, assess your eligibility for university admissions, process applications with universities and institutions, assist with student visa applications, provide scholarship guidance, communicate important updates, improve our services and website, and comply with legal obligations.`,
  },
  {
    title: "4. Sharing Your Information",
    content: `We may share your information with Educational Institutions (to process university and college applications), Immigration and Visa Authorities (when assisting with visa applications), and Service Providers including CRM systems, email providers, cloud storage providers, and website hosting providers.\n\nWe may also share information with Legal Authorities when required by law or government regulations.\n\nWe do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: "5. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, data loss, misuse, disclosure, and alteration.\n\nWhile we take reasonable precautions, no online transmission or storage system can be guaranteed to be 100% secure.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain personal information only for as long as necessary to deliver our services, fulfill legal obligations, resolve disputes, and maintain records for compliance purposes. When information is no longer required, it is securely deleted or anonymized.`,
  },
  {
    title: "7. Cookies",
    content: `Our website may use cookies to improve user experience, analyze website traffic, remember user preferences, and enhance website performance.\n\nUsers may disable cookies through their browser settings, although some website features may not function correctly.`,
  },
  {
    title: "8. Your Rights",
    content: `Depending on applicable privacy laws, you may have the right to access your personal information, correct inaccurate information, request deletion of your information, restrict processing, withdraw consent, and request a copy of your data.\n\nTo exercise these rights, please contact us using the details below.`,
  },
  {
    title: "9. Third-Party Links",
    content: `Our website may contain links to external websites, universities, or government agencies. We are not responsible for the privacy practices of third-party websites. We encourage users to review the privacy policies of any external websites they visit.`,
  },
  {
    title: "10. Children's Privacy",
    content: `Our services are intended for students and applicants seeking higher education opportunities. If we become aware that personal information has been collected from a child without appropriate consent where required, we will take reasonable steps to remove such information.`,
  },
  {
    title: "11. Updates to This Privacy Policy",
    content: `We may update this Privacy Policy periodically to reflect changes in our services, legal requirements, or business practices. Any updates will be published on this page with a revised effective date.`,
  },
  {
    title: "12. Contact Us",
    content: `If you have questions regarding this Privacy Policy or how your personal information is handled, please contact us:\n\nFind My Career\nEmail: info@findmycareer.org.uk\nWebsite: www.findmycareer.org.uk`,
  },
];

function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        eyebrow="Legal"
        title={<>Privacy <span className="text-accent">Policy</span></>}
        subtitle="We are committed to protecting your privacy and ensuring your personal information is handled securely and responsibly."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last Updated Badge */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="flex items-center gap-3 mb-12 p-4 rounded-2xl bg-accent/10 border border-accent/20">
            <Shield className="w-5 h-5 text-accent shrink-0" />
            <p className="text-sm font-medium text-foreground">Last Updated: <span className="text-accent">June 2026</span></p>
          </motion.div>

          {/* Intro */}
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="text-muted-foreground leading-relaxed mb-12">
            Welcome to Find My Career. We are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our education consultancy services.
          </motion.p>

          {/* Sections */}
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.07)} className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="border-b border-border pb-10 last:border-0 last:pb-0">
                <h2 className="text-xl font-bold text-foreground mb-4">{s.title}</h2>
                <div className="text-muted-foreground leading-relaxed text-sm space-y-3">
                  {s.content.split("\n\n").map((para, j) => (
                    <p key={j} className={para.startsWith("**") ? "font-semibold text-foreground" : ""}>
                      {para.replace(/\*\*/g, "")}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="mt-16 p-8 bg-muted/30 border border-border rounded-3xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-accent" /> Privacy Policy Summary</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We respect your privacy and are committed to protecting your personal information. Any information collected through our website or services is used solely to provide education consultancy, university admissions, student visa support, and related services. We do not sell personal information to third parties and take reasonable measures to ensure data security.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
