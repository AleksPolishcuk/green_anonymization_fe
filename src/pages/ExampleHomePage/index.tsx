import { ComplianceSection } from "features/ComplianceSection";
import Hero from "features/Hero";
import { Loader } from "shared/ui/Loader";
import Header from "components/ExampleHeader";

export default function ExampleHomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ComplianceSection />
      <Loader />
    </>
  );
}
