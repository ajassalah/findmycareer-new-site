import { PageHero } from "@/components/PageHero";
import { PartnersSection } from "@/components/partners/PartnersSection";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export default function UniversitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Universities"
        title={
          <>
            150+ <span className="text-accent">partner universities</span> worldwide
          </>
        }
        subtitle="Direct relationships that mean faster offers, better scholarships and smoother applications."
      />
      <PartnersSection />
      <FreeConsultationCTA />
    </>
  );
}

