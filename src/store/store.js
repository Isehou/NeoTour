import { configureStore } from "@reduxjs/toolkit";
import { listTourReducer } from "./slices/listTourSlice";

export const store = configureStore({
  reducer: {
    tours: listTourReducer,
  },
});
