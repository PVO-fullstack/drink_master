import { createSlice } from "@reduxjs/toolkit";
import { addToFavoriteThunk, fetchRecipIdThunk } from "./recipeOperations";

const initialState = {
  recipeId: {
    drink: null,
    glass: null,
    ingredients: [],
    instructions: [],
    isFavorite: false,
  },
  error: null,
};

export const recipeSlice = createSlice({
  name: "recipeById",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecipIdThunk.fulfilled, (state, { payload }) => {
        state.recipeId = payload;
        state.error = null;
      })
      .addCase(addToFavoriteThunk.fulfilled, (state, { payload }) => {
        state.recipeId.isFavorite = payload;
      }),
});

export default recipeSlice.reducer;
