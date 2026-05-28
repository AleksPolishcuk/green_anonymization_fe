import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { startSyntheticTour } from "components/WorkflowTour/SyntheticTour";

import type User from "shared/interfaces/User";
import { useAppDispatch } from "store/hooks";
import { updateWorkflowTour } from "store/slices/authSlice";
import { buildWorkflowTourPayload } from "shared/utils/workflow-tour-helper";

type UseSyntheticTourParams = {
  user: User | null;
  enabled: boolean;
};

export const useSyntheticTour = ({ user, enabled }: UseSyntheticTourParams) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const forceTour = (location.state as { forceTour?: string } | null)
    ?.forceTour;

  useEffect(() => {
    if (!enabled || !user || user.workflowTour?.synthetic) {
      return;
    }

    if (user.workflowTour?.skipped && forceTour !== "synthetic") {
      return;
    }

    const timer = setTimeout(() => {
      startSyntheticTour({
        onComplete: () => {
          void dispatch(
            updateWorkflowTour(
              buildWorkflowTourPayload(user.workflowTour, {
                synthetic: true,
              }),
            ),
          );
        },
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [enabled, user, dispatch, forceTour]);
};
