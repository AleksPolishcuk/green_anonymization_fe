import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { documentsService } from "services/documents";
import { syntheticDataService } from "services/synthetic";
import { useFeatureAccess } from "shared/hooks/useFeatureAccess";
import { useAppDispatch } from "store/hooks";
import {
  resetSyntheticData,
  setSyntheticData,
} from "store/slices/syntheticDataSlice";

import type {
  DocumentDetails,
  DocumentListItem,
} from "services/documents/typing";

const DEFAULT_RECORDS_COUNT = 10;
const MIN_RECORDS_COUNT = 1;
const MAX_RECORDS_COUNT_FREE = 5;
const MAX_RECORDS_COUNT_PRO = 500;

export const useSyntheticGenerationSettings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { hasSyntheticData } = useFeatureAccess();
  const [isGenerating, setIsGenerating] = useState(false);
  const [proModalOpen, setProModalOpen] = useState(false);

  const maxRecordsCount = hasSyntheticData
    ? MAX_RECORDS_COUNT_PRO
    : MAX_RECORDS_COUNT_FREE;

  const documentId = useMemo(
    () => searchParams.get("documentId"),
    [searchParams],
  );

  const [documents, setDocuments] = useState<DocumentListItem[]>([]);
  const [selectedDocument, setSelectedDocument] =
    useState<DocumentDetails | null>(null);
  const [recordsCount, setRecordsCount] = useState(
    Math.min(DEFAULT_RECORDS_COUNT, maxRecordsCount),
  );
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);
  const [isLoadingDocument, setIsLoadingDocument] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    dispatch(resetSyntheticData());

    const loadData = async () => {
      try {
        setIsLoadingDocument(true);
        setError(null);

        if (documentId) {
          setIsPreviewExpanded(false);
          const response = await documentsService.getDocumentById(documentId);
          setSelectedDocument(response);
        } else {
          setSelectedDocument(null);
          setIsPreviewExpanded(false);
          const response = await documentsService.getDocuments({
            page: 1,
            limit: 20,
          });
          setDocuments(response.items);
        }
      } catch {
        setError("Failed to load source document");
      } finally {
        setIsLoadingDocument(false);
      }
    };

    loadData();
  }, [documentId]);

  const handleSelectDocument = (id: string) => {
    setSearchParams({ documentId: id });
  };

  const handleDecrease = () => {
    setRecordsCount((prev) => Math.max(MIN_RECORDS_COUNT, prev - 1));
  };

  const handleIncrease = () => {
    if (recordsCount >= maxRecordsCount && !hasSyntheticData) {
      setProModalOpen(true);
      return;
    }
    setRecordsCount((prev) => Math.min(maxRecordsCount, prev + 1));
  };

  const handleProModalClose = () => setProModalOpen(false);

  const handleGenerate = async () => {
    if (!selectedDocument) return;

    try {
      setIsGenerating(true);

      const response = await syntheticDataService.generate({
        documentId: selectedDocument.id,
        count: recordsCount,
      });

      dispatch(
        setSyntheticData({
          syntheticDocuments: response.syntheticDocuments,
          documentId: selectedDocument.id,
          recordsCount,
        }),
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    documents,
    selectedDocument,
    recordsCount,
    maxRecordsCount,
    isPreviewExpanded,
    isLoadingDocument,
    isGenerating,
    proModalOpen,
    error,
    setIsPreviewExpanded,
    handleSelectDocument,
    handleDecrease,
    handleIncrease,
    handleProModalClose,
    handleGenerate,
  };
};
