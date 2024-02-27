import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../services/api";
import { createAction } from "@reduxjs/toolkit";

export const fetchListTour = createAsyncThunk(
  "tours/fetchListTour",
  async (region) => {
    try {
      const response = await axios.get(API_URL + "/filtered-tours/", {
        params: { region },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  }
);

export const fetchAllToursForRecommendations = createAsyncThunk(
  "tours/fetchAllTours",
  async () => {
    try {
      const response = await axios.get(API_URL + "/list-tours/");
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
  loading: false,
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

export const listTourReducer = listTourSlice.reducer;
