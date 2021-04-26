import { configureStore } from "@reduxjs/toolkit";
import pagination from "../features/pagination/paginationSlice";
import card from "../features/card/cardSlice";
import temperature from "../features/temperature/temperatureSlice";
import chart from "../features/chart/chartSlice";
import shared from "../shared/sharedSlice";

export const store = configureStore({
  reducer: {
    pagination,
    card,
    temperature,
    shared,
    chart,
  },
});
