import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HOME_ROUTE = "/";

type UseNotFoundResult = {
  handleGoHome: () => void;
};

export const useNotFound = (): UseNotFoundResult => {
  const navigate = useNavigate();

  const handleGoHome = useCallback(() => {
    navigate(HOME_ROUTE);
  }, [navigate]);

  return { handleGoHome };
};
