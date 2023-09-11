import { createSlice } from '@reduxjs/toolkit';
import { addToFavoriteThunk, fetchRecipeIdThunk } from './recipeOperations';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

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
  name: 'recipeById',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecipeIdThunk.pending, (state, { payload }) => {
        Loading.pulse('Loading');
      })
      .addCase(fetchRecipeIdThunk.fulfilled, (state, { payload }) => {
        state.recipeId = payload;
        state.error = null;
        Loading.remove();
      })
      .addCase(fetchRecipeIdThunk.rejected, (state, { payload }) => {
        Loading.remove('Something went wrong');
      })
      .addCase(addToFavoriteThunk.pending, (state, { payload }) => {
        Loading.pulse('Loading');
      })
      .addCase(addToFavoriteThunk.fulfilled, (state, { payload }) => {
        Loading.remove();
      })
      .addCase(addToFavoriteThunk.rejected, (state, { payload }) => {
        Loading.remove('Something went wrong');
      }),
});

export default recipeSlice.reducer;
