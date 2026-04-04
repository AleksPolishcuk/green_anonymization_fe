import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import Footer from "components/Footer";
import Header from "components/ExampleHeader";
import { ExampleForm } from "features/ExampleForm";
import { ComplianceSection } from "features/ComplianceSection";

import { HomePageTitle } from "./styles";

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
      <Footer />
    </>
  );
}
