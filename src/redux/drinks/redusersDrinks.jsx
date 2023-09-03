export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, { error, payload }) => {
  console.log("error in handleRejected: ", error);
  state.isLoading = false;
  state.error = payload ?? error.message;
};

export const handleFetchRecipesByCategoryFulfilled = (state, { payload }) => {
  state.randomDrinks = payload;
  state.isDataLoaded = true;
};
