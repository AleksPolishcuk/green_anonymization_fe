import { useState } from "react";
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const user = useAppSelector((state) => state.auth?.user);
  const plans = useAppSelector((state) => state.pricing.plans);
  const subscription = useAppSelector((state) => state.pricing.current);
  const selectLoading = useAppSelector((state) => state.pricing.selectLoading);

  const apiPlan = plans.find(
    (p) => p.name.toLowerCase() === plan.id.toLowerCase(),
  );

  const currentPlanId = subscription?.plan.name.toLowerCase();
  const isCurrent = currentPlanId === plan.id.toLowerCase();
  const isFree = plan.id === FREE_PLAN_ID;
  const isLoggedIn = Boolean(user);

  const isFreeCurrent =
    isFree &&
    isLoggedIn &&
    (subscription === null ||
      subscription.plan.name.toLowerCase() === FREE_PLAN_ID);

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
    if (!isFree && !isCurrent && apiPlan) {
      setPaymentModalOpen(true);
      return;
    }
    if (isFree && !isCurrent && apiPlan) {
      try {
        await dispatch(selectPlan({ planId: apiPlan.uuid })).unwrap();
        navigate(headerRoutes.dashboard);
      } catch {
        return;
      }
      return;
    }
    navigate(headerRoutes.dashboard);
  };

  const handleClosePaymentModal = () => setPaymentModalOpen(false);

  return {
    isDisabled,
    ctaLabel,
    handleCTA,
    paymentModalOpen,
    handleClosePaymentModal,
    apiPlanId: apiPlan?.uuid ?? "",
  };
}
