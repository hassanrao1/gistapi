import { createSlice } from "@reduxjs/toolkit";

export const gistsSlice = createSlice({
  name: "gists",
  initialState: {
    loading: false,
    gists: [],
    error: null,
  },
  reducers: {
    getGistsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getGistsSuccess: (state, action) => {
      state.loading = false;
      state.gists = action.payload;
    },
    getGistsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    searchGistsSuccess: (state, action) => {
      state.loading = false;
      state.gists = action.payload;
    },
  },
});

export const {
  getGistsStart,
  getGistsSuccess,
  getGistsFailure,
  searchGistsSuccess,
} = gistsSlice.actions;

export const gistsReducer = gistsSlice.reducer;
