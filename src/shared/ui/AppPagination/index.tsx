import type { PaginationProps } from "@mui/material";
import { Pagination } from "@mui/material";
import { styled } from "@mui/material/styles";

import {
  PAGINATION_BOUNDARY_COUNT,
  PAGINATION_SIBLING_COUNT,
} from "constants/MainPages";

const BasePagination = styled(Pagination)({
  "&& .MuiPagination-ul": {
    flexWrap: "nowrap",
  },
});

export const AppPagination = ({
  siblingCount = PAGINATION_SIBLING_COUNT,
  boundaryCount = PAGINATION_BOUNDARY_COUNT,
  ...props
}: PaginationProps) => (
  <BasePagination
    siblingCount={siblingCount}
    boundaryCount={boundaryCount}
    {...props}
  />
);
