import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useReadyToProtect = () => {
  const navigate = useNavigate();

  const handleContactSalesClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  return {
    handleContactSalesClick,
  };
};
