import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import { headerRoutes } from "constants/header";
import { heroAssets, heroStatsKeys } from "shared/constants/hero";
import { useCtaNavigate } from "shared/hooks/useCtaNavigate";

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
  StatLabel,
  StatValue,
  StatsRow,
  Title,
  TitleAccent,
  TitleAccentImage,
  Visual,
} from "./styles";

const Hero = () => {
  const { t } = useTranslation("hero");
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
              {t("badge")}
            </Pill>

            <Title variant="h1">
              {t("titleLine1")}
              <br />
              <TitleAccent>
                {t("titleLine2")}
                <TitleAccentImage
                  src={heroAssets.titleAccentIcon}
                  alt=""
                  aria-hidden="true"
                />
              </TitleAccent>
              <br />
              {t("titleLine3")}
            </Title>

            <Description variant="body1">{t("description")}</Description>

            <PrimaryButton
              variant="contained"
              disableElevation
              onClick={handleGetStartedClick}
            >
              {t("ctaPrimary")}
            </PrimaryButton>

            <StatsRow>
              {heroStatsKeys.map((statKey) => (
                <StatItem key={statKey}>
                  <StatValue>{t(`${statKey}.value`)}</StatValue>
                  <StatLabel>{t(`${statKey}.label`)}</StatLabel>
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
