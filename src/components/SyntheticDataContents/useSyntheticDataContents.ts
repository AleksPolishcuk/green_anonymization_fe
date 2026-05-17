import { useMemo, useState } from "react";

import { syntheticDataService } from "services/synthetic";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { setSyntheticData } from "store/slices/syntheticDataSlice";
export const useSyntheticDataContents = () => {
  const dispatch = useAppDispatch();

  const { syntheticDocuments, documentId, recordsCount } = useAppSelector(
    (state) => state.syntheticData,
  );

  const [isLoading, setIsLoading] = useState(false);

  const anonymizedTexts = useMemo(() => {
    return syntheticDocuments.map((doc) => doc.syntheticText);
  }, [syntheticDocuments]);

  const handleRegenerate = async () => {
    if (!documentId) return;

    try {
      setIsLoading(true);

      const response = await syntheticDataService.generate({
        documentId,
        count: recordsCount,
      });

      dispatch(
        setSyntheticData({
          syntheticDocuments: response.syntheticDocuments,
          documentId,
          recordsCount,
        }),
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (extension: "txt" | "pdf" | "docx") => {
    if (!anonymizedTexts.length) return;

    try {
      setIsLoading(true);

      const blob = await syntheticDataService.download({
        documentId: documentId!,
        anonymizedTexts,
        extension,
      });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `synthetic-data.zip`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(url);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    syntheticDocuments,
    isLoading,
    handleRegenerate,
    handleDownload,
  };
};
