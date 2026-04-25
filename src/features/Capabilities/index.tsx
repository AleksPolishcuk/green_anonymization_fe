import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import {
  CapabilitiesSection,
  CardItem,
  CardsList,
  IconWrapper,
  SectionContainer,
  SectionTitle,
  Subtitle,
  TitleSectionBlock,
} from "./styles";
import { useScrollReveal } from "../../shared/hooks/useScrollReveal";
import { CAPABILITIES_CARDS } from "constants/MainPages";

export const Capabilities = () => {
  const { t } = useTranslation();
  const { ref: listRef, revealed } = useScrollReveal();

  return (
    <CapabilitiesSection id="solution">
      <SectionContainer>
        <TitleSectionBlock>
          <Subtitle variant="h5">{t("capabilities.subtitle")}</Subtitle>
          <SectionTitle variant="h3">{t("capabilities.title")}</SectionTitle>
          <Typography variant="body1" color="text.secondary">
            {t("capabilities.description")}
          </Typography>
        </TitleSectionBlock>

        <CardsList ref={listRef}>
          {CAPABILITIES_CARDS.map((card, index) => (
            <CardItem key={card.id} $revealed={revealed} $index={index}>
              <IconWrapper $accentKey={card.accentKey}>
                <svg viewBox="0 0 20 20">
                  <use href={`sprite.svg${card.iconId}`} />
                </svg>
              </IconWrapper>
              <Typography variant="h4">{t(card.titleKey)}</Typography>
              <Typography variant="body1" color="text.secondary">
                {t(card.descKey)}
              </Typography>
            </CardItem>
          ))}
        </CardsList>
      </SectionContainer>
    </CapabilitiesSection>
  );
};
