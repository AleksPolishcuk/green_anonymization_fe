import { driver } from "driver.js";
import i18n from "shared/i18n";

type StartDeidResultsTourParams = {
  onComplete?: () => void;
};

export const startDeidResultsTour = ({
  onComplete,
}: StartDeidResultsTourParams = {}) => {
  const steps = [
    {
      element: '[data-tour="original-text"]',
      popover: {
        title: i18n.t("resultsTour.originalTitle"),
        description: i18n.t("resultsTour.originalDescription"),
        side: "bottom" as const,
        align: "center" as const,
      },
    },
    {
      element: '[data-tour="redacted-text"]',
      popover: {
        title: i18n.t("resultsTour.redactedTitle"),
        description: i18n.t("resultsTour.redactedDescription"),
        side: "bottom" as const,
        align: "center" as const,
      },
    },
    {
      element: '[data-tour="entities-list"]',
      popover: {
        title: i18n.t("resultsTour.entitiesTitle"),
        description: i18n.t("resultsTour.entitiesDescription"),
        side: "left" as const,
        align: "center" as const,
      },
    },
    {
      element: '[data-tour="synthetic-cta"]',
      popover: {
        title: i18n.t("resultsTour.syntheticTitle"),
        description: i18n.t("resultsTour.syntheticDescription"),
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
