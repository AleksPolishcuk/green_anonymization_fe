import { useState } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";

import { headerSpriteRef } from "constants/MainPages";
import { INPUT_SECTION_CONSTANTS } from "constants/DeidPage";
import { LimitReachedModal } from "components/LimitReachedModal";
import { useDailyLimitGuard } from "shared/hooks/useDailyLimitGuard";

import {
  InputLogoIcon,
  StepChip,
  InputSectionRoot,
  InputSectionHeaderRow,
  InputSectionIconBox,
  InputSectionStack,
  InputSectionTitleRow,
  InputSectionSubtitle,
  InputForm,
  Estimate,
  InputSubmitButton,
  TextInput,
  SubmitWrapper,
  InputArrowIcon,
  InputPlayIcon,
  SubmitMetaRow,
  FormStatusAlert,
  FormStatusText,
} from "./styles";
import { useInputForm } from "./hooks/useInputForm";
import FileDropZone from "./FileDropZone";

export default function Input() {
  const { t } = useTranslation();
  const { isDailyLimitReached } = useDailyLimitGuard();
  const [proactiveLimitOpen, setProactiveLimitOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState,
    onSubmit,
    submitSuccess,
    isFileUploaded,
    isSubmitDisabled,
    isSubmitting,
    isLimitReached,
    clearLimitReached,
  } = useInputForm();

  const { errors } = formState;

  const openLimitModal = () => setProactiveLimitOpen(true);
  const closeLimitModal = () => {
    clearLimitReached();
    setProactiveLimitOpen(false);
  };

  const limitModalOpen = isLimitReached || proactiveLimitOpen;

  const handleTextClick = () => {
    if (isDailyLimitReached && !isFileUploaded) openLimitModal();
  };

  const handleTextFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (isDailyLimitReached && !isFileUploaded) {
      e.target.blur();
      openLimitModal();
    }
  };

  return (
    <InputSectionRoot data-tour="input-section">
      <InputSectionStack>
        <InputSectionHeaderRow>
          <InputSectionIconBox aria-hidden="true">
            <InputLogoIcon>
              <use href={headerSpriteRef("icon-input")} />
            </InputLogoIcon>
          </InputSectionIconBox>

          <div>
            <InputSectionTitleRow>
              <Typography variant="h5">{t("input.title")}</Typography>
              <StepChip label={t("input.step")} size="small" />
            </InputSectionTitleRow>

            <InputSectionSubtitle variant="body2">
              {t("input.subtitle")}
            </InputSectionSubtitle>
          </div>
        </InputSectionHeaderRow>

        <InputForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                disabled={isFileUploaded}
                multiline
                fullWidth
                rows={INPUT_SECTION_CONSTANTS.TEXTAREA_ROWS}
                error={!isFileUploaded && !!errors.text?.message}
                helperText={!isFileUploaded ? errors.text?.message : ""}
                placeholder={t("input.form.textPlaceholder")}
                $fileMode={isFileUploaded}
                onClick={handleTextClick}
                onFocus={handleTextFocus}
              />
            )}
          />

          <Controller
            name="file"
            control={control}
            render={({ field }) => (
              <FileDropZone
                value={field.value}
                onChange={field.onChange}
                error={!!errors.file?.message}
                helperText={errors.file?.message}
                onLimitReached={
                  isDailyLimitReached ? openLimitModal : undefined
                }
              />
            )}
          />

          <SubmitMetaRow>
            {submitSuccess && (
              <FormStatusAlert $type="success">
                <FormStatusText>
                  {t("input.form.successMessage")}
                </FormStatusText>
              </FormStatusAlert>
            )}

            {!submitSuccess && (
              <SubmitWrapper>
                <InputSubmitButton
                  type="submit"
                  disabled={isSubmitDisabled}
                  data-tour="analyze-button"
                >
                  <InputPlayIcon>
                    <use href={headerSpriteRef("input-submit-play-icon")} />
                  </InputPlayIcon>
                  {!isSubmitting && <span>{t("input.form.submitButton")}</span>}
                  {isSubmitting && <span>{t("input.form.submitting")}</span>}
                  <InputArrowIcon>
                    <use href={headerSpriteRef("input-submit-right-arrow")} />
                  </InputArrowIcon>
                </InputSubmitButton>

                <Estimate>{t("input.form.estimated")}</Estimate>
              </SubmitWrapper>
            )}
          </SubmitMetaRow>
        </InputForm>
      </InputSectionStack>

      <LimitReachedModal open={limitModalOpen} onClose={closeLimitModal} />
    </InputSectionRoot>
  );
}
