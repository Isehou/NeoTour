import { configureStore } from "@reduxjs/toolkit";
import { filterTourReducer } from "./slices/filterTourSlice";
import { allToursReducer } from "./slices/allToursSlice";

export const store = configureStore({
  reducer: {
    tours: filterTourReducer,
    allTours: allToursReducer,
  },
});
