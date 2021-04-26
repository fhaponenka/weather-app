import { createSelector } from "reselect";
import { getActiveCardId } from "../card/selectors";

export const getVisibleBars = createSelector(
  (state) => state.chart.bars,
  getActiveCardId,
  (bars, activeCardId) => bars[activeCardId]
);
