import { useCallback, useState } from "react";
import syntheticDataService from "../../../services/synthetic";
import { useAppSelector } from "../../../store/hooks";

const DEFAULT_FILE_EXTENSION = "pdf";

export const useSyntheticDataGeneratedDataset = () => {
  const [isLoading, setIsLoading] = useState(false);

  const syntheticDataDocuments = useAppSelector(
    (state) => state.syntheticData.syntheticDocuments,
  );

  const handleGenerateArchive = useCallback(async () => {
    setIsLoading(true);

    try {
      const syntheticTexts = syntheticDataDocuments.map(
        (doc) => doc.syntheticText,
      );

      const blob = await syntheticDataService.generateArchive({
        anonymizedTexts: syntheticTexts,
        extension: DEFAULT_FILE_EXTENSION,
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "synthetic_data.zip");
      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, handleGenerateArchive };
};

export default useSyntheticDataGeneratedDataset;
