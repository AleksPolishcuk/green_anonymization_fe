import { headerI18nPrefix } from "components/Header/constants";
import {
  AuthActionsRow,
  GetStartedButton,
  SignInLink,
} from "components/Header/components/AuthActions/styles";
import { useTranslation } from "react-i18next";

type AuthActionsProps = {
  compact?: boolean;
  onAction?: () => void;
};

export function AuthActions({ compact = false, onAction }: AuthActionsProps) {
  const { t } = useTranslation();

  return (
    <AuthActionsRow $isCompact={compact}>
      {!compact && (
        <SignInLink href="#sign-in" onClick={onAction}>
          {t(`${headerI18nPrefix}.actions.signIn`)}
        </SignInLink>
      )}
      <GetStartedButton type="button" $isCompact={compact} onClick={onAction}>
        {t(`${headerI18nPrefix}.actions.getStarted`)}
      </GetStartedButton>
    </AuthActionsRow>
  );
}
