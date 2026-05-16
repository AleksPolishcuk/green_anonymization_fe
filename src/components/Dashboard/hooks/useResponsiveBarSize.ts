import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import {
  BAR_SIZE_DESKTOP,
  BAR_SIZE_MOBILE,
  BAR_SIZE_TABLET,
  CONFIDENCE_PILL_WIDTH,
  CONFIDENCE_PILL_WIDTH_MOBILE,
  CONFIDENCE_PILL_WIDTH_TABLET,
} from "constants/DashboardPage";

interface ResponsiveChartSizes {
  barSize: number;
  confidencePillWidth: number;
  isDesktop: boolean;
}

export function useResponsiveChartSizes(): ResponsiveChartSizes {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  if (isDesktop) {
    return {
      barSize: BAR_SIZE_DESKTOP,
      confidencePillWidth: CONFIDENCE_PILL_WIDTH,
      isDesktop: true,
    };
  }
  if (isTablet) {
    return {
      barSize: BAR_SIZE_TABLET,
      confidencePillWidth: CONFIDENCE_PILL_WIDTH_TABLET,
      isDesktop: false,
    };
  }
  return {
    barSize: BAR_SIZE_MOBILE,
    confidencePillWidth: CONFIDENCE_PILL_WIDTH_MOBILE,
    isDesktop: false,
  };
}
