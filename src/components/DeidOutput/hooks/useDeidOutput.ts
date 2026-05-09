import { useCallback, useMemo } from "react";

import {
  ACCURACY_DECIMAL_PRECISION,
  ACCURACY_PERCENT_MULTIPLIER,
  COMPLIANCE_FRAMEWORKS,
  DEID_OUTPUT_FILENAME,
} from "constants/MainPages";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { toggleEntitySelected } from "store/slices/documentSlice";

import { useDownloadRedactedTextCopy } from "./useDownloadRedactedTextCopy";
import {
  parseTextWithEntities,
  parseTextWithRedactions,
} from "../utils/parsers";

export const useDeidOutput = () => {
  const dispatch = useAppDispatch();
  const { originalText, piiEntities, selectedFramework } = useAppSelector(
    (s) => s.document,
  );

  const safeEntities = useMemo(() => piiEntities ?? [], [piiEntities]);
  const safeOriginalText = originalText ?? "";

  const toggleEntity = useCallback(
    (id: string) => {
      dispatch(toggleEntitySelected(id));
    },
    [dispatch],
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
      safeEntities.reduce((sum, e) => sum + e.score, 0) / safeEntities.length;
    return (
      Math.round(
        avg * ACCURACY_PERCENT_MULTIPLIER * ACCURACY_DECIMAL_PRECISION,
      ) / ACCURACY_DECIMAL_PRECISION
    );
  }, [safeEntities]);

  const frameworkName = useMemo(
    () =>
      COMPLIANCE_FRAMEWORKS.find((f) => f.code === selectedFramework)?.name ??
      selectedFramework,
    [selectedFramework],
  );

  const originalSegments = useMemo(
    () => parseTextWithEntities(safeOriginalText, safeEntities),
    [safeOriginalText, safeEntities],
  );

  const redactedSegments = useMemo(
    () => parseTextWithRedactions(safeOriginalText, selectedEntities),
    [safeOriginalText, selectedEntities],
  );

  const { downloadAsJson, downloadAsText, copyToClipboard } =
    useDownloadRedactedTextCopy();

  const handleDownloadJson = useCallback(() => {
    downloadAsJson(redactedSegments, DEID_OUTPUT_FILENAME);
  }, [downloadAsJson, redactedSegments]);

  const handleDownloadText = useCallback(() => {
    downloadAsText(redactedSegments, DEID_OUTPUT_FILENAME);
  }, [downloadAsText, redactedSegments]);

  const handleCopyText = useCallback(() => {
    copyToClipboard(redactedSegments);
  }, [copyToClipboard, redactedSegments]);

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
    handleDownloadJson,
    handleDownloadText,
    handleCopyText,
  };
};
