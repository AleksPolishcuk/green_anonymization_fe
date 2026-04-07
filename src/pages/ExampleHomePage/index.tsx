import { ComplianceSection } from "features/ComplianceSection";
import { Loader } from "shared/ui/Loader";
import { Capabilities } from "features/Capabilities";

export default function ExampleHomePage() {
  return (
    <>
      <Capabilities />
      <ComplianceSection />
      <Loader />
    </>
  );
}
