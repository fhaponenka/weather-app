import { createSlice } from "@reduxjs/toolkit";
import { setActiveCardId } from "../features/card/cardSlice";
import {
  getVisibleCards,
  isActiveCardVisible,
} from "../features/card/selectors";
import { setPage } from "../features/pagination/paginationSlice";
import { fetchWeather } from "./thunks";

const initialState = {
  loading: true,
};

export const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export const changePage = (newPageIdx) => (dispatch, getState) => {
  dispatch(setPage(newPageIdx));

  const state = getState();

  if (!isActiveCardVisible(state)) {
    const visibleCards = getVisibleCards(state);
    const newActiveCardId = visibleCards[0].id;
    dispatch(setActiveCardId(newActiveCardId));
  }
};

export default sharedSlice.reducer;
