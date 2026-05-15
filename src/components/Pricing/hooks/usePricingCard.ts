import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FREE_PLAN_ID,
  PRICING_CTA_ROUTE,
  type PricingPlan,
} from "constants/PricingPage";
import { headerRoutes } from "constants/MainPages";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectPlan } from "store/slices/pricingSlice";

export function usePricingCard(plan: PricingPlan) {
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

  const isDisabled = isCurrent || isFreeCurrent || selectLoading;

  const ctaLabel =
    isFreeCurrent || isCurrent
      ? t("pricingPage.currentPlan")
      : t(`pricingPage.plans.${plan.id}.cta`);

  const handleCTA = async () => {
    if (!isLoggedIn) {
      navigate(PRICING_CTA_ROUTE);
      return;
    }
    if (!isCurrent && !isFreeCurrent && apiPlan) {
      try {
        await dispatch(selectPlan({ planId: apiPlan.uuid })).unwrap();
      } catch {
        return;
      }
    }
    navigate(headerRoutes.dashboard);
  };

  return { isDisabled, ctaLabel, handleCTA };
}
