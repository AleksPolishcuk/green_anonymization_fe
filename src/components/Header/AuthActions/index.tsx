import { useTranslation } from "react-i18next";

import {
  AuthActionsRow,
  GetStartedButton,
  SignInLink,
} from "components/Header/AuthActions/styles";
import { headerI18nPrefix, headerRoutes } from "constants/header";

type AuthActionsProps = {
  compact?: boolean;
  onAction?: () => void;
};

export function AuthActions({ compact = false, onAction }: AuthActionsProps) {
  const { t } = useTranslation();

  return (
    <AuthActionsRow $isCompact={compact}>
      {!compact && (
        <SignInLink href={headerRoutes.signInHash} onClick={onAction}>
          {t(`${headerI18nPrefix}.actions.signIn`)}
        </SignInLink>
      )}
      <GetStartedButton type="button" $isCompact={compact} onClick={onAction}>
        {t(`${headerI18nPrefix}.actions.getStarted`)}
      </GetStartedButton>
    </AuthActionsRow>
  );
}
