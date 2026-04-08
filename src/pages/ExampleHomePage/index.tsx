
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import Footer from "components/Footer";
import { ExampleForm } from "features/ExampleForm";
import { ComplianceSection } from "features/ComplianceSection";
import { Loader } from "shared/ui/Loader";
import { Capabilities } from "features/Capabilities";

import { HomePageTitle } from "./styles";

export default function ExampleHomePage() {
  return (
    <>
      <Container>
        <HomePageTitle variant="h1">{t("exampleHomePage.title")}</HomePageTitle>
        <Typography variant="body1">{t("exampleHomePage.text")}</Typography>
        <ExampleForm />
         <Capabilities />
        <ComplianceSection />
        <Loader />
      </Container>
      <Footer />
    </>
  );
}
