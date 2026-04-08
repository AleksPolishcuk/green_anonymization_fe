import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { footerI18nLegalKeys } from "constants/footer";

export function useFooterLegalLabels() {
  const theme = useTheme();
  const isMobileLayout = useMediaQuery(theme.breakpoints.down("md"));

  return {
    privacyLabelKey: isMobileLayout
      ? footerI18nLegalKeys.privacyFull
      : footerI18nLegalKeys.privacy,
    termsLabelKey: isMobileLayout
      ? footerI18nLegalKeys.termsFull
      : footerI18nLegalKeys.terms,
    cookiesLabelKey: isMobileLayout
      ? footerI18nLegalKeys.cookiesFull
      : footerI18nLegalKeys.cookies,
  };
}
