import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PartnersSection } from "@/components/partners/PartnersSection";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export const Route = createFileRoute("/universities")({
  head: () => ({
    meta: [
      { title: "Partner Universities — 150+ Worldwide | Find My Career" },
      { name: "description", content: "Direct partnerships with 150+ leading universities across the UK, Australia, Canada and Europe." },
      { property: "og:title", content: "Partner Universities" },
      { property: "og:description", content: "150+ partner universities worldwide." },
      { property: "og:url", content: "/universities" },
    ],
    links: [{ rel: "canonical", href: "/universities" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Universities"
        title={<>150+ <span className="text-accent">partner universities</span> worldwide</>}
        subtitle="Direct relationships that mean faster offers, better scholarships and smoother applications."
      />
      <PartnersSection />
      <FreeConsultationCTA />
    </>
  ),
});
