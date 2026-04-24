import { useTranslation } from "react-i18next";

import {
  AuthActionsRow,
  GetStartedButton,
} from "components/Header/AuthActions/styles";
import { headerI18nPrefix, headerRoutes } from "constants/header";
import { useCtaNavigate } from "shared/hooks/useCtaNavigate";
import { ThemeToggle } from "components/ThemeToggle";

type AuthActionsProps = {
  compact?: boolean;
  onAction?: () => void;
};

export function AuthActions({ compact = false, onAction }: AuthActionsProps) {
  const { t } = useTranslation();
  const handleGetStartedClick = useCtaNavigate({
    target: headerRoutes.signIn,
    beforeNavigate: onAction,
  });

  return (
    <AuthActionsRow $isCompact={compact}>
      <ThemeToggle />
      <GetStartedButton
        type="button"
        $isCompact={compact}
        onClick={handleGetStartedClick}
      >
        {t(`${headerI18nPrefix}.actions.getStarted`)}
      </GetStartedButton>
    </AuthActionsRow>
  );
}
