import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { headerRoutes } from "constants/MainPages";
import {
  CARD_NUMBER_REGEX,
  CVV_REGEX,
  EXPIRY_REGEX,
  MASTERCARD_PREFIX_REGEX,
  PAYMENT_CARD_NUMBER_LENGTH,
  PAYMENT_EXPIRY_CENTURY_BASE,
  PAYMENT_EXPIRY_DIGITS,
  PAYMENT_SUCCESS_REDIRECT_DELAY,
  VISA_PREFIX_REGEX,
} from "constants/PaymentModal";
import { useAppDispatch } from "store/hooks";
import { selectPlan } from "store/slices/pricingSlice";

export type PaymentFormValues = {
  cardholderName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

type CardType = "visa" | "mastercard" | null;

const buildSchema = (t: (key: string) => string) =>
  yup.object({
    cardholderName: yup
      .string()
      .required(t("paymentModal.errors.nameRequired"))
      .min(2, t("paymentModal.errors.nameMinLength")),
    cardNumber: yup
      .string()
      .required(t("paymentModal.errors.cardRequired"))
      .transform((v: string) => v.replace(/\s/g, ""))
      .matches(CARD_NUMBER_REGEX, t("paymentModal.errors.cardInvalid")),
    expiry: yup
      .string()
      .required(t("paymentModal.errors.expiryRequired"))
      .matches(EXPIRY_REGEX, t("paymentModal.errors.expiryInvalid"))
      .test("not-expired", t("paymentModal.errors.expiryExpired"), (value) => {
        if (!value || !EXPIRY_REGEX.test(value)) return false;
        const [month, year] = value.split("/");
        const expiry = new Date(
          PAYMENT_EXPIRY_CENTURY_BASE + Number(year),
          Number(month) - 1,
        );
        return expiry > new Date();
      }),
    cvv: yup
      .string()
      .required(t("paymentModal.errors.cvvRequired"))
      .matches(CVV_REGEX, t("paymentModal.errors.cvvInvalid")),
  });

export function detectCardType(cardNumber: string): CardType {
  const digits = cardNumber.replace(/\s/g, "");
  if (VISA_PREFIX_REGEX.test(digits)) return "visa";
  if (MASTERCARD_PREFIX_REGEX.test(digits)) return "mastercard";
  return null;
}

export function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, PAYMENT_CARD_NUMBER_LENGTH);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

export function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, PAYMENT_EXPIRY_DIGITS);
  if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}

export function usePaymentForm(planId: string, onClose: () => void) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const schema = useMemo(() => buildSchema(t), [t]);

  const { control, handleSubmit, formState } = useForm<PaymentFormValues>({
    mode: "onBlur",
    defaultValues: {
      cardholderName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
    resolver: async (data) => {
      try {
        const values = await schema.validate(data, {
          abortEarly: false,
        });
        return { values, errors: {} };
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors: Record<string, { message: string }> = {};
          error.inner.forEach((err: yup.ValidationError) => {
            if (err.path) errors[err.path] = { message: err.message };
          });
          return { values: {}, errors };
        }
        return { values: {}, errors: {} };
      }
    },
  });

  const cardNumber = useWatch({ control, name: "cardNumber" });

  const onSubmit = async () => {
    setPaymentError(null);
    try {
      await dispatch(selectPlan({ planId })).unwrap();
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        navigate(headerRoutes.dashboard);
      }, PAYMENT_SUCCESS_REDIRECT_DELAY);
    } catch {
      setPaymentError(t("paymentModal.errors.paymentFailed"));
    }
  };

  return {
    control,
    handleSubmit,
    errors: formState.errors,
    isSubmitting: formState.isSubmitting,
    isSuccess,
    paymentError,
    cardType: detectCardType(cardNumber ?? ""),
    onSubmit,
  };
}
