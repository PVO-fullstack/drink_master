import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteRecipeType, fetchRecipesForPage } from "../../services/api";
// import instance from "../../shared/api/instance";

// const token = {
//   set(token) {
//     instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
// };

export const fetchRecipesThunk = createAsyncThunk(
  "recipes/fetchRecipes",
  async ({ page, limit, type }, thunkAPI) => {
    try {
      const data = await fetchRecipesForPage({ page, limit, type });
      return { recipes: data.recipes, totalRecipes: data.totalRecipes, type };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteRecipeThunk = createAsyncThunk(
  "recipes/deleteRecipe",
  async ({ _id, type }, thunkAPI) => {
    try {
      await deleteRecipeType({ _id, type });
      return { _id, type };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
