import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PRICING_PLANS } from "constants/PricingPage";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  fetchCurrentSubscription,
  fetchPlans,
  selectPlan,
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

const FREE_PLAN_ID = "free";
const DASHBOARD_ROUTE = "/dashboard";
const SIGN_IN_ROUTE = "/sign-in";

type StaticPlan = (typeof PRICING_PLANS)[number];

type PricingCardProps = {
  plan: StaticPlan;
};

const PricingCard = ({ plan }: PricingCardProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth?.user);
  const { plans, current, selectLoading } = useAppSelector(
    (state) => state.pricing,
  );

  const apiPlan = plans.find(
    (p) => p.name.toLowerCase() === plan.id.toLowerCase(),
  );
  const currentPlanId = current?.plan.name.toLowerCase();
  const isCurrent = currentPlanId === plan.id.toLowerCase();
  const isFree = plan.id === FREE_PLAN_ID;

  const isLoggedIn = Boolean(user);
  const isFreeCurrent =
    isFree &&
    isLoggedIn &&
    (current === null || current.plan.name.toLowerCase() === FREE_PLAN_ID);

  const handleCTA = async () => {
    if (!isLoggedIn) {
      navigate(SIGN_IN_ROUTE);
      return;
    }
    if (!isCurrent && !isFreeCurrent && apiPlan) {
      await dispatch(selectPlan({ planId: apiPlan.uuid }));
    }
    navigate(DASHBOARD_ROUTE);
  };

  const ctaLabel =
    isFreeCurrent || isCurrent
      ? t("pricingPage.currentPlan")
      : t(`pricingPage.plans.${plan.id}.cta`);

  const isDisabled = isCurrent || isFreeCurrent || selectLoading;

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
