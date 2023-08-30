import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

// const token = {
//   set(token) {
//     instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
// };

export const fetchRecipesForPage = async ({ type, page, limit }) => {
  const { data } = await instance.get(`/${type}?page=${page}&limit=${limit}`);
  return data;
};

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

// export const fetchRecipIdThunk = createAsyncThunk(
//   "recipes/:recipeId",
//   async (_, thunkAPI) => {
//     try {
//       return await fetchMyRecipes();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
