import { configureStore } from "@reduxjs/toolkit";
import { gistsReducer } from "./gist/gistReducer";

const store = configureStore({
  reducer: {
    gists: gistsReducer
  },
});

export default store;
