import DeidHeader from "components/DeidHeader";
import FrameworkSection from "components/Frameworks";
import DeidOutputSection from "components/DeidOutput";
import { useAppSelector } from "store/hooks";

export default function DeidentificationPage() {
  const currentStep = useAppSelector((s) => s.document.currentStep);

  if (currentStep === "results") {
    return <DeidOutputSection />;
  }

  return (
    <>
      <DeidHeader />
      <FrameworkSection />
    </>
  );
}
