import DeidHeader from "components/DeidHeader";
import FrameworkSection from "components/Frameworks";
import Input from "components/Input";
import DeidOutputSection from "components/DeidOutput";
import { useAppSelector } from "store/hooks";
import { PageContainer } from "./styles";

export default function DeidentificationPage() {
  const currentStep = useAppSelector((s) => s.document.currentStep);

  if (currentStep === "results") {
    return <DeidOutputSection />;
  }

  return (
    <>
      <DeidHeader />
      <PageContainer>
        <FrameworkSection />
        <Input />
      </PageContainer>
    </>
  );
}
