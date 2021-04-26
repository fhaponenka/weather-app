import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../../shared/thunks";

const initialState = {
  bars: [],
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      const bars = action.payload.reduce((acc, { temperature }, idx) => {
        if (idx % 8 === 0) {
          acc.push([temperature]);
        } else {
          acc[acc.length - 1].push(temperature);
        }
        return acc;
      }, []);

      state.bars = bars;
    });
  },
});

export default chartSlice.reducer;
