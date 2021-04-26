import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherByUnit } from "./sharedApi";
import { formatDate } from "./utils";

export const fetchWeather = createAsyncThunk("fetchWeather", async (unit) => {
  const list = await fetchWeatherByUnit(unit);

  return list?.map(({ dt, main: { temp } }, index) => ({
    date: formatDate(dt),
    temperature: Math.round(temp),
    id: index,
  }));
});
