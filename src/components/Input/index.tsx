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
import {
  Controller,
  useWatch,
  type ControllerRenderProps,
} from "react-hook-form";
import FileDropZone from "./FileDropZone";
import type { InputFormValues } from "./types";

export default function Input() {
  const { t } = useTranslation();
  const { control, handleSubmit, formState, onSubmit, isSubmitting, setValue } =
    useInputForm();
  const { errors } = formState;
  const fileValue = useWatch({ control, name: "file" });
  const renderTextInput = ({
    field,
  }: {
    field: ControllerRenderProps<InputFormValues, "text">;
  }) => {
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!fileValue) {
        field.onChange(e);
      }
    };

    return (
      <TextInput
        {...field}
        disabled={!!fileValue}
        value={fileValue ? "" : field.value}
        onChange={handleTextChange}
        id="textInput"
        multiline
        fullWidth
        rows={11}
        type="text"
        error={!!errors.text}
        placeholder={t("input.form.textPlaceholder")}
      />
    );
  };

  type FileFieldRender = {
    field: ControllerRenderProps<InputFormValues, "file">;
  };

  const renderFileInput = ({ field }: FileFieldRender) => {
    const handleFileChange = (file: File | null) => {
      field.onChange(file);

      if (file) {
        setValue("text", "");
      }
    };

    return <FileDropZone value={field.value} onChange={handleFileChange} />;
  };

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
            defaultValue=""
            render={renderTextInput}
          />
          <Controller name="file" control={control} render={renderFileInput} />
          <SubmitWrapper>
            <InputSubmitButton type="submit" disabled={isSubmitting}>
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
      </InputSectionStack>
    </InputSectionRoot>
  );
}
