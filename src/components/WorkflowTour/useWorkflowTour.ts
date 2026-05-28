import { useState } from "react";
import { useLocation } from "react-router-dom";

import type User from "shared/interfaces/User";
import { useAppDispatch } from "store/hooks";
import { updateWorkflowTour } from "store/slices/authSlice";

import { startDashboardTour } from "./DashboardTour";
import { buildWorkflowTourPayload } from "shared/utils/workflow-tour-helper";

export const useWorkflowTour = (user: User | null) => {
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const forceTour = (location.state as { forceTour?: string } | null)
    ?.forceTour;

  const dispatch = useAppDispatch();

  const shouldShowWelcome =
    !!user &&
    !isHidden &&
    (forceTour === "dashboard" || !user.workflowTour?.skipped) &&
    !user.workflowTour?.dashboard;

  const handleStartTour = () => {
    if (!user) return;

    setIsHidden(true);

    setTimeout(() => {
      startDashboardTour({
        onComplete: () => {
          void dispatch(
            updateWorkflowTour(
              buildWorkflowTourPayload(user.workflowTour, {
                dashboard: true,
              }),
            ),
          );
        },
      });
    }, 200);
  };

  const handleSkipTour = async () => {
    if (!user) return;

    try {
      await dispatch(
        updateWorkflowTour(
          buildWorkflowTourPayload(user.workflowTour, {
            skipped: true,
          }),
        ),
      );

      setIsHidden(true);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isWelcomeOpen: shouldShowWelcome,
    handleStartTour,
    handleSkipTour,
  };
};
