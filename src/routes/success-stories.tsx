import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { TestimonialsCarousel } from "@/components/testimonials/TestimonialsCarousel";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — 10,000+ Sri Lankan Students Placed" },
      { name: "description", content: "Read real stories from Sri Lankan students now studying at top universities in the UK, Australia, Canada and Europe." },
      { property: "og:title", content: "Success Stories" },
      { property: "og:description", content: "10,000+ students. 98% visa success. Real stories, real results." },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Success Stories"
        title={<>Real students. <span className="text-accent">Real results.</span></>}
        subtitle="10,000+ Sri Lankan students have started their international journey with us. Here are a few of their stories."
      />
      <TestimonialsCarousel />
      <FreeConsultationCTA />
    </>
  ),
});
