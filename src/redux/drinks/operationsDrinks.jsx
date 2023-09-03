import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const payloadCreator =
  (request) =>
  async (_, { rejectWithValue }) => {
    try {
      return await request();
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  };

const fetchRecipesByCategoryPayload = payloadCreator(
  api.fetchRecipesByCategory
);

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/main-page",
  fetchRecipesByCategoryPayload
);
