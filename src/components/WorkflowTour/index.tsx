import type User from "shared/interfaces/User";

import {
  WorkflowTourActions,
  WorkflowTourCard,
  WorkflowTourOverlay,
  WorkflowTourPrimaryButton,
  WorkflowTourSecondaryButton,
  WorkflowTourText,
  WorkflowTourTitle,
} from "./styles";
import { useWorkflowTour } from "./useWorkflowTour";
import { useTranslation } from "react-i18next";

type WorkflowTourProps = {
  user: User | null;
};

export default function WorkflowTour({ user }: WorkflowTourProps) {
  const { t } = useTranslation();
  const { isWelcomeOpen, handleStartTour, handleSkipTour } =
    useWorkflowTour(user);

  if (!isWelcomeOpen) return null;

  return (
    <WorkflowTourOverlay>
      <WorkflowTourCard>
        <WorkflowTourTitle>{t("workflowTour.title")}</WorkflowTourTitle>

        <WorkflowTourText>{t("workflowTour.description")}</WorkflowTourText>

        <WorkflowTourActions>
          <WorkflowTourPrimaryButton onClick={handleStartTour}>
            {t("workflowTour.start")}
          </WorkflowTourPrimaryButton>

          <WorkflowTourSecondaryButton onClick={handleSkipTour}>
            {t("workflowTour.skip")}
          </WorkflowTourSecondaryButton>
        </WorkflowTourActions>
      </WorkflowTourCard>
    </WorkflowTourOverlay>
  );
}
