// export const selectMyRecipes = (state) => state.cockteil.myRecipes;
// export const selectFavRecipes = (state) => state.cockteil.favRecipes;
export const selectError = (state) => state.cockteil.error;

export const selectMyRecipes = (state) => ({
  recipes: state.cockteil.myRecipes,
  totalRecipes: state.cockteil.totalMyRecipes,
});

export const selectFavRecipes = (state) => ({
  recipes: state.cockteil.favRecipes,
  totalRecipes: state.cockteil.totalFavRecipes,
});
