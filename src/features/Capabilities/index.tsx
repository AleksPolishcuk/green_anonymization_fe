import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CapabilitiesSection,
  TitleSectionBlock,
  Subtitle,
  CardsList,
  CardItem,
  IconWrapper,
} from "./styles";

const CARDS_DATA = [
  {
    id: "pii",
    iconId: "#pii",
    titleKey: "capabilities.cards.pii.title",
    descKey: "capabilities.cards.pii.description",
  },
  {
    id: "synthetic",
    iconId: "#synthetic",
    titleKey: "capabilities.cards.synthetic.title",
    descKey: "capabilities.cards.synthetic.description",
  },
  {
    id: "framework",
    iconId: "#framework",
    titleKey: "capabilities.cards.framework.title",
    descKey: "capabilities.cards.framework.description",
  },
  {
    id: "anonymization",
    iconId: "#ai-anonymization",
    titleKey: "capabilities.cards.anonymization.title",
    descKey: "capabilities.cards.anonymization.description",
  },
];

export const Capabilities = () => {
  const { t } = useTranslation("capabilities");

  return (
    <CapabilitiesSection id="capabilities">
      <Container>
        <TitleSectionBlock>
          <Subtitle variant="h5">{t("capabilities.subtitle")}</Subtitle>
          <Typography variant="h2" sx={{ mb: 2 }}>
            {t("capabilities.title")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t("capabilities.description")}
          </Typography>
        </TitleSectionBlock>

        <CardsList>
          {CARDS_DATA.map((card) => (
            <CardItem key={card.id}>
              <IconWrapper>
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
