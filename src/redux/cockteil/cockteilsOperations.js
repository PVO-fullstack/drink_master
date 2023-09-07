import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteRecipeType,
  fetchRecipesForPage,
  updateFavRecipe,
} from "../../services/api";
import Notiflix from "notiflix";

export const fetchRecipesThunk = createAsyncThunk(
  "recipes/fetchRecipes",
  async ({ page, limit, type }, thunkAPI) => {
    try {
      Notiflix.Loading.pulse();
      const data = await fetchRecipesForPage({ page, limit, type });
      Notiflix.Loading.remove();
      return { recipes: data.recipes, totalRecipes: data.totalRecipes, type };
    } catch (error) {
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavRecipesThunk = createAsyncThunk(
  "recipes/fetchFavRecipes",
  async ({ page, limit, type }, thunkAPI) => {
    try {
      Notiflix.Loading.pulse();
      const data = await fetchRecipesForPage({ page, limit, type });
      Notiflix.Loading.remove();
      return { recipes: data.recipes, totalRecipes: data.totalRecipes, type };
    } catch (error) {
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteRecipeThunk = createAsyncThunk(
  "recipes/deleteRecipe",
  async ({ _id, type }, thunkAPI) => {
    try {
      Notiflix.Loading.pulse();
      await deleteRecipeType({ _id, type });
      Notiflix.Loading.remove();
      return { _id, type };
    } catch (error) {
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateFavRecipeThunk = createAsyncThunk(
  "recipes/updateFavRecipe",
  async ({ _id, type }, thunkAPI) => {
    try {
      Notiflix.Loading.pulse();
      await updateFavRecipe({ _id, type });
      Notiflix.Loading.remove();
      return { _id, type };
    } catch (error) {
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
