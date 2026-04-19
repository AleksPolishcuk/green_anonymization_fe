import { headerRoutes } from "constants/header";
import { useCtaNavigate } from "shared/hooks/useCtaNavigate";

export const useReadyToProtect = () => {
  const handleGetStartedClick = useCtaNavigate({ target: headerRoutes.signIn });
  const handleContactSalesClick = useCtaNavigate({ target: "/contactus" });

  return {
    handleGetStartedClick,
    handleContactSalesClick,
  };
};
