import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  ACCURACY_DECIMAL_PRECISION,
  ACCURACY_PERCENT_MULTIPLIER,
  COMPLIANCE_FRAMEWORKS,
  DEID_OUTPUT_FILENAME,
} from "constants/MainPages";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  toggleEntitySelected,
  setRedactedText,
  prevDeidStep,
  resetDocument,
} from "store/slices/documentSlice";
import { documentsService } from "services/documents";
import {
  buildAnonymizedText,
  parseTextWithEntities,
  parseTextWithRedactions,
} from "components/DeidOutput/utils/parsers";

import { useDownloadRedactedTextCopy } from "./useDownloadRedactedTextCopy";

export const useDeidOutput = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    originalText: rawOriginalText,
    piiEntities: rawPiiEntities,
    selectedFramework,
    anonymizedText,
    document,
  } = useAppSelector((s) => s.document);

  const originalText = rawOriginalText ?? "";
  const piiEntities = useMemo(() => rawPiiEntities ?? [], [rawPiiEntities]);

  const safeEntities = useMemo(() => piiEntities ?? [], [piiEntities]);
  const safeOriginalText = originalText ?? "";

  const toggleEntity = useCallback(
    (id: string) => {
      dispatch(toggleEntitySelected(id));
      const updatedRedactedText = buildAnonymizedText(
        safeOriginalText,
        safeEntities,
      );
      dispatch(setRedactedText(updatedRedactedText));
    },
    [dispatch, safeOriginalText, safeEntities],
  );

  const selectedEntities = useMemo(
    () => safeEntities.filter((e) => e.selected),
    [safeEntities],
  );

  const entityCount = safeEntities.length;
  const selectedCount = selectedEntities.length;

  const accuracy = useMemo(() => {
    if (safeEntities.length === 0) return 0;
    const avg =
      safeEntities.reduce(
        (sum: number, e: { score: number }) => sum + e.score,
        0,
      ) / safeEntities.length;
    return (
      Math.round(
        avg * ACCURACY_PERCENT_MULTIPLIER * ACCURACY_DECIMAL_PRECISION,
      ) / ACCURACY_DECIMAL_PRECISION
    );
  }, [safeEntities]);

  const frameworkName = useMemo(() => {
    if (!selectedFramework) {
      return "";
    }

    return (
      COMPLIANCE_FRAMEWORKS.find((f) => f.code === selectedFramework.code)
        ?.name ?? selectedFramework.name
    );
  }, [selectedFramework]);

  const originalSegments = useMemo(
    () => parseTextWithEntities(safeOriginalText, safeEntities),
    [safeOriginalText, safeEntities],
  );

  const redactedSegments = useMemo(
    () => parseTextWithRedactions(safeOriginalText, selectedEntities),
    [safeOriginalText, selectedEntities],
  );

  const handleGenerateSyntheticData = useCallback(async () => {
    if (!document?.id || !safeOriginalText) return;

    const finalAnonymizedText = buildAnonymizedText(
      safeOriginalText,
      safeEntities,
    );

    try {
      await documentsService.updateDocumentText(document.id, {
        text: finalAnonymizedText,
      });
      navigate(`/syntheticdata?documentId=${document.id}`);
    } catch {
      // save failed — stay on page, do not navigate
    }
  }, [document, safeOriginalText, safeEntities, navigate]);

  const { copyToClipboard, downloadAsPdf } = useDownloadRedactedTextCopy();

  const handleCopyText = useCallback(() => {
    copyToClipboard(redactedSegments);
  }, [copyToClipboard, redactedSegments]);

  const handleDownloadPdf = useCallback(() => {
    downloadAsPdf(redactedSegments, DEID_OUTPUT_FILENAME);
  }, [downloadAsPdf, redactedSegments]);

  const handleBack = useCallback(() => {
    dispatch(prevDeidStep());
  }, [dispatch]);

  const handleCreateNewDocument = useCallback(async () => {
    if (document?.id && anonymizedText) {
      const selectedEntityIds = safeEntities
        .filter((e) => e.selected)
        .map((e) => e.id);

      try {
        await Promise.all([
          documentsService.updateDocumentText(document.id, {
            text: anonymizedText,
          }),
          documentsService.updateEntitySelections(document.id, {
            selectedEntityIds,
          }),
        ]);
      } catch {
        // save failed — reset state anyway
      }
    }

    dispatch(resetDocument());
  }, [document, anonymizedText, safeEntities, dispatch]);

  return {
    piiEntities,
    originalText,
    entityCount,
    selectedCount,
    accuracy,
    frameworkName,
    originalSegments,
    redactedSegments,
    toggleEntity,
    handleCopyText,
    handleGenerateSyntheticData,
    handleDownloadPdf,
    handleBack,
    handleCreateNewDocument,
  };
};
