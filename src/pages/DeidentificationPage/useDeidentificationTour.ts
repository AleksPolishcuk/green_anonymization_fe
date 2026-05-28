import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch } from "store/hooks";
import { updateWorkflowTour } from "store/slices/authSlice";

import { startDeidTour } from "components/WorkflowTour/DeidTour";
import { startDeidResultsTour } from "components/WorkflowTour/DeidResultTour";

import type User from "shared/interfaces/User";
import { buildWorkflowTourPayload } from "shared/utils/workflow-tour-helper";

type UseDeidentificationTourParams = {
  currentStep: string | null;
  user: User | null;
};

export const useDeidentificationTour = ({
  currentStep,
  user,
}: UseDeidentificationTourParams) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const forceTour = (location.state as { forceTour?: string } | null)
    ?.forceTour;

  useEffect(() => {
    if (!currentStep || !user) {
      return;
    }

    const skipped = user.workflowTour?.skipped;

    const timer = setTimeout(() => {
      if (currentStep === "results") {
        if (
          !user.workflowTour?.results &&
          (!skipped || forceTour === "results")
        ) {
          startDeidResultsTour({
            onComplete: () => {
              void dispatch(
                updateWorkflowTour(
                  buildWorkflowTourPayload(user.workflowTour, {
                    results: true,
                  }),
                ),
              );
            },
          });
        }

        return;
      }

      if (
        !user.workflowTour?.deidentification &&
        (!skipped || forceTour === "deidentification")
      ) {
        startDeidTour({
          onComplete: () => {
            void dispatch(
              updateWorkflowTour(
                buildWorkflowTourPayload(user.workflowTour, {
                  deidentification: true,
                }),
              ),
            );
          },
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentStep, user, dispatch, forceTour]);
};
