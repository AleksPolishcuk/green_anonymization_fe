import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PRICING_ROUTE } from "constants/PricingPage";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchCurrentSubscription } from "store/slices/pricingSlice";

import {
  UpgradeLink,
  UsageBar,
  UsageBarWrapper,
  UsageCount,
  UsageInfoRow,
  UsageLabel,
  UsageRoot,
} from "./styles";

const USAGE_WARN_THRESHOLD = 0.8;

export const SubscriptionUsage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { current } = useAppSelector((state) => state.pricing);
  const user = useAppSelector((state) => state.auth?.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchCurrentSubscription());
    }
  }, [dispatch, user]);

  if (!current) return null;

  const { usedToday, dailyLimit, plan } = current;
  const isUnlimited = dailyLimit === null;
  const progress = isUnlimited ? 0 : (usedToday / dailyLimit!) * 100;
  const isWarn = !isUnlimited && progress >= USAGE_WARN_THRESHOLD * 100;
  const limitLabel = isUnlimited ? "∞" : String(dailyLimit);

  return (
    <UsageRoot>
      <UsageInfoRow>
        <UsageLabel>{t("dashboard.usage.label")}</UsageLabel>
        <UsageCount>
          {usedToday} / {limitLabel}
        </UsageCount>
      </UsageInfoRow>

      {!isUnlimited && (
        <UsageBarWrapper>
          <UsageBar
            variant="determinate"
            value={Math.min(progress, 100)}
            $warn={isWarn}
          />
        </UsageBarWrapper>
      )}

      {plan.name === "Free" && (
        <UpgradeLink onClick={() => navigate(PRICING_ROUTE)}>
          {t("dashboard.usage.upgrade")}
        </UpgradeLink>
      )}
    </UsageRoot>
  );
};
