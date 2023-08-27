import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import * as ops from 'redux/ingredients/operations';
import * as rds from 'redux/ingredients/reducers';

// ################################################

const extraActions = [
  ops.fetchIngredients,
  ops.fetchGlasses,
  ops.fetchCategories,
];

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredients: [],
    categories: [],
    glasses: [],
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
      .addCase(ops.fetchGlasses.fulfilled, rds.handleFetchGlassesFulfilled)
      .addMatcher(isFulfilled(...extraActions), rds.handleFulfilled)
      .addMatcher(isPending(...extraActions), rds.handlePending)
      .addMatcher(isRejected(...extraActions), rds.handleRejected),
});

export const ingredientsReducer = ingredientsSlice.reducer;
