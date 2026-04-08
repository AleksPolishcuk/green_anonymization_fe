import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { CAPABILITIES_CARDS } from "shared/constants/capabilities";
import {
  CapabilitiesSection,
  CardItem,
  CardsList,
  IconWrapper,
  SectionTitle,
  Subtitle,
  TitleSectionBlock,
} from "./styles";
import { useScrollReveal } from "./hooks/useScrollReveal";

export const Capabilities = () => {
  const { t } = useTranslation("capabilities");
  const listRef = useScrollReveal();

  return (
    <CapabilitiesSection id="capabilities">
      <Container>
        <TitleSectionBlock>
          <Subtitle variant="h5">{t("capabilities.subtitle")}</Subtitle>
          <SectionTitle variant="h3">{t("capabilities.title")}</SectionTitle>
          <Typography variant="body1" color="text.secondary">
            {t("capabilities.description")}
          </Typography>
        </TitleSectionBlock>

        <CardsList ref={listRef}>
          {CAPABILITIES_CARDS.map((card) => (
            <CardItem key={card.id} className="reveal-card">
              <IconWrapper $bg={card.iconBg} $stroke={card.iconStroke}>
                <svg viewBox="0 0 20 20">
                  <use href={`/capabilities/icons.svg${card.iconId}`} />
                </svg>
              </IconWrapper>
              <Typography variant="h4">{t(card.titleKey)}</Typography>
              <Typography variant="body1" color="text.secondary">
                {t(card.descKey)}
              </Typography>
            </CardItem>
          ))}
        </CardsList>
      </Container>
    </CapabilitiesSection>
  );
};
