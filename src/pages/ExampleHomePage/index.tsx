import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { HomePageTitle } from "./styles";
import Header from "components/ExampleHeader";
import { ExampleForm } from "features/ExampleForm";

export default function ExampleHomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Container>
        {/* // example of using a styled component in the home page. see styles.tsx
        for more details. */}
        <HomePageTitle variant="h1">{t("exampleHomePage.title")}</HomePageTitle>
        {/* example of default MUI typography component. Basic css is defined in theme/theme.ts  */}
        <Typography variant="body1">{t("exampleHomePage.text")}</Typography>
        <ExampleForm />
      </Container>
    </>
  );
}
