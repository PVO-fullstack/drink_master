// Common:
export const handleFulfilled = (state) => {
  state.preparation.isLoading = false;
  state.preparation.error = null;
};

export const handlePending = (state) => {
  state.preparation.isLoading = true;
};
export const handleRejected = (state, { error, payload }) => {
  state.preparation.isLoading = false;
  state.preparation.error = payload ?? error.message;
};

// On success:

// Fetch ingredients
export const handleFetchIngredientsFulfilled = (state, { payload }) => {
  console.log('payload in Ops, FetchIngredient: ', payload);
  state.preparation.ingredients = payload;
};

// Fetch categories
export const handleFetchCategoriesFulfilled = (state, { payload }) => {
  state.preparation.categories = payload;
};

// Fetch glasses
export const handleFetchGlassesFulfilled = (state, { payload }) => {
  state.preparation.glasses = payload;
};
