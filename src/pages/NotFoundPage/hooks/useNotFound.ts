import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HOME_ROUTE = "/";
const PREVIOUS_PAGE_OFFSET = -1;

type UseNotFoundResult = {
  handleGoHome: () => void;
  handleGoBack: () => void;
};

export const useNotFound = (): UseNotFoundResult => {
  const navigate = useNavigate();

  const handleGoHome = useCallback(() => {
    navigate(HOME_ROUTE);
  }, [navigate]);

  const handleGoBack = useCallback(() => {
    navigate(PREVIOUS_PAGE_OFFSET);
  }, [navigate]);

  return {
    handleGoHome,
    handleGoBack,
  };
};
