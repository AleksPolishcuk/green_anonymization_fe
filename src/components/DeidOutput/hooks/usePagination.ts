import { useCallback, useMemo, useState } from "react";

type UsePaginationParams<T> = {
  items: T[];
  pageSize: number;
};

export const usePagination = <T>({
  items,
  pageSize,
}: UsePaginationParams<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);

  const visibleItems = useMemo(
    () => items.slice((safePage - 1) * pageSize, safePage * pageSize),
    [items, safePage, pageSize],
  );

  const goNext = useCallback(() => {
    setCurrentPage((p) => Math.min(p + 1, totalPages));
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setCurrentPage((p) => Math.max(p - 1, 1));
  }, []);

  return {
    visibleItems,
    currentPage: safePage,
    totalPages,
    goNext,
    goPrev,
    startIndex: (safePage - 1) * pageSize,
  };
};
