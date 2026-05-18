import { PageHero } from "@/components/PageHero";
import { Industries } from "@/components/sections/Industries";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Page = () => (
  <>
    <PageHero
      eyebrow="Industries"
      title={<>Sector context that shapes <span className="text-emerald">every decision we make.</span></>}
      description="From regulated healthcare to high-growth SaaS, our work is informed by deep industry experience across twelve sectors."
    />
    <Industries />
    <ContactCTA />
  </>
);

export default Page;
