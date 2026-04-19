import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type UseCtaNavigateOptions = {
  target: string;
  beforeNavigate?: () => void;
};

export function useCtaNavigate({
  target,
  beforeNavigate,
}: UseCtaNavigateOptions) {
  const navigate = useNavigate();

  return useCallback(() => {
    beforeNavigate?.();
    navigate(target);
  }, [beforeNavigate, navigate, target]);
}
