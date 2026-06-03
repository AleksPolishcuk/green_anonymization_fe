import { InputAdornment } from "@mui/material";
import { useRegisterForm } from "components/Auth/RegisterForm/useRegisterForm";
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
} from "components/Auth/EmailStatus/styles";
import {
  RegisterHeading,
  RegisterFormBox,
  NamesRow,
  FieldWrapper,
  NameLabel,
  CompanyRow,
  CompanyIcon,
  PersonIcon,
} from "./styles";
import { useTranslation } from "react-i18next";
import {
  FormInputField,
  GoHomeButton,
  HomeArrowIconWrapper,
  RightArrowIcon,
  SubmitButton,
} from "components/Auth/styles";
import { headerSpriteRef } from "constants/MainPages";

export default function RegisterForm() {
  const { t } = useTranslation();

  const form = useRegisterForm();

  return (
    <>
      <GoHomeButton to="/">
        <HomeArrowIconWrapper viewBox="0 0 32 32" aria-hidden="true">
          <use href={headerSpriteRef("icon-IconArrow")} />
        </HomeArrowIconWrapper>
        Home
      </GoHomeButton>

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
                render={({ field }) => (
                  <FormInputField
                    {...field}
                    id="firstName"
                    fullWidth
                    type="text"
                    placeholder={t("register.form.firstNamePlaceholder")}
                    error={!!form.formState.errors.firstName}
                    helperText={form.formState.errors.firstName?.message || ""}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon>
                              <use href={headerSpriteRef("person-icon")} />
                            </PersonIcon>
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
                render={({ field }) => (
                  <FormInputField
                    {...field}
                    id="lastName"
                    fullWidth
                    type="text"
                    placeholder={t("register.form.lastNamePlaceholder")}
                    error={!!form.formState.errors.lastName}
                    helperText={form.formState.errors.lastName?.message || ""}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon>
                              <use href={headerSpriteRef("person-icon")} />
                            </PersonIcon>
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
              render={({ field }) => (
                <FormInputField
                  {...field}
                  id="companyName"
                  fullWidth
                  type="text"
                  placeholder={t("register.form.companyPlaceholder")}
                  error={!!form.formState.errors.companyName}
                  helperText={form.formState.errors.companyName?.message || ""}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <CompanyIcon>
                            <use href={headerSpriteRef("person-icon")} />
                          </CompanyIcon>
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
          </CompanyRow>
          <SubmitButton
            type="submit"
            disabled={form.isSubmitDisabled}
            fullWidth
          >
            <span>{t("register.form.submitButton")}</span>
            <RightArrowIcon>
              <use href={headerSpriteRef("right-arrow-icon")} />
            </RightArrowIcon>
          </SubmitButton>
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
