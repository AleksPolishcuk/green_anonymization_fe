import { driver } from "driver.js";
import i18n from "shared/i18n";

type StartSyntheticTourParams = {
  onComplete?: () => void;
};

export const startSyntheticTour = ({
  onComplete,
}: StartSyntheticTourParams = {}) => {
  const steps = [
    {
      element: '[data-tour="synthetic-source-document"]',
      popover: {
        title: i18n.t("syntheticTour.sourceTitle"),
        description: i18n.t("syntheticTour.sourceDescription"),
        side: "bottom" as const,
        align: "center" as const,
      },
    },
    {
      element: '[data-tour="synthetic-generate-settings"]',
      popover: {
        title: i18n.t("syntheticTour.settingsTitle"),
        description: i18n.t("syntheticTour.settingsDescription"),
        side: "left" as const,
        align: "center" as const,
      },
    },
    {
      element: '[data-tour="synthetic-generate-button"]',
      popover: {
        title: i18n.t("syntheticTour.datasetTitle"),
        description: i18n.t("syntheticTour.datasetDescription"),
        side: "top" as const,
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
