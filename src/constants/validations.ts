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

export const signInSchema = yup.object({
  email: yup
    .string()
    .required("signIn.form.status.emailRequired")
    .matches(EMAIL_REGEX, "signIn.form.status.emailInvalid")
    .min(5, "signIn.form.status.emailTooShort")
    .max(100, "signIn.form.status.emailTooLong"),
});

export const registerSchema = yup.object({
  firstName: yup
    .string()
    .required("register.form.errors.firstNameRequired")
    .min(2, "register.form.errors.firstNameMinLength")
    .max(200, "register.form.errors.firstNameMaxLength"),

  lastName: yup
    .string()
    .required("register.form.errors.lastNameRequired")
    .min(2, "register.form.errors.lastNameMinLength")
    .max(200, "register.form.errors.lastNameMaxLength"),

  companyName: yup
    .string()
    .required("register.form.errors.companyRequired")
    .max(500, "register.form.errors.companyMaxLength"),
});

export const inputFormSchema = yup.object({
  text: yup
    .string()
    .nullable()
    .transform((v) => (v?.trim() === "" ? null : v))
    .when("file", {
      is: (file: File | null) => !file,
      then: (schema) =>
        schema
          .required("input.form.errors.required")
          .max(5000, "input.form.errors.messageMaxLength"),
      otherwise: (schema) => schema.nullable(),
    }),

  file: yup.mixed<File>().nullable(),
}) as yup.ObjectSchema<InputFormValues>;
