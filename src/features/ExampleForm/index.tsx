import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

import {
  ExampleWorkFormWrapper,
  ExampleWorkSubmitButton,
  ExampleWorkTitle,
} from "./styles";
import { useExampleForm } from "./hooks/exampleFormHooks";
import { Controller } from "react-hook-form";

export const ExampleForm = () => {
  const { t } = useTranslation();
  const { control, handleSubmit, onSubmit } = useExampleForm();

  return (
    <ExampleWorkFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <ExampleWorkTitle variant="h6">
        {t("exampleWorkForm.title")}
      </ExampleWorkTitle>

      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField label={t("exampleWorkForm.nameLabel")} {...field} />
        )}
      />

      <ExampleWorkSubmitButton type="submit" variant="contained">
        {t("exampleWorkForm.submitButton")}
      </ExampleWorkSubmitButton>
    </ExampleWorkFormWrapper>
  );
};
