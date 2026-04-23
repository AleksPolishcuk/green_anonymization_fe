import * as yup from "yup";
import type { ContactFormValues } from "features/ContactForm/types";
import type { InputFormValues } from "components/Input/types";

const EMAIL_REGEX = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\+?[\d\s\-()]{7,}$/;

export const contactFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("contactUsPage.form.errors.firstNameRequired")
    .min(2, "contactUsPage.form.errors.firstNameMinLength")
    .max(50, "First name must not exceed 50 characters"),

  lastName: yup
    .string()
    .required("contactUsPage.form.errors.lastNameRequired")
    .min(2, "contactUsPage.form.errors.lastNameMinLength")
    .max(50, "Last name must not exceed 50 characters"),

  email: yup
    .string()
    .required("contactUsPage.form.errors.emailRequired")
    .matches(EMAIL_REGEX, "contactUsPage.form.errors.emailInvalid")
    .min(5, "Email is too short")
    .max(100, "Email is too long"),

  phoneNumber: yup
    .string()
    .required("contactUsPage.form.errors.phoneRequired")
    .matches(PHONE_REGEX, "contactUsPage.form.errors.phoneInvalid")
    .min(7, "Phone number is too short")
    .max(30, "contactUsPage.form.errors.phoneInvalid"),

  message: yup
    .string()
    .required("contactUsPage.form.errors.messageRequired")
    .min(10, "contactUsPage.form.errors.messageMinLength")
    .max(5000, "contactUsPage.form.errors.messageMaxLength"),
}) as yup.ObjectSchema<ContactFormValues>;

export const inputFormSchema = yup
  .object()
  .shape({
    text: yup
      .string()
      .nullable()
      .notRequired()
      .max(5000, "input.form.errors.messageMaxLength"),

    file: yup
      .mixed<File>()
      .nullable()
      .notRequired()
      .test("fileSize", "File is too large", (file) => {
        if (!file) return true;
        return file.size <= 50 * 1024 * 1024; // 50MB
      })
      .test("fileType", "Unsupported file format", (file) => {
        if (!file) return true;
        return [
          "text/plain",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/pdf",
        ].includes(file.type);
      }),
  })
  .test("text-or-file", "Provide either text or file", (values) => {
    return !!values?.text || !!values?.file;
  }) as yup.ObjectSchema<InputFormValues>;
