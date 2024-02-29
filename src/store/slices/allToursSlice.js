import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../services/api";

export const fetchAllTours = createAsyncThunk(
  "allTours/fetchAllTours",
  async () => {
    try {
      const response = await axios.get(API_URL + "/list-tours/");
      return response.data;
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  }
);

const initialState = {
  allListTours: [],
  loading: false,
  error: "",
};

const allToursSlice = createSlice({
  name: "allTours",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTours.pending, (state) => {
        state.allListTours = [];
        state.loading = "loading";
      })
      .addCase(fetchAllTours.fulfilled, (state, { payload }) => {
        state.allListTours = payload;
        state.loading = "loaded";
      })
      .addCase(fetchAllTours.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      });
  },
});

export const allToursReducer = allToursSlice.reducer;
