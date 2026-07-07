import { HeroSection } from "@/components/hero/HeroSection";
import { StatsSection } from "@/components/stats/StatsSection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { DestinationsSection } from "@/components/destinations/DestinationsSection";
import { HowItWorks } from "@/components/timeline/HowItWorks";
import { TestimonialsCarousel } from "@/components/testimonials/TestimonialsCarousel";
import { IeltsPromo } from "@/components/ielts/IeltsPromo";
import { PartnersSection } from "@/components/partners/PartnersSection";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";


export default function Index() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <DestinationsSection />
      <HowItWorks />
      <TestimonialsCarousel />
      <IeltsPromo />
      <PartnersSection />
      <FreeConsultationCTA />
    </>
  );
}
