import { useEffect, useState } from "react";
import { complianceService } from "services/compliance";
import type {
  ComplianceFramework,
  ComplianceSelectionResponse,
} from "services/compliance/typing/compliance";

type UseComplianceFrameworkResult = {
  frameworks: ComplianceFramework[];
  selectedCode: string | null;
  loading: boolean;
  savingCode: string | null;
  handleSelect: (
    frameworkCode: string,
  ) => Promise<ComplianceSelectionResponse | null>;
};

export const useComplianceFramework = (): UseComplianceFrameworkResult => {
  const [frameworks, setFrameworks] = useState<ComplianceFramework[]>([]);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [savingCode, setSavingCode] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      try {
        const frameworksData = await complianceService.getFrameworks();
        setFrameworks(frameworksData);

        try {
          const selection = await complianceService.getSelection();
          setSelectedCode(selection.frameworkCode);
        } catch {
          setSelectedCode(null);
        }
      } finally {
        setLoading(false);
      }
    };

    void loadData();
  }, []);

  const handleSelect = async (
    frameworkCode: string,
  ): Promise<ComplianceSelectionResponse | null> => {
    if (savingCode || selectedCode === frameworkCode) {
      return null;
    }

    setSavingCode(frameworkCode);

    try {
      const result = await complianceService.selectFramework({ frameworkCode });
      setSelectedCode(result.frameworkCode);
      return result;
    } finally {
      setSavingCode(null);
    }
  };

  return {
    frameworks,
    selectedCode,
    loading,
    savingCode,
    handleSelect,
  };
};
