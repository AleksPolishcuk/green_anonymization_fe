import { ComplianceSection } from "features/ComplianceSection";
import Hero from "features/Hero";
import { Capabilities } from "features/Capabilities";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <ComplianceSection />
    </>
  );
}
