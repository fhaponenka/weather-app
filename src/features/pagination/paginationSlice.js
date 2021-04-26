import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageIndex: 1,
  pageSize: 3,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.pageIndex = action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;

export default paginationSlice.reducer;
