import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

export const fetchRecipeById = async (recipeId) => {
  const { data } = await instance.get(`/recipes/${recipeId}`);
  return data;
};

export const fetchRecipIdThunk = createAsyncThunk(
  `recipes/fetchRecipeById`,
  async (recipeId, thunkAPI) => {
    try {
      return await fetchRecipeById(recipeId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = async (recipeId) => {
  const { data } = await instance.patch(`/favorite/${recipeId}`);
  return data;
};

export const addToFavoriteThunk = createAsyncThunk(
  `recipes/addtofavorite`,
  async (recipeId, thunkAPI) => {
    try {
      return await addToFavorite(recipeId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
