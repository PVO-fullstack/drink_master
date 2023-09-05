import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import * as ops from "./operationsDrinks";
import * as rds from "./redusersDrinks";

const extraActions = [ops.fetchRecipesByCategory, ops.fetchAllRecipesThunk];

export const sliceDrinks = createSlice({
  name: "drinks",
  initialState: {
    randomDrinks: [],
    allRecipes: [],
    totalAllRecipes: 0,
    isLoading: false,
    error: null,
  },
  redusers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        ops.fetchRecipesByCategory.fulfilled,
        rds.handleFetchRecipesByCategoryFulfilled
      )
      .addCase(
        ops.fetchAllRecipesThunk.fulfilled,
        rds.handleFetchAllRecipesFulfilled
      )

      .addMatcher(isFulfilled(...extraActions), rds.handleFulfilled)
      .addMatcher(isPending(...extraActions), rds.handlePending)
      .addMatcher(isRejected(...extraActions), rds.handleRejected),
});
