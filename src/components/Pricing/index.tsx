import { useTranslation } from "react-i18next";

import { PRICING_PLANS, type PricingPlan } from "constants/PricingPage";
import { PaymentModal } from "components/PaymentModal";

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
import { usePricingSection } from "./hooks/usePricingSection";

type PricingCardProps = {
  plan: PricingPlan;
};

const PricingCard = ({ plan }: PricingCardProps) => {
  const { t } = useTranslation();
  const {
    isDisabled,
    ctaLabel,
    handleCTA,
    paymentModalOpen,
    handleClosePaymentModal,
    apiPlanId,
  } = usePricingCard(plan);

  return (
    <>
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

        <DocumentsBadge>
          {t(`pricingPage.plans.${plan.id}.badge`)}
        </DocumentsBadge>

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

      {paymentModalOpen && (
        <PaymentModal
          open
          onClose={handleClosePaymentModal}
          planId={apiPlanId}
        />
      )}
    </>
  );
};

export function PricingSection() {
  usePricingSection();

  return (
    <PricingGrid>
      {PRICING_PLANS.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </PricingGrid>
  );
}
