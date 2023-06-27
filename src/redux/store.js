import { configureStore } from "@reduxjs/toolkit";
import streamersReducer from "./streamersSlice";

export default configureStore({
  reducer: {
    streamers: streamersReducer,
  },
});
