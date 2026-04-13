import { InputAdornment } from "@mui/material";
import { RightArrowIcon } from "assets/icons/auth/RightArrowIcon";
import { EmailIcon } from "assets/icons/EmailIcon";
import type { useEmailLoginForm } from "features/Auth/hooks/useEmailLoginForm";
import { Controller } from "react-hook-form";
import {
  SigninHeading,
  SigninSubtext,
  SigninFormBox,
  EmailLabel,
  SigninBtn,
  BottomText,
  BottomLinkText,
} from "./styles";
import EmailStatus from "../EmailStatus";
import { Trans, useTranslation } from "react-i18next";
import { FormInputField } from "constants/auth";

type Props = {
  form: ReturnType<typeof useEmailLoginForm>;
};

export default function SignInForm({ form }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <SigninHeading>{t("signIn.heading")}</SigninHeading>

      <SigninSubtext variant="body1">{t("signIn.subtext")}</SigninSubtext>

      <SigninFormBox>
        <form onSubmit={form.handleSubmit(form.onSubmit)} noValidate>
          <EmailLabel htmlFor="signin-email">
            {t("signIn.emailLabel")}
          </EmailLabel>

          <Controller
            name="email"
            control={form.control}
            defaultValue=""
            rules={{ required: t("signIn.validation.required") }}
            render={({ field }) => (
              <FormInputField
                {...field}
                id="signin-email"
                fullWidth
                type="email"
                placeholder={t("signIn.emailPlaceholder")}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  },
                  htmlInput: {
                    autoComplete: "email",
                  },
                }}
              />
            )}
          />

          <SigninBtn type="submit" fullWidth>
            {t("signIn.submitButton")}
            <RightArrowIcon />
          </SigninBtn>
        </form>

        <EmailStatus form={form} />
      </SigninFormBox>

      {!form.loading && !form.status && !form.error && (
        <BottomText>
          <Trans
            i18nKey={t("signIn.bottomText")}
            components={{
              terms: <BottomLinkText as="span" />,
              privacy: <BottomLinkText as="span" />,
            }}
          />
        </BottomText>
      )}
    </>
  );
}
