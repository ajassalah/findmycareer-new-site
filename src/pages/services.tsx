import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything you need, <span className="text-accent">all in one place</span>
          </>
        }
        subtitle="From your first consultation to landing safely abroad - our specialists handle every step."
      />
      <ServicesGrid />
      <FreeConsultationCTA />
    </>
  );
}

