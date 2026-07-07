import { PageHero } from "@/components/PageHero";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title={
          <>
            Where will your <span className="text-accent">journey</span> take you?
          </>
        }
        subtitle="Select a destination from the dropdown above to explore."
      />
      <FreeConsultationCTA />
    </>
  );
}

