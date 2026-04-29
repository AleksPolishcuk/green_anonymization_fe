import { ComplianceSection } from "features/ComplianceSection";
import Hero from "features/Hero";
import ReadyToProtect from "features/ReadyToProtect";
import { Capabilities } from "features/Capabilities";

import { useHomeHashScroll } from "./hooks/useHomeHashScroll";

export default function HomePage() {
  useHomeHashScroll();

  return (
    <>
      <Hero />
      <Capabilities />
      <ComplianceSection />
      <ReadyToProtect />
    </>
  );
}
