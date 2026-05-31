import { useMemo, useState } from "react";

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

  return {
    visibleItems,
    currentPage: safePage,
    totalPages,
    setPage: setCurrentPage,
    startIndex: (safePage - 1) * pageSize,
  };
};
