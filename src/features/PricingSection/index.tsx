import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PRICING_CTA_ROUTE, PRICING_PLANS } from "constants/PricingPage";

import {
  DisabledIcon,
  DocumentsBadge,
  EnabledIcon,
  FeatureItem,
  FeatureLabel,
  FeatureList,
  PlanCTA,
  PlanDescription,
  PlanName,
  PopularBadge,
  PRICING_CTA_CLASS,
  PriceAmount,
  PriceMonth,
  PriceRow,
  PricingCardRoot,
  PricingGrid,
} from "./styles";

type PricingPlan = (typeof PRICING_PLANS)[number];

type PricingCardProps = {
  plan: PricingPlan;
};

const PricingCard = ({ plan }: PricingCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <PricingCardRoot>
      {plan.isPopular && (
        <PopularBadge>{t("pricingPage.mostPopular")}</PopularBadge>
      )}

      <PlanName>{t(`pricingPage.plans.${plan.id}.name`)}</PlanName>
      <PlanDescription>
        {t(`pricingPage.plans.${plan.id}.description`)}
      </PlanDescription>

      <PriceRow>
        <PriceAmount>{plan.price}</PriceAmount>
        <PriceMonth>{t("pricingPage.perMonth")}</PriceMonth>
      </PriceRow>

      <DocumentsBadge>{t(`pricingPage.plans.${plan.id}.badge`)}</DocumentsBadge>

      <FeatureList>
        {plan.features.map((feature) => (
          <FeatureItem key={feature.key}>
            {feature.enabled ? <EnabledIcon /> : <DisabledIcon />}
            <FeatureLabel $enabled={feature.enabled}>
              {t(`pricingPage.features.${feature.key}`)}
            </FeatureLabel>
          </FeatureItem>
        ))}
      </FeatureList>

      <PlanCTA
        className={PRICING_CTA_CLASS}
        disableElevation
        onClick={() => navigate(PRICING_CTA_ROUTE)}
      >
        {t(`pricingPage.plans.${plan.id}.cta`)}
      </PlanCTA>
    </PricingCardRoot>
  );
};

export function PricingSection() {
  return (
    <PricingGrid>
      {PRICING_PLANS.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </PricingGrid>
  );
}
