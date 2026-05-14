import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemFrame from "@/components/ProblemFrame";
import HowItWorks from "@/components/HowItWorks";
import Cockpit from "@/components/Cockpit";
import Deliverables from "@/components/Deliverables";
import Pricing from "@/components/Pricing";
import Founders from "@/components/Founders";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemFrame />
        <HowItWorks />
        <Cockpit />
        <Deliverables />
        <Pricing />
        <Founders />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
