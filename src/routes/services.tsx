import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — University, Visa, IELTS & More | Find My Career" },
      { name: "description", content: "End-to-end study-abroad services: university applications, visa assistance, IELTS prep, scholarships, pre-departure and post-arrival support." },
      { property: "og:title", content: "Our Services" },
      { property: "og:description", content: "Everything you need to study abroad, under one roof." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything you need, <span className="text-accent">all in one place</span></>}
        subtitle="From your first consultation to landing safely abroad — our specialists handle every step."
      />
      <ServicesGrid />
      <FreeConsultationCTA />
    </>
  ),
});
