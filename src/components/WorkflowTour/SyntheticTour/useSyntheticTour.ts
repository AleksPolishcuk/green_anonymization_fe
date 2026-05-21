import { useEffect } from "react";

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

  useEffect(() => {
    if (
      !enabled ||
      !user ||
      user.workflowTour?.skipped ||
      user.workflowTour?.synthetic
    ) {
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
  }, [enabled, user, dispatch]);
};
