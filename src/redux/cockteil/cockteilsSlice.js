import { createSlice } from "@reduxjs/toolkit";
import {
  deleteRecipeThunk,
  fetchFavRecipesThunk,
  fetchRecipesThunk,
  updateFavRecipeThunk,
} from "./cockteilsOperations";

const initialState = {
  myRecipes: [],
  favRecipes: [],
  totalMyRecipes: 0,
  totalFavRecipes: 0,
  error: null,
};

export const cockteilsSlise = createSlice({
  name: "recipes",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesThunk.fulfilled, (state, { payload }) => {
        state.myRecipes = payload.recipes;
        state.totalMyRecipes = payload.totalRecipes;
        state.error = null;
      })
      .addCase(fetchFavRecipesThunk.fulfilled, (state, { payload }) => {
        state.favRecipes = payload.recipes;
        state.totalFavRecipes = payload.totalRecipes;
        state.error = null;
      })
      .addCase(deleteRecipeThunk.fulfilled, (state, { payload }) => {
        const updatedRecipes = state.myRecipes.filter(
          (recipe) => recipe._id !== payload._id
        );
        state.myRecipes = updatedRecipes;
        state.totalMyRecipes -= 1;
        state.error = null;
      })
      .addCase(updateFavRecipeThunk.fulfilled, (state, { payload }) => {
        const updatedRecipes = state.favRecipes.filter(
          (recipe) => recipe._id !== payload._id
        );
        state.favRecipes = updatedRecipes;
        state.totalFavRecipes -= 1;
        state.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});
export const { deleteRecipeType, updateFavRecipe } = cockteilsSlise.actions;
export default cockteilsSlise.reducer;
