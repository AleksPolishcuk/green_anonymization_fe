import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useInputForm } from "./hooks/useInputForm";
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
import { headerSpriteRef } from "constants/MainPages";
import { Controller } from "react-hook-form";
import FileDropZone from "./FileDropZone";
import { INPUT_SECTION_CONSTANTS } from "constants/DeidPage";

export default function Input() {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState,
    onSubmit,
    submitSuccess,
    isFileUploaded,
    isSubmitDisabled,
  } = useInputForm();

  const { errors } = formState;

  return (
    <InputSectionRoot>
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
                <InputSubmitButton type="submit" disabled={isSubmitDisabled}>
                  <InputPlayIcon>
                    <use href={headerSpriteRef("input-submit-play-icon")} />
                  </InputPlayIcon>

                  <span>{t("input.form.submitButton")}</span>

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
    </InputSectionRoot>
  );
}
