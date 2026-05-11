import { useNavigate } from "react-router-dom";

import { headerRoutes } from "constants/MainPages";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { logout } from "store/slices/authSlice";
import { useCtaNavigate } from "shared/hooks/useCtaNavigate";

type UseAuthActionsParams = {
  onAction?: () => void;
};

export const useAuthActions = ({ onAction }: UseAuthActionsParams) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth?.user);

  const handleGetStartedClick = useCtaNavigate({
    target: headerRoutes.dashboard,
    beforeNavigate: onAction,
  });

  const handleLogout = () => {
    dispatch(logout());
    navigate(headerRoutes.home);
    onAction?.();
  };

  const isLoggedIn = Boolean(user);

  return { isLoggedIn, handleLogout, handleGetStartedClick };
};
