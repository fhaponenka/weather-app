import { createSelector } from "reselect";
import { getCards } from "../../shared/selectors";
import { getPageIndex, getPageSize } from "../pagination/selectors";

export const getActiveCardId = (state) => state.card.activeCardId;

export const getVisibleCards = createSelector(
  getCards,
  getPageSize,
  getPageIndex,
  (cards, pageSize, pageIndex) => cards.slice(pageIndex, pageIndex + pageSize)
);

export const isActiveCardVisible = createSelector(
  getActiveCardId,
  getVisibleCards,
  (activeCardId, visibleCards) =>
    visibleCards.find(({ id }) => id === activeCardId)
);
