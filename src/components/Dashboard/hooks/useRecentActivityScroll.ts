import { useCallback, useEffect, useRef, useState } from "react";

interface UseRecentActivityScrollReturn {
  listRef: React.RefObject<HTMLDivElement | null>;
  canScrollMore: boolean;
  handleScroll: () => void;
}

export const useRecentActivityScroll = (): UseRecentActivityScrollReturn => {
  const listRef = useRef<HTMLDivElement>(null);
  const [canScrollMore, setCanScrollMore] = useState(false);

  const checkScroll = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setCanScrollMore(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  }, []);

  const handleScroll = useCallback(() => {
    checkScroll();
  }, [checkScroll]);

  useEffect(() => {
    checkScroll();

    const el = listRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(() => {
      checkScroll();
    });

    resizeObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
    };
  }, [checkScroll]);

  return {
    listRef,
    canScrollMore,
    handleScroll,
  };
};
