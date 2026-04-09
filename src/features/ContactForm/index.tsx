import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

import { SendIcon } from "assets/icons/SendIcon";
import { useContactForm } from "./useContactForm";
import { EmailInfoCard } from "./EmailInfoCard";
import { PhoneField } from "./PhoneField";
import {
  ContactLayout,
  FieldLabel,
  FormCard,
  FormField,
  FormGrid,
  FormTitle,
  SubmitButton,
  ErrorMessage,
  ErrorMessageContainer,
  PhoneInputWrapperError,
  FieldTextareaError,
  FormAlert,
  FormResultContainer,
  SendIconWrapper,
} from "./styles";

export const ContactForm = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState,
    onSubmit,
    isSubmitting,
    submitError,
    submitSuccess,
  } = useContactForm();
  const { errors } = formState;

  return (
    <ContactLayout>
      <EmailInfoCard />

      <FormCard>
        <FormTitle>{t("contactUsPage.form.title")}</FormTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGrid>
            <FormField>
              <FieldLabel>{t("contactUsPage.form.firstName")}</FieldLabel>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      placeholder={t("contactUsPage.form.firstNamePlaceholder")}
                      error={!!errors.firstName}
                      disabled={isSubmitting}
                    />
                    <ErrorMessageContainer>
                      {errors.firstName && (
                        <ErrorMessage>{errors.firstName.message}</ErrorMessage>
                      )}
                    </ErrorMessageContainer>
                  </>
                )}
              />
            </FormField>
            <FormField>
              <FieldLabel>{t("contactUsPage.form.lastName")}</FieldLabel>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      placeholder={t("contactUsPage.form.lastNamePlaceholder")}
                      error={!!errors.lastName}
                      disabled={isSubmitting}
                    />
                    <ErrorMessageContainer>
                      {errors.lastName && (
                        <ErrorMessage>{errors.lastName.message}</ErrorMessage>
                      )}
                    </ErrorMessageContainer>
                  </>
                )}
              />
            </FormField>
          </FormGrid>

          <FormField>
            <FieldLabel>{t("contactUsPage.form.email")}</FieldLabel>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    type="email"
                    placeholder={t("contactUsPage.form.emailPlaceholder")}
                    error={!!errors.email}
                    disabled={isSubmitting}
                  />
                  <ErrorMessageContainer>
                    {errors.email && (
                      <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                  </ErrorMessageContainer>
                </>
              )}
            />
          </FormField>

          <FormField>
            <FieldLabel>{t("contactUsPage.form.phoneNumber")}</FieldLabel>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <>
                  <PhoneInputWrapperError $hasError={!!errors.phoneNumber}>
                    <PhoneField
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={t("contactUsPage.form.phonePlaceholder")}
                      disabled={isSubmitting}
                    />
                  </PhoneInputWrapperError>
                  <ErrorMessageContainer>
                    {errors.phoneNumber && (
                      <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
                    )}
                  </ErrorMessageContainer>
                </>
              )}
            />
          </FormField>

          <FormField>
            <FieldLabel>{t("contactUsPage.form.message")}</FieldLabel>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <>
                  <FieldTextareaError
                    {...field}
                    $hasError={!!errors.message}
                    placeholder={t("contactUsPage.form.messagePlaceholder")}
                    disabled={isSubmitting}
                  />
                  <ErrorMessageContainer>
                    {errors.message && (
                      <ErrorMessage>{errors.message.message}</ErrorMessage>
                    )}
                  </ErrorMessageContainer>
                </>
              )}
            />
          </FormField>

          <SubmitButton
            type="submit"
            variant="contained"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("contactUsPage.form.submitting")
              : t("contactUsPage.form.submitButton")}
            <SendIconWrapper $isSubmitting={isSubmitting}>
              <SendIcon />
            </SendIconWrapper>
          </SubmitButton>
        </form>

        <FormResultContainer>
          {submitError && <FormAlert $type="error">{submitError}</FormAlert>}
          {submitSuccess && (
            <FormAlert $type="success">
              {t("contactUsPage.form.success")}
            </FormAlert>
          )}
        </FormResultContainer>
      </FormCard>
    </ContactLayout>
  );
};
