import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../services/api";
import { createSelector } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const fetchListTour = createAsyncThunk(
  "tours/fetchListTour",
  async () => {
    try {
      const response = await axios.get(API_URL + "/list-tours");
      return response.data;
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  }
);

export const applyFilter = createAction("tours/applyFilter");

const initialState = {
  list: [],
  filter: "asia",
  loading: "idle",
  error: "",
};

const listTourSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    applyFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListTour.pending, (state) => {
        state.list = [];
        state.loading = "loading";
      })
      .addCase(fetchListTour.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = "loaded";
      })
      .addCase(fetchListTour.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      });
  },
});

export const toursByRegionSelector = createSelector(
  [(state) => state.tours.list, (state) => state.tours.filter],
  (list, filter) => {
    return list.filter((e) => {
      console.log(e, filter);
      return e.region === filter;
    });
  }
);

export const regionsSelector = createSelector(
  (state) => state.tours.list,
  (list) => {
    return list.map((e) => e.region);
  }
);

export const listTourReducer = listTourSlice.reducer;
