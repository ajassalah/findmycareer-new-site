import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { IeltsPromo } from "@/components/ielts/IeltsPromo";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export const Route = createFileRoute("/ielts-preparation")({
  head: () => ({
    meta: [
      { title: "IELTS Preparation — Score 7.0+ With Expert Coaches" },
      { name: "description", content: "Structured 6-week IELTS program with examiner-led coaching. Small batches, mock tests, free repeat until you hit 7.0+." },
      { property: "og:title", content: "IELTS Preparation" },
      { property: "og:description", content: "Score 7.0+ in IELTS with our expert coaches." },
      { property: "og:url", content: "/ielts-preparation" },
    ],
    links: [{ rel: "canonical", href: "/ielts-preparation" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="IELTS Preparation"
        title={<>Hit <span className="text-accent">7.0+</span> with confidence</>}
        subtitle="Examiner-led classes, weekly mock tests and free retake until you reach your target band."
      />
      <IeltsPromo />
      <FreeConsultationCTA />
    </>
  ),
});
