import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { HomePageTitle } from "./styles";
import { ExampleForm } from "features/ExampleForm";

export default function ExampleHomePage() {
  const { t } = useTranslation();

  return (
    <Container>
      <HomePageTitle variant="h1">{t("exampleHomePage.title")}</HomePageTitle>
      <Typography variant="body1">{t("exampleHomePage.text")}</Typography>
      <ExampleForm />
    </Container>
  );
}
