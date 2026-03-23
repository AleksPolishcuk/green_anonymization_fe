import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  // example of a header component that will be used in the home page.
  // will be changed later to fit the design system of the project
  return (
    <Container>
      <Typography variant="h2">{t("exampleHeader.title")}</Typography>
    </Container>
  );
}
