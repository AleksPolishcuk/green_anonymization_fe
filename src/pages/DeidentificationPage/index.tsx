import DeidHeader from "components/DeidHeader";
import FrameworkSection from "components/Frameworks";
import Input from "components/Input";
import DeidOutputSection from "components/DeidOutput";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { nextDeidStep, prevDeidStep } from "store/slices/documentSlice";

export default function DeidentificationPage() {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((s) => s.document.currentStep);

  // TODO: Temporary debug controls for visualizing step transitions.
  // Remove once the full step navigation flow is wired up properly.
  const debugButtons = (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 9999,
        display: "flex",
        gap: 8,
        padding: 8,
        background: "rgba(0,0,0,0.7)",
        color: "#fff",
        borderRadius: 8,
        fontFamily: "monospace",
        fontSize: 12,
      }}
    >
      <span style={{ alignSelf: "center" }}>step: {currentStep}</span>
      <button
        type="button"
        onClick={() => dispatch(prevDeidStep())}
        style={{ padding: "4px 10px", cursor: "pointer" }}
      >
        ← prev
      </button>
      <button
        type="button"
        onClick={() => dispatch(nextDeidStep())}
        style={{ padding: "4px 10px", cursor: "pointer" }}
      >
        next →
      </button>
    </div>
  );

  if (currentStep === "results") {
    return (
      <>
        <DeidOutputSection />
        {debugButtons}
      </>
    );
  }

  return (
    <>
      <DeidHeader />
      <FrameworkSection />
      <Input />
      {debugButtons}
    </>
  );
}
