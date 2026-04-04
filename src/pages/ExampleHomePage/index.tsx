import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { HomePageTitle } from "./styles";
import Header from "components/ExampleHeader";
import { ExampleForm } from "features/ExampleForm";
import { ComplianceSection } from "features/ComplianceSection";

export default function ExampleHomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Container>
        <HomePageTitle variant="h1">{t("exampleHomePage.title")}</HomePageTitle>
        <Typography variant="body1">{t("exampleHomePage.text")}</Typography>
        <ExampleForm />

        <ComplianceSection />
      </Container>
    </>
  );
}
