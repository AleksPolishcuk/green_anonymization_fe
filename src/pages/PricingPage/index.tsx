import { useTranslation } from "react-i18next";

import { PricingSection } from "components/Pricing";

import {
  PricingPageContainer,
  PricingPageSection,
  PricingPageSubtitle,
  PricingPageTitle,
  PricingShieldBackground,
} from "./styles";

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <PricingPageSection>
      <PricingShieldBackground aria-hidden="true" />
      <PricingPageContainer maxWidth="lg">
        <PricingPageTitle variant="h1">
          {t("pricingPage.title")}
        </PricingPageTitle>
        <PricingPageSubtitle variant="body1">
          {t("pricingPage.subtitle")}
        </PricingPageSubtitle>
        <PricingSection />
      </PricingPageContainer>
    </PricingPageSection>
  );
}
