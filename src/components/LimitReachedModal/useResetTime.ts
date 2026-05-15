import { useTranslation } from "react-i18next";
import { useAppSelector } from "store/hooks";

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
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

export function useResetTime(): string {
  const { t } = useTranslation();
  const resetAt = useAppSelector((state) => state.pricing.current?.resetAt);

  if (!resetAt) {
    return t("limitReached.resetFallback");
  }

  const resetDate = new Date(resetAt);

  if (isNaN(resetDate.getTime())) {
    return t("limitReached.resetFallback");
  }

  const time = formatTime(resetDate);

  if (isToday(resetDate)) {
    return t("limitReached.resetToday", { time });
  }

  if (isTomorrow(resetDate)) {
    return t("limitReached.resetTomorrow", { time });
  }

  return t("limitReached.resetFallback");
}
