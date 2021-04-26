import { createSelector } from "reselect";
import { getCards } from "../../shared/selectors";

export const getPageIndex = (state) => state.pagination.pageIndex;
export const getPageSize = (state) => state.pagination.pageSize;

export const isPrevPageVisible = createSelector(
  getPageIndex,
  (pageIndex) => pageIndex > 0
);

export const isNextPageVisible = createSelector(
  getPageIndex,
  getPageSize,
  getCards,
  (pageIndex, pageSize, cards) => pageIndex + pageSize < cards?.length
);
