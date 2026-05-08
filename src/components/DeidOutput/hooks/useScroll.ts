import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const LOAD_DELAY_MS = 500;
const OBSERVER_THRESHOLD = 0.1;

type UseScrollParams<T> = {
  items: T[];
  pageSize: number;
  enabled?: boolean;
};

export const useScroll = <T>({
  items,
  pageSize,
  enabled = true,
}: UseScrollParams<T>) => {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);

  const hasMore = visibleCount < items.length;

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount],
  );

  const loadMore = useCallback(() => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + pageSize, items.length));
      loadingRef.current = false;
    }, LOAD_DELAY_MS);
  }, [items.length, pageSize]);

  useEffect(() => {
    const node = loaderRef.current;
    if (!node || !hasMore || !enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { threshold: OBSERVER_THRESHOLD },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loadMore, hasMore, visibleCount, enabled]);

  return { visibleItems, hasMore, loaderRef };
};
