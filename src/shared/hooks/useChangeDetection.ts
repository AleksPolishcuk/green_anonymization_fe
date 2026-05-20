import { useState, useEffect, useRef } from "react";

export type UseChangeDetectionReturn = {
  hasChanges: boolean;
  resetChanges: () => void;
};

export const useChangeDetection = (
  stateToTrack: Record<string, unknown>,
): UseChangeDetectionReturn => {
  const [hasChanges, setHasChanges] = useState(false);
  const initialStateRef = useRef<string | null>(null);

  useEffect(() => {
    initialStateRef.current = JSON.stringify(stateToTrack);
  }, []);

  useEffect(() => {
    if (initialStateRef.current !== null) {
      const currentStateHash = JSON.stringify(stateToTrack);
      setHasChanges(currentStateHash !== initialStateRef.current);
    }
  }, [stateToTrack]);

  const resetChanges = () => {
    initialStateRef.current = JSON.stringify(stateToTrack);
    setHasChanges(false);
  };

  return { hasChanges, resetChanges };
};
