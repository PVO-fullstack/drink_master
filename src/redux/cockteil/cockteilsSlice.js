import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipesThunk } from "./cockteilsOperations";

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
        // state[payload.type] = payload.recipes;
        // state[`total${payload.type}`] = payload.totalRecipes;
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

export default cockteilsSlise.reducer;
