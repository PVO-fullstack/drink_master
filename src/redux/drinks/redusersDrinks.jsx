import { Loading } from "notiflix/build/notiflix-loading-aio";

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
  Loading.remove();
};

export const handlePending = (state) => {
  state.isLoading = true;
  Loading.pulse("Loading");
};

export const handleRejected = (state, { error, payload }) => {
  console.log("error in handleRejected: ", error);
  state.isLoading = false;
  state.error = payload ?? error.message;
  Loading.remove("Something went wrong");
};

export const handleFetchRecipesByCategoryFulfilled = (state, { payload }) => {
  state.randomDrinks = payload;
  state.isDataLoaded = true;
  Loading.remove();
};

export const handleFetchAllRecipesFulfilled = (state, { payload }) => {
  state.allRecipes = payload.recipes;
  state.totalAllRecipes = payload.totalRecipes;
  state.error = null;
  Loading.remove();
};
