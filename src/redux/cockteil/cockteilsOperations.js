import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

// const token = {
//   set(token) {
//     instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
// };

export const fetchMyRecipes = async () => {
  const { data } = await instance.get("/recipes");
  return data;
};

export const fetchFavoriteRecipes = async () => {
  const { data } = await instance.get("/favorite");
  return data;
};

export const fetchMyRecipesThunk = createAsyncThunk(
  "recipes/fetchMyRecipes",
  async (_, thunkAPI) => {
    try {
      return await fetchMyRecipes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteRecipesThunk = createAsyncThunk(
  "recipes/fetchFavoriteRecipes",
  async (_, thunkAPI) => {
    try {
      return await fetchFavoriteRecipes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
