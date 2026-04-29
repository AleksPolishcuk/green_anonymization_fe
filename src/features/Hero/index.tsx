import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useCtaNavigate } from "shared/hooks/useCtaNavigate";

import { headerRoutes, heroAssets, heroStatsKeys } from "constants/MainPages";

import {
  Content,
  Description,
  HeroGrid,
  Pill,
  PillDot,
  PrimaryButton,
  Section,
  ShieldAnimationWrap,
  ShieldFloatLayer,
  ShieldImage,
  StatItem,
  StatText,
  StatsRow,
  TaskAlt,
  Title,
  TitleAccent,
  TitleAccentImage,
  Visual,
} from "./styles";

const Hero = () => {
  const { t } = useTranslation();
  const handleGetStartedClick = useCtaNavigate({
    target: headerRoutes.dashboard,
  });

  return (
    <Section>
      <Container>
        <HeroGrid>
          <Content>
            <Pill>
              <PillDot />
              {t("hero.badge")}
            </Pill>

            <Title variant="h1">
              {t("hero.titleLine1")}
              <br />
              <TitleAccent>
                {t("hero.titleLine2")}
                <TitleAccentImage
                  src={heroAssets.titleAccentIcon}
                  alt=""
                  aria-hidden="true"
                />
              </TitleAccent>
              <br />
              {t("hero.titleLine3")}
            </Title>

            <Description variant="body1">{t("hero.description")}</Description>

            <PrimaryButton
              variant="contained"
              disableElevation
              onClick={handleGetStartedClick}
            >
              {t("hero.ctaPrimary")}
            </PrimaryButton>

            <StatsRow>
              {heroStatsKeys.map((statKey) => (
                <StatItem key={statKey}>
                  <TaskAlt />
                  <StatText variant="h6">{t(`hero.${statKey}.value`)}</StatText>
                </StatItem>
              ))}
            </StatsRow>
          </Content>

          <Visual>
            <ShieldAnimationWrap>
              <ShieldFloatLayer>
                <ShieldImage src={heroAssets.shield} alt={t("shieldAlt")} />
              </ShieldFloatLayer>
            </ShieldAnimationWrap>
          </Visual>
        </HeroGrid>
      </Container>
    </Section>
  );
};

export default Hero;
