import { useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { resetDocument } from "store/slices/documentSlice";
import { documentsService } from "services/documents";

export const useAutoSaveDeid = () => {
  const dispatch = useAppDispatch();
  const document = useAppSelector((s) => s.document.document);
  const anonymizedText = useAppSelector((s) => s.document.anonymizedText);
  const currentStep = useAppSelector((s) => s.document.currentStep);
  const piiEntities = useAppSelector((s) => s.document.piiEntities);

  const latestRef = useRef({
    document,
    anonymizedText,
    currentStep,
    piiEntities,
  });

  useEffect(() => {
    latestRef.current = { document, anonymizedText, currentStep, piiEntities };
  });

  useEffect(() => {
    return () => {
      const {
        document: doc,
        anonymizedText: text,
        currentStep: step,
        piiEntities: entities,
      } = latestRef.current;

      if (step !== "results" || !doc?.id || !text) return;

      const selectedEntityIds = (entities ?? [])
        .filter((e) => e.selected)
        .map((e) => e.id);

      documentsService.updateDocumentText(doc.id, { text });
      documentsService.updateEntitySelections(doc.id, { selectedEntityIds });
      dispatch(resetDocument());
    };
  }, [dispatch]);
};
