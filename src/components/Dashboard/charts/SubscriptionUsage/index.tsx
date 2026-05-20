import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PRICING_ROUTE } from "constants/PricingPage";

import {
  UpgradeLink,
  UsageBar,
  UsageBarWrapper,
  UsageCount,
  UsageInfoRow,
  UsageLabel,
  UsageRoot,
} from "./styles";
import { useSubscriptionUsage } from "./useSubscriptionUsage";

export const SubscriptionUsage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    isReady,
    usedToday,
    limitLabel,
    isUnlimited,
    progress,
    isWarn,
    isFreePlan,
  } = useSubscriptionUsage();

  if (!isReady || isUnlimited) return null;

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

      {isFreePlan && (
        <UpgradeLink onClick={() => navigate(PRICING_ROUTE)}>
          {t("dashboard.usage.upgrade")}
        </UpgradeLink>
      )}
    </UsageRoot>
  );
};
