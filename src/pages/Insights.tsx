import { PageHero } from "@/components/PageHero";
import { Insights } from "@/components/sections/Insights";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Page = () => (
  <>
    <PageHero
      eyebrow="Insights"
      title={<>Thinking that <span className="text-emerald">informs how we build.</span></>}
      description="Strategy, technology and brand essays from the Growthix team."
    />
    <Insights />
    <ContactCTA />
  </>
);

export default Page;
