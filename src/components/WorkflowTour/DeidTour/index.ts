import { driver } from "driver.js";
import i18n from "shared/i18n";

type StartDeidTourParams = {
  onComplete?: () => void;
};

export const startDeidTour = ({ onComplete }: StartDeidTourParams = {}) => {
  const steps = [
    {
      element: '[data-tour="framework-section"]',
      popover: {
        title: i18n.t("deidTour.frameworkTitle"),
        description: i18n.t("deidTour.frameworkDescription"),
        side: "bottom" as const,
        align: "center" as const,
      },
    },
    {
      element: '[data-tour="input-section"]',
      popover: {
        title: i18n.t("deidTour.inputTitle"),
        description: i18n.t("deidTour.inputDescription"),
        side: "top" as const,
        align: "center" as const,
      },
    },
    {
      element: '[data-tour="analyze-button"]',
      popover: {
        title: i18n.t("deidTour.analyzeTitle"),
        description: i18n.t("deidTour.analyzeDescription"),
        side: "left" as const,
        align: "center" as const,
      },
    },
  ];

  const driverObj = driver({
    showProgress: true,
    allowClose: true,
    popoverClass: "clinical-tour",
    stagePadding: 12,

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
