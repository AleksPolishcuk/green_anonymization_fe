import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2">{t("exampleHeader.title")}</Typography>
    </Container>
  );
}
