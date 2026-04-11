import { useTranslation } from "react-i18next";

import {
  AuthActionsRow,
  GetStartedButton,
  SignInButton,
} from "components/Header/AuthActions/styles";
import { headerI18nPrefix } from "constants/header";

type AuthActionsProps = {
  compact?: boolean;
  onAction?: () => void;
};

export function AuthActions({ compact = false, onAction }: AuthActionsProps) {
  const { t } = useTranslation();

  return (
    <AuthActionsRow $isCompact={compact}>
      {!compact && (
        <SignInButton
          type="button"
          onClick={() => {
            onAction?.();
          }}
        >
          {t(`${headerI18nPrefix}.actions.signIn`)}
        </SignInButton>
      )}
      <GetStartedButton type="button" $isCompact={compact} onClick={onAction}>
        {t(`${headerI18nPrefix}.actions.getStarted`)}
      </GetStartedButton>
    </AuthActionsRow>
  );
}
