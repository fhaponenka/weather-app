import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../../shared/thunks";

const initialState = {
  cards: [],
  activeCardId: 2,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setActiveCardId: (state, action) => {
      state.activeCardId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      const cards = action.payload
        .reduce((acc, { date, temperature }, idx) => {
          if (idx % 8 === 0) {
            acc.push({ date, temperature, id: acc.length });
          } else {
            const lastCardIdx = acc.length - 1;
            acc[lastCardIdx].temperature += temperature;
          }

          return acc;
        }, [])
        .map((card) => ({
          ...card,
          temperature: Math.round(card.temperature / 8),
        }));

      state.cards = cards;
    });
  },
});

export const { setActiveCardId } = cardSlice.actions;

export default cardSlice.reducer;
