import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { PRICING_PRO_PRICE } from "constants/PricingPage";
import {
  MASTERCARD_ICON_HEIGHT,
  MASTERCARD_ICON_LABEL,
  MASTERCARD_ICON_VIEWBOX,
  MASTERCARD_ICON_WIDTH,
  PAYMENT_CARD_NUMBER_MAX_INPUT,
  PAYMENT_CVV_MAX_LENGTH,
  PAYMENT_EXPIRY_MAX_LENGTH,
  VISA_ICON_HEIGHT,
  VISA_ICON_LABEL,
  VISA_ICON_VIEWBOX,
  VISA_ICON_WIDTH,
} from "constants/PaymentModal";
import { headerSpriteSymbolIds } from "constants/MainPages";
import { BaseModal } from "components/BaseModal";
import { SpriteIcon } from "components/SpriteIcon";

import {
  CardIconWrapper,
  CardMethodsLabel,
  CardMethodsRow,
  ErrorBanner,
  FieldRow,
  FormBody,
  PayButton,
  PaymentHeader,
  PaymentSubtitle,
  PaymentTitle,
  StyledTextField,
  SuccessContainer,
  SuccessIcon,
  SuccessMessage,
  SuccessTitle,
} from "./styles";
import {
  formatCardNumber,
  formatExpiry,
  usePaymentForm,
} from "./hooks/usePaymentForm";

type PaymentModalProps = {
  open: boolean;
  onClose: () => void;
  planId: string;
};

export const PaymentModal = ({ open, onClose, planId }: PaymentModalProps) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isSuccess,
    paymentError,
    cardType,
    onSubmit,
  } = usePaymentForm(planId, onClose);

  return (
    <BaseModal open={open} onClose={onClose} maxWidth="md" wide>
      {isSuccess ? (
        <SuccessContainer>
          <SuccessIcon />
          <SuccessTitle>{t("paymentModal.success.title")}</SuccessTitle>
          <SuccessMessage>{t("paymentModal.success.message")}</SuccessMessage>
        </SuccessContainer>
      ) : (
        <>
          <PaymentHeader>
            <PaymentTitle>{t("paymentModal.title")}</PaymentTitle>
            <PaymentSubtitle>
              {t("paymentModal.subtitle", { price: PRICING_PRO_PRICE })}
            </PaymentSubtitle>
          </PaymentHeader>

          <CardMethodsRow>
            <CardMethodsLabel>
              {t("paymentModal.acceptedCards")}
            </CardMethodsLabel>
            <CardIconWrapper $active={cardType === "visa"}>
              <SpriteIcon
                symbolId={headerSpriteSymbolIds.visa}
                viewBox={VISA_ICON_VIEWBOX}
                width={VISA_ICON_WIDTH}
                height={VISA_ICON_HEIGHT}
                aria-label={VISA_ICON_LABEL}
              />
            </CardIconWrapper>
            <CardIconWrapper $active={cardType === "mastercard"}>
              <SpriteIcon
                symbolId={headerSpriteSymbolIds.mastercard}
                viewBox={MASTERCARD_ICON_VIEWBOX}
                width={MASTERCARD_ICON_WIDTH}
                height={MASTERCARD_ICON_HEIGHT}
                aria-label={MASTERCARD_ICON_LABEL}
              />
            </CardIconWrapper>
          </CardMethodsRow>

          <FormBody onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="cardholderName"
              control={control}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  label={t("paymentModal.cardholderName")}
                  placeholder={t("paymentModal.cardholderNamePlaceholder")}
                  error={Boolean(errors.cardholderName)}
                  helperText={errors.cardholderName?.message}
                  fullWidth
                  size="small"
                />
              )}
            />

            <Controller
              name="cardNumber"
              control={control}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  onChange={(e) =>
                    field.onChange(formatCardNumber(e.target.value))
                  }
                  label={t("paymentModal.cardNumber")}
                  placeholder={t("paymentModal.cardNumberPlaceholder")}
                  error={Boolean(errors.cardNumber)}
                  helperText={errors.cardNumber?.message}
                  slotProps={{
                    htmlInput: { maxLength: PAYMENT_CARD_NUMBER_MAX_INPUT },
                  }}
                  fullWidth
                  size="small"
                />
              )}
            />

            <FieldRow>
              <Controller
                name="expiry"
                control={control}
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    onChange={(e) =>
                      field.onChange(formatExpiry(e.target.value))
                    }
                    label={t("paymentModal.expiryDate")}
                    placeholder={t("paymentModal.expiryPlaceholder")}
                    error={Boolean(errors.expiry)}
                    helperText={errors.expiry?.message}
                    slotProps={{
                      htmlInput: { maxLength: PAYMENT_EXPIRY_MAX_LENGTH },
                    }}
                    fullWidth
                    size="small"
                  />
                )}
              />

              <Controller
                name="cvv"
                control={control}
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label={t("paymentModal.cvv")}
                    placeholder={t("paymentModal.cvvPlaceholder")}
                    error={Boolean(errors.cvv)}
                    helperText={errors.cvv?.message}
                    slotProps={{
                      htmlInput: { maxLength: PAYMENT_CVV_MAX_LENGTH },
                    }}
                    type="password"
                    fullWidth
                    size="small"
                  />
                )}
              />
            </FieldRow>

            {paymentError && <ErrorBanner>{paymentError}</ErrorBanner>}

            <PayButton
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              disableElevation
            >
              {isSubmitting
                ? t("paymentModal.processing")
                : t("paymentModal.payButton", { price: PRICING_PRO_PRICE })}
            </PayButton>
          </FormBody>
        </>
      )}
    </BaseModal>
  );
};
