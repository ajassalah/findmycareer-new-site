import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/hero/HeroSection";
import { StatsSection } from "@/components/stats/StatsSection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { DestinationsSection } from "@/components/destinations/DestinationsSection";
import { HowItWorks } from "@/components/timeline/HowItWorks";
import { TestimonialsCarousel } from "@/components/testimonials/TestimonialsCarousel";
import { IeltsPromo } from "@/components/ielts/IeltsPromo";
import { PartnersSection } from "@/components/partners/PartnersSection";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Find My Career — Study Abroad Consultancy in Sri Lanka" },
      { name: "description", content: "Sri Lanka's most trusted study-abroad consultancy. 17+ years guiding students to top universities in the UK, Australia, Canada and Europe." },
      { property: "og:title", content: "Find My Career — Study Abroad Consultancy" },
      { property: "og:description", content: "Your dream university awaits. Expert visa, application & IELTS support in English, Sinhala and Tamil." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
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
