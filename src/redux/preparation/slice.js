import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import * as ops from './operations';
import * as rds from './reducers';

// ################################################

const extraActions = [
  ops.fetchIngredients,
  ops.fetchGlasses,
  ops.fetchCategories,
  ops.fetchPopularRecipes,
];

export const preparationSlice = createSlice({
  name: 'preparation',
  initialState: {
    ingredients: [],
    categories: [],
    glasses: [],
    popular: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        ops.fetchIngredients.fulfilled,
        rds.handleFetchIngredientsFulfilled
      )
      .addCase(
        ops.fetchCategories.fulfilled,
        rds.handleFetchCategoriesFulfilled
      )
      .addCase(
        ops.fetchPopularRecipes.fulfilled,
        rds.handleFetchPopularRecipesFulfilled
      )
      .addCase(ops.fetchGlasses.fulfilled, rds.handleFetchGlassesFulfilled)
      .addMatcher(isFulfilled(...extraActions), rds.handleFulfilled)
      .addMatcher(isPending(...extraActions), rds.handlePending)
      .addMatcher(isRejected(...extraActions), rds.handleRejected),
});
