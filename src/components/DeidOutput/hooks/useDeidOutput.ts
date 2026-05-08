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
  const {
    originalText: rawOriginalText,
    piiEntities: rawPiiEntities,
    selectedFramework,
  } = useAppSelector((s) => s.document);

  const originalText = rawOriginalText ?? "";
  const piiEntities = useMemo(() => rawPiiEntities ?? [], [rawPiiEntities]);

  const toggleEntity = useCallback(
    (id: string) => {
      dispatch(toggleEntitySelected(id));
    },
    [dispatch],
  );

  const selectedEntities = useMemo(
    () => piiEntities.filter((e) => e.selected),
    [piiEntities],
  );

  const entityCount = piiEntities.length;
  const selectedCount = selectedEntities.length;

  const accuracy = useMemo(() => {
    if (piiEntities.length === 0) return 0;
    const avg =
      piiEntities.reduce((sum, e) => sum + e.score, 0) / piiEntities.length;
    return (
      Math.round(
        avg * ACCURACY_PERCENT_MULTIPLIER * ACCURACY_DECIMAL_PRECISION,
      ) / ACCURACY_DECIMAL_PRECISION
    );
  }, [piiEntities]);

  const frameworkName = useMemo(
    () =>
      COMPLIANCE_FRAMEWORKS.find((f) => f.code === selectedFramework)?.name ??
      selectedFramework ??
      "",
    [selectedFramework],
  );

  const originalSegments = useMemo(
    () => parseTextWithEntities(originalText, piiEntities),
    [originalText, piiEntities],
  );

  const redactedSegments = useMemo(
    () => parseTextWithRedactions(originalText, selectedEntities),
    [originalText, selectedEntities],
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
