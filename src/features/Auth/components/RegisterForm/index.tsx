import { InputAdornment } from "@mui/material";
import { CompanyIcon } from "assets/icons/auth/CompanyIcon";
import { PersonIcon } from "assets/icons/auth/PersonIcon";
import { RightArrowIcon } from "assets/icons/auth/RightArrowIcon";
import type { useRegisterForm } from "features/Auth/hooks/useRegisterForm";
import { Controller } from "react-hook-form";
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
} from "../EmailStatus/styles";
import {
  RegisterHeading,
  RegisterFormBox,
  NamesRow,
  FieldWrapper,
  NameLabel,
  CompanyRow,
  RegisterButton,
} from "./styles";
import { useTranslation } from "react-i18next";
import { FormInputField } from "../styles";

type Props = {
  form: ReturnType<typeof useRegisterForm>;
};

export default function RegisterForm({ form }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <RegisterHeading> {t("register.heading")}</RegisterHeading>
      <RegisterFormBox>
        <form onSubmit={form.handleSubmit(form.onSubmit)} noValidate>
          <NamesRow>
            <FieldWrapper>
              <NameLabel htmlFor="firstName">
                {t("register.form.firstNameLabel")}
              </NameLabel>
              <Controller
                name="firstName"
                control={form.control}
                defaultValue=""
                rules={{ required: t("register.form.firstNameRequired") }}
                render={({ field }) => (
                  <FormInputField
                    {...field}
                    id="firstName"
                    fullWidth
                    type="text"
                    placeholder={t("register.form.firstNamePlaceholder")}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      },
                      htmlInput: {
                        autoComplete: "given-name",
                      },
                    }}
                  />
                )}
              />
            </FieldWrapper>

            <FieldWrapper>
              <NameLabel htmlFor="lastName">
                {t("register.form.lastNameLabel")}
              </NameLabel>
              <Controller
                name="lastName"
                control={form.control}
                defaultValue=""
                rules={{ required: t("register.form.lastNameRequired") }}
                render={({ field }) => (
                  <FormInputField
                    {...field}
                    id="lastName"
                    fullWidth
                    type="text"
                    placeholder={t("register.form.lastNamePlaceholder")}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      },
                      htmlInput: {
                        autoComplete: "family-name",
                      },
                    }}
                  />
                )}
              />
            </FieldWrapper>
          </NamesRow>

          <CompanyRow>
            <NameLabel htmlFor="companyName">
              {t("register.form.companyLabel")}
            </NameLabel>
            <Controller
              name="companyName"
              control={form.control}
              defaultValue=""
              rules={{ required: t("register.form.companyRequired") }}
              render={({ field }) => (
                <FormInputField
                  {...field}
                  id="companyName"
                  fullWidth
                  type="text"
                  placeholder={t("register.form.companyPlaceholder")}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <CompanyIcon />
                        </InputAdornment>
                      ),
                    },
                    htmlInput: {
                      autoComplete: "organization",
                    },
                  }}
                />
              )}
            />
          </CompanyRow>
          <RegisterButton type="submit" fullWidth>
            {t("register.form.submitButton")} <RightArrowIcon />
          </RegisterButton>
        </form>
        {form.loading && <Loader />}
        {!form.loading && form.message && (
          <EmailSentMsg>
            <StatusIconWrapper>
              <SuccessStatusIcon />
            </StatusIconWrapper>
            <StatusContent>
              <StatusTitleText>
                {t("register.status.successTitle")}
              </StatusTitleText>
              <SuccessStatusDescriptionText>
                {t("register.status.successDescription")}
              </SuccessStatusDescriptionText>
            </StatusContent>
          </EmailSentMsg>
        )}

        {!form.loading && !form.message && form.error && (
          <EmailSentMsg aria-live="polite">
            <StatusIconWrapper>
              <ErrorStatusIcon />
            </StatusIconWrapper>
            <StatusContent>
              <StatusTitleText>
                {t("register.status.errorTitle")}
              </StatusTitleText>
              <ErrorStatusDescriptionText>
                {t("register.status.errorDescription")} {form.error}
              </ErrorStatusDescriptionText>
            </StatusContent>
          </EmailSentMsg>
        )}
      </RegisterFormBox>
    </>
  );
}
