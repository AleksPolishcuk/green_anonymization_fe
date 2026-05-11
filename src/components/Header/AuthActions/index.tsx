import { useTranslation } from "react-i18next";

import {
  AuthActionsRow,
  GetStartedButton,
} from "components/Header/AuthActions/styles";
import { ThemeToggle } from "components/ThemeToggle";
import { LanguageSwitcher } from "components/LanguageSwitcher";
import { headerI18nPrefix } from "constants/MainPages";
import { useAuthActions } from "components/Header/AuthActions/useAuthActions";

type AuthActionsProps = {
  compact?: boolean;
  onAction?: () => void;
};

export function AuthActions({ compact = false, onAction }: AuthActionsProps) {
  const { t } = useTranslation();
  const { isLoggedIn, handleLogout, handleGetStartedClick } = useAuthActions({
    onAction,
  });

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
