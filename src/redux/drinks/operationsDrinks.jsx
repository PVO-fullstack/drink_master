import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";
import Notiflix from "notiflix";

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

export const fetchAllRecipesThunk = createAsyncThunk(
  "recipes/fetchAllRecipes",
  async ({ page, limit, type, search, category, ingredient }, thunkAPI) => {
    try {
      Notiflix.Loading.pulse();
      const data = await api.fetchAllRecipesForPage({
        page,
        limit,
        type,
        search,
        category,
        ingredient,
      });
      Notiflix.Loading.remove();
      return {
        recipes: data.recipes,
        totalRecipes: data.totalRecipes,
        type,
        search,
        category,
        ingredient,
      };
    } catch (error) {
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchRecipesForNameThunk = createAsyncThunk(
//   "recipes/fetchRecipesForName",
//   async ({ drink }, thunkAPI) => {
//     try {
//       const data = await api.fetchAllRecipesForName({ drink });
//       return { searchDrinks: data };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
