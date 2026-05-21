import DeidHeader from "components/DeidHeader";
import FrameworkSection from "components/Frameworks";
import Input from "components/Input";
import DeidOutputSection from "components/DeidOutput";
import DriverStyles from "components/WorkflowTour/DriverStyles";

import { useAppSelector } from "store/hooks";
import { useDeidentificationTour } from "./useDeidentificationTour";
import { PageContainer } from "./styles";

export default function DeidentificationPage() {
  const currentStep = useAppSelector((s) => s.document.currentStep);

  const user = useAppSelector((s) => s.auth.user);

  useDeidentificationTour({
    currentStep,
    user,
  });

  if (currentStep === "results") {
    return (
      <>
        <DriverStyles />
        <DeidOutputSection />
      </>
    );
  }

  return (
    <>
      <DriverStyles />
      <DeidHeader />
      <PageContainer>
        <FrameworkSection />
        <Input />
      </PageContainer>
    </>
  );
}
