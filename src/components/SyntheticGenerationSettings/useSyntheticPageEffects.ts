import { useEffect } from "react";

import type User from "shared/interfaces/User";

import { useAppDispatch } from "store/hooks";
import { clearSyntheticDocuments } from "store/slices/syntheticDataSlice";

import { useSyntheticTour } from "components/WorkflowTour/SyntheticTour/useSyntheticTour";

type UseSyntheticPageEffectsParams = {
  user: User | null;
  hasSelectedDocument: boolean;
};

export const useSyntheticPageEffects = ({
  user,
  hasSelectedDocument,
}: UseSyntheticPageEffectsParams) => {
  const dispatch = useAppDispatch();

  useSyntheticTour({
    user,
    enabled: hasSelectedDocument,
  });

  useEffect(() => {
    return () => {
      dispatch(clearSyntheticDocuments());
    };
  }, [dispatch]);

  useEffect(() => {
    if (!hasSelectedDocument) {
      dispatch(clearSyntheticDocuments());
    }
  }, [hasSelectedDocument, dispatch]);
};
