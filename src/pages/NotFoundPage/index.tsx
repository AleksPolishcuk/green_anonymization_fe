import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNotFound } from "./hooks/useNotFound";
import {
  Actions,
  BackgroundGlow,
  CardContent,
  CodeBadge,
  ContentCard,
  DescriptionText,
  NotFoundSection,
  SectionContainer,
  SubtitleText,
  TitleText,
} from "./styles";

export const NotFound = () => {
  const { t } = useTranslation("notFound");
  const { handleGoBack, handleGoHome } = useNotFound();

  return (
    <NotFoundSection>
      <SectionContainer>
        <ContentCard elevation={0}>
          <BackgroundGlow />

          <CardContent>
            <CodeBadge>
              <Typography variant="h5">404</Typography>
            </CodeBadge>

            <SubtitleText variant="h5">{t("notFound.subtitle")}</SubtitleText>

            <TitleText variant="h2">{t("notFound.title")}</TitleText>

            <DescriptionText variant="body1" color="text.secondary">
              {t("notFound.description")}
            </DescriptionText>

            <Actions>
              <Button
                variant="contained"
                color="primary"
                onClick={handleGoHome}
              >
                {t("notFound.goHome")}
              </Button>

              <Button variant="outlined" color="primary" onClick={handleGoBack}>
                {t("notFound.goBack")}
              </Button>
            </Actions>
          </CardContent>
        </ContentCard>
      </SectionContainer>
    </NotFoundSection>
  );
};
