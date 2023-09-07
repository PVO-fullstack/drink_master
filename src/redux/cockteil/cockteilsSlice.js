import { createSlice } from "@reduxjs/toolkit";
import { fetchFavRecipesThunk, fetchRecipesThunk } from "./cockteilsOperations";
import { Loading } from "notiflix/build/notiflix-loading-aio";

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
      // .addMatcher(
      //   (action) => action.type.endsWith("/pending"),
      //   (state, { payload }) => {
      //
      //   }
      // )
      .addCase(fetchRecipesThunk.pending, (state, { payload }) => {
        Loading.pulse("Loading");
      })
      .addCase(fetchRecipesThunk.fulfilled, (state, { payload }) => {
        state.myRecipes = payload.recipes;
        state.totalMyRecipes = payload.totalRecipes;
        state.error = null;
        Loading.remove();
      })
      .addCase(fetchFavRecipesThunk.pending, (state, { payload }) => {
        Loading.pulse("Loading");
      })
      .addCase(fetchFavRecipesThunk.fulfilled, (state, { payload }) => {
        state.favRecipes = payload.recipes;
        state.totalFavRecipes = payload.totalRecipes;
        state.error = null;
        Loading.remove();
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload;
          Loading.remove("Something went wrong");
        }
      );
  },
});
export const { deleteRecipeType, updateFavRecipe } = cockteilsSlise.actions;
export default cockteilsSlise.reducer;
