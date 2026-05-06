import { Fade } from "@mui/material";
import { Loader } from "shared/ui/Loader";
import {
  EmailSentMsg,
  StatusIconWrapper,
  SuccessStatusIcon,
  StatusContent,
  StatusTitleText,
  SuccessStatusDescriptionText,
  ErrorStatusIcon,
  ErrorStatusDescriptionText,
} from "./styles";
import type { useEmailLoginForm } from "features/Auth/hooks/useEmailLoginForm";
import { useTranslation } from "react-i18next";
import { headerSpriteRef } from "constants/MainPages";

type Props = {
  form: ReturnType<typeof useEmailLoginForm>;
};

export default function EmailStatus({ form }: Props) {
  const { t } = useTranslation();
  return (
    <>
      {form.loading && <Loader />}
      <Fade in={!form.loading && !!form.status} timeout={300} unmountOnExit>
        <EmailSentMsg aria-live="polite">
          <StatusIconWrapper>
            <SuccessStatusIcon>
              <use href={headerSpriteRef("ok-checkmark-icon")} />
            </SuccessStatusIcon>
          </StatusIconWrapper>
          <StatusContent>
            <StatusTitleText variant="h6">
              {t("signIn.form.status.successTitle")}
            </StatusTitleText>
            <SuccessStatusDescriptionText variant="body2">
              {t("signIn.form.status.successDescription")}
            </SuccessStatusDescriptionText>
          </StatusContent>
        </EmailSentMsg>
      </Fade>

      <Fade
        in={!form.loading && !form.status && !!form.error}
        timeout={900}
        unmountOnExit
      >
        <EmailSentMsg aria-live="polite">
          <StatusIconWrapper>
            <ErrorStatusIcon />
          </StatusIconWrapper>
          <StatusContent>
            <StatusTitleText variant="h6">
              {t("signIn.form.status.errorTitle")}
            </StatusTitleText>
            <ErrorStatusDescriptionText variant="body2">
              {t("signIn.form.status.errorDescription", {
                error: form.error ?? "",
              })}
            </ErrorStatusDescriptionText>
          </StatusContent>
        </EmailSentMsg>
      </Fade>
    </>
  );
}
