import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNotFound } from "./hooks/useNotFound";
import {
  Content,
  DescriptionText,
  NotFoundSection,
  ShieldBackground,
  SubtitleText,
  TitleText,
  HomeButton,
} from "./styles";

export const NotFound = () => {
  const { t } = useTranslation();
  const { handleGoHome } = useNotFound();

  return (
    <NotFoundSection>
      <Container>
        <ShieldBackground />
        <Content>
          <SubtitleText variant="h5">{t("notFound.subtitle")}</SubtitleText>
          <Typography variant="h1">404</Typography>
          <TitleText variant="h2">{t("notFound.title")}</TitleText>
          <DescriptionText variant="body1" color="text.secondary">
            {t("notFound.description")}
          </DescriptionText>
          <HomeButton
            variant="contained"
            color="primary"
            onClick={handleGoHome}
          >
            {t("notFound.goHome")}
          </HomeButton>
        </Content>
      </Container>
    </NotFoundSection>
  );
};
