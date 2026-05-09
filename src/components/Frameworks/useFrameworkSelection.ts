import { useEffect } from "react";
import { complianceService } from "services/compliance";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setSelectedFramework } from "store/slices/documentSlice";

export const useFrameworkSelection = () => {
  const dispatch = useAppDispatch();

  const selectedFramework = useAppSelector((s) => s.document.selectedFramework);

  useEffect(() => {
    const fetchDefaultFramework = async () => {
      const response = await complianceService.getSelection();
      if (response.framework) {
        dispatch(setSelectedFramework(response.framework));
      }
    };

    fetchDefaultFramework();
  }, [dispatch]);

  const selectFramework = (framework: typeof selectedFramework) => {
    if (framework) {
      dispatch(setSelectedFramework(framework));
    }
  };

  return {
    selectedFramework,
    selectFramework,
  };
};
