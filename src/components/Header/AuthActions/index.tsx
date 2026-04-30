import { useTranslation } from "react-i18next";

import {
  AuthActionsRow,
  GetStartedButton,
} from "components/Header/AuthActions/styles";

import { useCtaNavigate } from "shared/hooks/useCtaNavigate";
import { ThemeToggle } from "components/ThemeToggle";
import { headerI18nPrefix, headerRoutes } from "constants/MainPages";

type AuthActionsProps = {
  compact?: boolean;
  onAction?: () => void;
};

export function AuthActions({ compact = false, onAction }: AuthActionsProps) {
  const { t } = useTranslation();
  const handleGetStartedClick = useCtaNavigate({
    target: headerRoutes.dashboard,
    beforeNavigate: onAction,
  });

  return (
    <AuthActionsRow $isCompact={compact}>
      {!compact && <ThemeToggle />}
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
