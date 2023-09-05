import { createSelector } from "reselect";

export const selectDrinksByCategory = (state) => state.drinks.randomDrinks;
export const selectAllRecipes = (state) => ({
  recipes: state.drinks.allRecipes,
  totalRecipes: state.drinks.totalAllRecipes,
});
export const selectRecipesForName = (state) => state.drinks.searchDrinks;

export const memoizedSelectDrinksByCategory = createSelector(
  [selectDrinksByCategory],
  (randomDrinks) => randomDrinks
);

export const memoizedSelectAllRecipes = createSelector(
  [selectAllRecipes],
  (recipes) => recipes
);
