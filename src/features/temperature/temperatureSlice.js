import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../../shared/thunks";

const initialState = {
  unit: "imperial",
};

export const temperatureSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, { meta: { arg } }) => {
      state.unit = arg;
    });
  },
});

export default temperatureSlice.reducer;
