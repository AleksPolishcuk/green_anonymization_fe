import { useTranslation } from "react-i18next";

import {
  DEFAULT_DAILY_LIMIT,
  TIME_FORMAT_OPTIONS,
} from "constants/PricingPage";
import { useAppSelector } from "store/hooks";

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], TIME_FORMAT_OPTIONS);
}

function isToday(date: Date): boolean {
  const now = new Date();
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
}

function isTomorrow(date: Date): boolean {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear()
  );
}

export function useLimitInfo() {
  const { t } = useTranslation();
  const resetAt = useAppSelector((state) => state.pricing.current?.resetAt);
  const dailyLimit = useAppSelector(
    (state) => state.pricing.current?.dailyLimit ?? DEFAULT_DAILY_LIMIT,
  );

  let resetTimeLabel = t("limitReached.resetFallback");

  if (resetAt) {
    const resetDate = new Date(resetAt);

    if (!isNaN(resetDate.getTime())) {
      const time = formatTime(resetDate);

      if (isToday(resetDate)) {
        resetTimeLabel = t("limitReached.resetToday", { time });
      } else if (isTomorrow(resetDate)) {
        resetTimeLabel = t("limitReached.resetTomorrow", { time });
      }
    }
  }

  return { resetTimeLabel, dailyLimit };
}
