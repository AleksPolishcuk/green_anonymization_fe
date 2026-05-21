import { driver } from "driver.js";
import "driver.js/dist/driver.css";

import i18n from "shared/i18n";

type StartDashboardTourParams = {
  onComplete?: () => void;
};

export const startDashboardTour = ({
  onComplete,
}: StartDashboardTourParams = {}) => {
  const steps = [
    {
      element: '[data-tour="sidebar"]',
      popover: {
        title: i18n.t("dashboardTour.sidebarTitle"),
        description: i18n.t("dashboardTour.sidebarDescription"),
        side: "right" as const,
      },
    },
    {
      element: '[data-tour="dashboard"]',
      popover: {
        title: i18n.t("dashboardTour.dashboardTitle"),
        description: i18n.t("dashboardTour.dashboardDescription"),
        side: "left" as const,
      },
    },
    {
      element: '[data-tour="dashboard-start-deid"]',
      popover: {
        title: i18n.t("dashboardTour.startTitle"),
        description: i18n.t("dashboardTour.startDescription"),
        side: "left" as const,
        align: "center" as const,
      },
    },
  ];

  const driverObj = driver({
    showProgress: true,
    allowClose: true,
    popoverClass: "clinical-tour",

    onNextClick: (_element, _step, { state }) => {
      const isLastStep = state.activeIndex === steps.length - 1;

      if (isLastStep) {
        onComplete?.();
      }

      driverObj.moveNext();
    },

    steps,
  });

  driverObj.drive();
};
