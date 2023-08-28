import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFavoriteRecipesThunk,
  fetchMyRecipesThunk,
} from './cockteilsOperations';

const initialState = { myRecipes: [], favRecipes: [], error: null };

export const cockteilsSlise = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMyRecipesThunk.fulfilled, (state, { payload }) => {
        state.myRecipes = payload;
        state.error = null;
      })
      .addCase(fetchFavoriteRecipesThunk.fulfilled, (state, { payload }) => {
        state.favRecipes = payload;
        state.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export default cockteilsSlise.reducer;
