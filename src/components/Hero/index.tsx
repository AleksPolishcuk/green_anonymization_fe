import React from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

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

const Hero: React.FC = () => {
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
                  src="/img/hero/icon.png"
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
                {t("ctaPrimary")} →
              </PrimaryButton>
            </Actions>

            <StatsRow>
              <StatItem>
                <StatValue>{t("stats.hipaa.value")}</StatValue>
                <StatLabel>{t("stats.hipaa.label")}</StatLabel>
              </StatItem>

              <StatItem>
                <StatValue>{t("stats.eugdpr.value")}</StatValue>
                <StatLabel>{t("stats.eugdpr.label")}</StatLabel>
              </StatItem>

              <StatItem>
                <StatValue>{t("stats.ukgdpr.value")}</StatValue>
                <StatLabel>{t("stats.ukgdpr.label")}</StatLabel>
              </StatItem>

              <StatItem>
                <StatValue>{t("stats.FADP.value")}</StatValue>
                <StatLabel>{t("stats.FADP.label")}</StatLabel>
              </StatItem>
            </StatsRow>
          </Content>

          <Visual>
            <ShieldAnimationWrap>
              <ShieldFloatLayer>
                <ShieldImage src="/img/hero/shield.png" alt="Shield" />
              </ShieldFloatLayer>
            </ShieldAnimationWrap>
          </Visual>
        </HeroGrid>
      </Container>
    </Section>
  );
};

export default Hero;
