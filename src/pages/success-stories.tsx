import { PageHero } from "@/components/PageHero";
import { TestimonialsCarousel } from "@/components/testimonials/TestimonialsCarousel";
import { TestimonialSlider } from "@/components/testimonials/TestimonialSlider";
import { FreeConsultationCTA } from "@/components/cta/FreeConsultationCTA";

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title={
          <>
            Real students. <span className="text-accent">Real results.</span>
          </>
        }
        subtitle="10,000+ Sri Lankan students have started their international journey with us. Here are a few of their stories."
      />
      <TestimonialsCarousel hideMarquee={true} />
      <TestimonialSlider />
      <FreeConsultationCTA />
    </>
  );
}

