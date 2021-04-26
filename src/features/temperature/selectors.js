import { createSelector } from "reselect";

export const getUnit = (state) => state.temperature.unit;

export const getTemperatureUnit = createSelector(getUnit, (unit) =>
  unit === "metric" ? "°C" : "°F"
);
