import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Actions,
  Content,
  DescriptionText,
  ErrorSection,
  HomeButton,
  RefreshButton,
  ShieldBackground,
  SubtitleText,
  TitleText,
} from "./styles";
import { Container } from "@mui/material";

export const AppErrorPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ErrorSection>
      <Container>
        <ShieldBackground />

        <Content>
          <SubtitleText variant="h5">{t("errorPage.subtitle")}</SubtitleText>

          <TitleText variant="h2">{t("errorPage.title")}</TitleText>

          <DescriptionText variant="body1" color="text.secondary">
            {t("errorPage.description")}
          </DescriptionText>

          <Actions>
            <RefreshButton
              variant="outlined"
              onClick={() => window.location.reload()}
            >
              {t("errorPage.refresh")}
            </RefreshButton>

            <HomeButton variant="contained" onClick={() => navigate("/")}>
              {t("errorPage.goHome")}
            </HomeButton>
          </Actions>
        </Content>
      </Container>
    </ErrorSection>
  );
};
