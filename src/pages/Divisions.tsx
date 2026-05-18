import { PageHero } from "@/components/PageHero";
import { Divisions } from "@/components/sections/Divisions";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Page = () => (
  <>
    <PageHero
      eyebrow="Divisions"
      title={<>One brand. <span className="text-emerald">Five specialized practices.</span></>}
      description="Each division operates with deep expertise — and connects through a single delivery standard, leadership team and client experience."
    />
    <Divisions />
    <ContactCTA />
  </>
);

export default Page;
