import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { documentsService } from "services/documents";
import { syntheticDataService } from "services/synthetic";
import { useFeatureAccess } from "shared/hooks/useFeatureAccess";
import { useAppDispatch } from "store/hooks";
import { setSyntheticData } from "store/slices/syntheticDataSlice";

import type {
  DocumentDetails,
  DocumentListItem,
} from "services/documents/typing";

const DEFAULT_RECORDS_COUNT = 10;
const MIN_RECORDS_COUNT = 1;
const MAX_RECORDS_COUNT_FREE = 5;
const MAX_RECORDS_COUNT_PRO = 500;
const DOCUMENTS_PAGE_LIMIT = 10;

export const useSyntheticGenerationSettings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { hasSyntheticData } = useFeatureAccess();

  const [documents, setDocuments] = useState<DocumentListItem[]>([]);
  const [documentsPage, setDocumentsPage] = useState(1);
  const [documentsTotal, setDocumentsTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [selectedDocument, setSelectedDocument] =
    useState<DocumentDetails | null>(null);

  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);

  const [isLoadingDocument, setIsLoadingDocument] = useState(false);

  const [isGenerating, setIsGenerating] = useState(false);

  const [proModalOpen, setProModalOpen] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const maxRecordsCount = hasSyntheticData
    ? MAX_RECORDS_COUNT_PRO
    : MAX_RECORDS_COUNT_FREE;

  const [recordsCount, setRecordsCount] = useState<number | "">(
    Math.min(DEFAULT_RECORDS_COUNT, maxRecordsCount),
  );

  const documentId = useMemo(
    () => searchParams.get("documentId"),
    [searchParams],
  );

  const documentsTotalPages = Math.ceil(documentsTotal / DOCUMENTS_PAGE_LIMIT);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoadingDocument(true);
        setError(null);

        if (documentId) {
          setIsPreviewExpanded(false);

          const response = await documentsService.getDocumentById(documentId);

          setSelectedDocument(response);

          return;
        }

        setSelectedDocument(null);
        setIsPreviewExpanded(false);

        const response = await documentsService.getDocuments({
          page: documentsPage,
          limit: DOCUMENTS_PAGE_LIMIT,
          search: debouncedSearch,
        });

        setDocuments(response.items);
        setDocumentsTotal(response.total);
      } catch {
        setError("Failed to load source document");
      } finally {
        setIsLoadingDocument(false);
      }
    };

    void loadData();
  }, [documentId, documentsPage, debouncedSearch]);

  const handleSelectDocument = (id: string) => {
    setSearchParams({
      documentId: id,
    });
  };

  const handleDocumentsPageChange = (_: unknown, value: number) => {
    setDocumentsPage(value);
  };

  const handleDecrease = () => {
    setRecordsCount((prev) => {
      const value = prev === "" ? MIN_RECORDS_COUNT : prev;

      return Math.max(MIN_RECORDS_COUNT, value - 1);
    });
  };

  const handleIncrease = () => {
    const value = recordsCount === "" ? MIN_RECORDS_COUNT : recordsCount;

    if (value >= maxRecordsCount && !hasSyntheticData) {
      setProModalOpen(true);
      return;
    }

    setRecordsCount((prev) => {
      const current = prev === "" ? MIN_RECORDS_COUNT : prev;

      return Math.min(maxRecordsCount, current + 1);
    });
  };

  const handleProModalClose = () => setProModalOpen(false);

  const handleGenerate = async () => {
    if (!selectedDocument) return;

    try {
      setIsGenerating(true);

      const response = await syntheticDataService.generate({
        documentId: selectedDocument.id,
        count: recordsCount === "" ? MIN_RECORDS_COUNT : recordsCount,
      });

      dispatch(
        setSyntheticData({
          syntheticDocuments: response.syntheticDocuments,
          documentId: selectedDocument.id,
          recordsCount: recordsCount === "" ? MIN_RECORDS_COUNT : recordsCount,
        }),
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRecordsCountChange = (value: string) => {
    if (value === "") {
      setRecordsCount("");
      return;
    }

    const numericValue = Number(value);

    if (!Number.isInteger(numericValue)) {
      return;
    }

    if (numericValue > maxRecordsCount) {
      setRecordsCount(maxRecordsCount);
      return;
    }

    setRecordsCount(numericValue);
  };

  const handleRecordsCountBlur = () => {
    const numericValue = recordsCount === "" ? MIN_RECORDS_COUNT : recordsCount;

    const normalized = Math.min(
      Math.max(numericValue, MIN_RECORDS_COUNT),
      maxRecordsCount,
    );

    setRecordsCount(normalized);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setDocumentsPage(1);
  };

  return {
    documents,
    documentsPage,
    documentsTotalPages,
    search,
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
    handleDocumentsPageChange,
    handleDecrease,
    handleIncrease,
    handleProModalClose,
    handleGenerate,
    handleRecordsCountChange,
    handleRecordsCountBlur,
    handleSearchChange,
  };
};
