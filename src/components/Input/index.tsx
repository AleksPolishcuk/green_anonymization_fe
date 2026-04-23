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
} from "./styles";
import { headerSpriteRef } from "constants/header";
import { Controller } from "react-hook-form";
import FileDropZone from "./FileDropZone";
import { FormResultContainer, FormAlert } from "features/ContactForm/styles";

export default function Input() {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState,
    onSubmit,
    submitError,
    submitSuccess,
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
        {/* <InputFormWrapper> */}
        <InputForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="text"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <TextInput
                  {...field}
                  id="textInput"
                  multiline
                  fullWidth
                  rows={11}
                  type="text"
                  error={!!errors.text}
                  placeholder={t("input.form.textPlaceholder")}
                  slotProps={{
                    htmlInput: {
                      autoComplete: "text",
                    },
                  }}
                />
                {/* <ErrorMessageContainer>
                      {errors.text && (
                        <ErrorMessage>{errors.text.message}</ErrorMessage>
                      )}
                    </ErrorMessageContainer>                 */}
              </>
            )}
          />
          <Controller
            name="file"
            control={control}
            render={({ field }) => (
              <FileDropZone value={field.value} onChange={field.onChange} />
            )}
          />
          <SubmitWrapper>
            <InputSubmitButton type="submit">
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
        </InputForm>
        <FormResultContainer>
          {submitError && <FormAlert $type="error">{submitError}</FormAlert>}
          {submitSuccess && (
            <FormAlert $type="success">
              {t("contactUsPage.form.success")}
            </FormAlert>
          )}
        </FormResultContainer>
        {/* </InputFormWrapper> */}
      </InputSectionStack>
    </InputSectionRoot>
  );
}
