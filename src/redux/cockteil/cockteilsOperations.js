import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteRecipeType,
  fetchRecipesForPage,
  updateFavRecipe,
} from "../../services/api";

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

export const fetchFavRecipesThunk = createAsyncThunk(
  "recipes/fetchFavRecipes",
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

export const updateFavRecipeThunk = createAsyncThunk(
  "recipes/updateFavRecipe",
  async ({ _id, type }, thunkAPI) => {
    try {
      await updateFavRecipe({ _id, type });
      return { _id, type };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
