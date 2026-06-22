import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { DestinationsSection } from "@/components/destinations/DestinationsSection";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Study Destinations — UK, Australia, Canada, Europe & More" },
      { name: "description", content: "Explore 8+ study destinations. Compare universities, costs and visa pathways with Find My Career." },
      { property: "og:title", content: "Study Destinations" },
      { property: "og:description", content: "Where will your journey take you? UK, Australia, Canada, Germany, France, NZ, Ireland and the US." },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Destinations"
        title={<>Where will your <span className="text-accent">journey</span> take you?</>}
        subtitle="Eight countries, 150+ universities, one team that knows them all inside-out."
      />
      <DestinationsSection />
      <FreeConsultationCTA />
    </>
  ),
});
