import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";
import Notiflix from "notiflix";

export const fetchRecipeById = async (recipeId) => {
  // Notiflix.Loading.pulse();
  const { data } = await instance.get(`/recipes/${recipeId}`);
  // Notiflix.Loading.remove();
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
  // Notiflix.Loading.pulse();
  const { data } = await instance.patch(`/favorite/${recipeId}`);
  // Notiflix.Loading.remove();
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
