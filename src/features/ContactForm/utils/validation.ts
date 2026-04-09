import { EMAIL_REGEX, PHONE_REGEX } from "constants";
import {
  sanitizeInput,
  isValidLength,
  FIELD_CONSTRAINTS,
} from "shared/utils/sanitize";
import type { ContactFormValues } from "../types";

export type ValidationRule = {
  validate: (value: string) => boolean | string;
  errorKey: string;
};

export type FieldValidationConfig = Record<
  keyof ContactFormValues,
  ValidationRule[]
>;

const createLengthRule = (
  field: keyof typeof FIELD_CONSTRAINTS,
  errorKey: string,
): ValidationRule => ({
  validate: (value: string) => {
    const sanitized = sanitizeInput(value);
    if (
      !isValidLength(
        sanitized,
        FIELD_CONSTRAINTS[field].min,
        FIELD_CONSTRAINTS[field].max,
      )
    ) {
      if (sanitized.length < FIELD_CONSTRAINTS[field].min) {
        return `${field}MinLength`;
      }
      return `${field}MaxLength`;
    }
    return true;
  },
  errorKey,
});

export const VALIDATION_CONFIG: FieldValidationConfig = {
  firstName: [
    {
      validate: (value) =>
        sanitizeInput(value).length > 0 || "firstNameRequired",
      errorKey: "firstNameRequired",
    },
    createLengthRule("firstName", "firstNameMinLength"),
  ],
  lastName: [
    {
      validate: (value) =>
        sanitizeInput(value).length > 0 || "lastNameRequired",
      errorKey: "lastNameRequired",
    },
    createLengthRule("lastName", "lastNameMinLength"),
  ],
  email: [
    {
      validate: (value) => sanitizeInput(value).length > 0 || "emailRequired",
      errorKey: "emailRequired",
    },
    {
      validate: (value) =>
        EMAIL_REGEX.test(sanitizeInput(value)) || "emailInvalid",
      errorKey: "emailInvalid",
    },
    createLengthRule("email", "emailInvalid"),
  ],
  phoneNumber: [
    {
      validate: (value) => sanitizeInput(value).length > 0 || "phoneRequired",
      errorKey: "phoneRequired",
    },
    {
      validate: (value) =>
        PHONE_REGEX.test(sanitizeInput(value)) || "phoneInvalid",
      errorKey: "phoneInvalid",
    },
    createLengthRule("phoneNumber", "phoneInvalid"),
  ],
  message: [
    {
      validate: (value) => sanitizeInput(value).length > 0 || "messageRequired",
      errorKey: "messageRequired",
    },
    {
      validate: (value) => {
        const sanitized = sanitizeInput(value);
        if (sanitized.length < FIELD_CONSTRAINTS.message.min) {
          return "messageMinLength";
        }
        if (sanitized.length > FIELD_CONSTRAINTS.message.max) {
          return "messageMaxLength";
        }
        return true;
      },
      errorKey: "messageMinLength",
    },
  ],
};

export const validateField = (
  field: keyof ContactFormValues,
  value: string,
): string | null => {
  const rules = VALIDATION_CONFIG[field];

  for (const rule of rules) {
    const result = rule.validate(value);
    if (result !== true) {
      return result as string;
    }
  }

  return null;
};

export const validateFormData = (
  data: ContactFormValues,
): Record<string, string> => {
  const errors: Record<string, string> = {};

  (Object.keys(VALIDATION_CONFIG) as Array<keyof ContactFormValues>).forEach(
    (field) => {
      const error = validateField(field, data[field]);
      if (error) {
        errors[field] = error;
      }
    },
  );

  return errors;
};

export const sanitizeFormData = (
  data: ContactFormValues,
): ContactFormValues => ({
  firstName: sanitizeInput(data.firstName),
  lastName: sanitizeInput(data.lastName),
  email: sanitizeInput(data.email),
  phoneNumber: sanitizeInput(data.phoneNumber),
  message: sanitizeInput(data.message),
});
