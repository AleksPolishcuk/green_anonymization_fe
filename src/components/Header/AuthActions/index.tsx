import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  AuthActionsRow,
  GetStartedButton,
} from "components/Header/AuthActions/styles";
import { ThemeToggle } from "components/ThemeToggle";
import { LanguageSwitcher } from "components/LanguageSwitcher";
import { headerI18nPrefix, headerRoutes } from "constants/MainPages";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { logout } from "store/slices/authSlice";
import { useCtaNavigate } from "shared/hooks/useCtaNavigate";

type AuthActionsProps = {
  compact?: boolean;
  onAction?: () => void;
};

export function AuthActions({ compact = false, onAction }: AuthActionsProps) {
  const { t } = useTranslation();
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

  return (
    <AuthActionsRow $isCompact={compact}>
      {!compact && <LanguageSwitcher />}
      {!compact && <ThemeToggle />}
      <GetStartedButton
        type="button"
        $isCompact={compact}
        $isLogout={isLoggedIn}
        onClick={isLoggedIn ? handleLogout : handleGetStartedClick}
      >
        {isLoggedIn
          ? t(`${headerI18nPrefix}.actions.logOut`)
          : t(`${headerI18nPrefix}.actions.getStarted`)}
      </GetStartedButton>
    </AuthActionsRow>
  );
}
