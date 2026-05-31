import { InputAdornment } from "@mui/material";
import { useEmailLoginForm } from "components/Auth/SignInForm/useEmailLoginForm";
import { Controller } from "react-hook-form";
import {
  SigninHeading,
  SigninSubtext,
  SigninFormBox,
  EmailLabel,
  BottomText,
  BottomLinkText,
  EmailIcon,
  OAuthButton,
  OAuthButtonContent,
  OAuthProviderIcon,
} from "./styles";
import EmailStatus from "components/Auth/EmailStatus";
import { Trans, useTranslation } from "react-i18next";
import {
  FormInputField,
  RightArrowIcon,
  SubmitButton,
} from "components/Auth/styles";
import { headerSpriteRef } from "constants/MainPages";

export default function SignInForm() {
  const { t } = useTranslation();
  const form = useEmailLoginForm();

  return (
    <>
      <SigninHeading>{t("signIn.form.heading")}</SigninHeading>

      <SigninSubtext variant="body1">{t("signIn.form.subtext")}</SigninSubtext>

      <SigninFormBox>
        <form onSubmit={form.handleSubmit(form.onSubmit)} noValidate>
          <EmailLabel htmlFor="signin-email">
            {t("signIn.form.emailLabel")}
          </EmailLabel>
          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormInputField
                {...field}
                id="signin-email"
                fullWidth
                type="email"
                placeholder={t("signIn.form.emailPlaceholder")}
                error={!!form.formState.errors.email}
                helperText={form.formState.errors.email?.message || ""}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon>
                          <use href={headerSpriteRef("email-icon")} />
                        </EmailIcon>
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
          <SubmitButton
            type="submit"
            disabled={form.isSubmitDisabled}
            fullWidth
          >
            <span>{t("signIn.form.submitButton")}</span>
            <RightArrowIcon>
              <use href={headerSpriteRef("right-arrow-icon")} />
            </RightArrowIcon>
          </SubmitButton>
        </form>
        <OAuthButton type="button" fullWidth onClick={form.handleGoogleSubmit}>
          <OAuthProviderIcon>
            <use href={headerSpriteRef("google")} />
          </OAuthProviderIcon>

          <OAuthButtonContent>
            {t("signIn.form.submitGoogle")}
          </OAuthButtonContent>
        </OAuthButton>

        <OAuthButton
          type="button"
          fullWidth
          onClick={form.handleMicrosoftSubmit}
        >
          <OAuthProviderIcon>
            <use href={headerSpriteRef("microsoft")} />
          </OAuthProviderIcon>

          <OAuthButtonContent>
            {t("signIn.form.submitMicrosoft")}
          </OAuthButtonContent>
        </OAuthButton>

        <EmailStatus form={form} />
      </SigninFormBox>

      {!form.loading && !form.status && !form.error && (
        <BottomText>
          <Trans
            i18nKey={t("signIn.form.bottomText")}
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
