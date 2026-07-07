import { PageHero } from "@/components/PageHero";
import { IeltsPromo } from "@/components/ielts/IeltsPromo";
import { IeltsDetails } from "@/components/ielts/IeltsDetails";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export default function IeltsPreparationPage() {
  return (
    <>
      <PageHero
        eyebrow="IELTS Preparation"
        title={
          <>
            Hit <span className="text-accent">7.0+</span> with confidence
          </>
        }
        subtitle="Examiner-led classes, weekly mock tests and free retake until you reach your target band."
      />
      <IeltsPromo />
      <IeltsDetails />
      <FreeConsultationCTA />
    </>
  );
}

