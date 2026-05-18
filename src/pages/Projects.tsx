import { PageHero } from "@/components/PageHero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Page = () => (
  <>
    <PageHero
      eyebrow="Selected work"
      title={<>Outcomes our clients <span className="text-emerald">can point to.</span></>}
      description="A focused selection of recent engagements — across regions, industries and divisions."
    />
    <CaseStudies />
    <Testimonials />
    <ContactCTA />
  </>
);

export default Page;
