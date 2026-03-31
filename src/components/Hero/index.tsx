import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import { heroAssets, heroStatsKeys } from "shared/constants/hero";

import {
  Actions,
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

            <Actions>
              <PrimaryButton variant="contained" disableElevation>
                {t("ctaPrimary")}
              </PrimaryButton>
            </Actions>

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
