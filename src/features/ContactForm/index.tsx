import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

import { SendIcon } from "assets/icons/SendIcon";
import { useContactForm } from "./hooks/useContactForm";
import { EmailInfoCard } from "./components/EmailInfoCard";
import { PhoneField } from "./components/PhoneField";
import {
  ContactLayout,
  FieldLabel,
  FieldTextarea,
  FormCard,
  FormField,
  FormGrid,
  FormTitle,
  SubmitButton,
} from "./styles";

export const ContactForm = () => {
  const { t } = useTranslation();
  const { control, handleSubmit, onSubmit } = useContactForm();

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
                  <TextField
                    {...field}
                    placeholder={t("contactUsPage.form.firstNamePlaceholder")}
                  />
                )}
              />
            </FormField>
            <FormField>
              <FieldLabel>{t("contactUsPage.form.lastName")}</FieldLabel>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder={t("contactUsPage.form.lastNamePlaceholder")}
                  />
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
                <TextField
                  {...field}
                  type="email"
                  placeholder={t("contactUsPage.form.emailPlaceholder")}
                />
              )}
            />
          </FormField>

          <FormField>
            <FieldLabel>{t("contactUsPage.form.phoneNumber")}</FieldLabel>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneField
                  value={field.value}
                  onChange={field.onChange}
                  placeholder={t("contactUsPage.form.phonePlaceholder")}
                />
              )}
            />
          </FormField>

          <FormField>
            <FieldLabel>{t("contactUsPage.form.message")}</FieldLabel>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <FieldTextarea
                  {...field}
                  placeholder={t("contactUsPage.form.messagePlaceholder")}
                />
              )}
            />
          </FormField>

          <SubmitButton type="submit" variant="contained">
            {t("contactUsPage.form.submitButton")}
            <SendIcon />
          </SubmitButton>
        </form>
      </FormCard>
    </ContactLayout>
  );
};
