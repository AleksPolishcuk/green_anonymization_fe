import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { documentsService } from "services/documents";

import type {
  DocumentDetails,
  DocumentListItem,
} from "services/documents/typing";

const DEFAULT_RECORDS_COUNT = 10;
const MIN_RECORDS_COUNT = 1;
const MAX_RECORDS_COUNT = 10000;

export const useSyntheticGenerationSettings = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const documentId = useMemo(
    () => searchParams.get("documentId"),
    [searchParams],
  );

  const [documents, setDocuments] = useState<DocumentListItem[]>([]);

  const [selectedDocument, setSelectedDocument] =
    useState<DocumentDetails | null>(null);

  const [recordsCount, setRecordsCount] = useState(DEFAULT_RECORDS_COUNT);

  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);

  const [isLoadingDocument, setIsLoadingDocument] = useState(false);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    setRecordsCount((prev) => Math.min(MAX_RECORDS_COUNT, prev + 1));
  };

  const handleGenerate = () => {
    if (!selectedDocument) return;

    console.log({
      documentId: selectedDocument.id,
      count: recordsCount,
    });
  };

  return {
    documents,
    selectedDocument,
    recordsCount,
    isPreviewExpanded,
    isLoadingDocument,
    error,
    setIsPreviewExpanded,
    setRecordsCount,
    handleSelectDocument,
    handleDecrease,
    handleIncrease,
    handleGenerate,
  };
};
