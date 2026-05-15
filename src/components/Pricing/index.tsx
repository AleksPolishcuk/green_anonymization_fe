import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { PRICING_PLANS, type PricingPlan } from "constants/PricingPage";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  fetchCurrentSubscription,
  fetchPlans,
} from "store/slices/pricingSlice";

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
import { usePricingCard } from "./hooks/usePricingCard";

type PricingCardProps = {
  plan: PricingPlan;
};

const PricingCard = ({ plan }: PricingCardProps) => {
  const { t } = useTranslation();
  const { isDisabled, ctaLabel, handleCTA } = usePricingCard(plan);

  return (
    <PricingCardRoot $isPopular={plan.isPopular}>
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
        disabled={isDisabled}
        onClick={handleCTA}
      >
        {ctaLabel}
      </PlanCTA>
    </PricingCardRoot>
  );
};

export function PricingSection() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth?.user);

  useEffect(() => {
    dispatch(fetchPlans());
    if (user) {
      dispatch(fetchCurrentSubscription());
    }
  }, [dispatch, user]);

  return (
    <PricingGrid>
      {PRICING_PLANS.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </PricingGrid>
  );
}
