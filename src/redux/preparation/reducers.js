// Common:
export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};

// On success:

// Fetch ingredients
export const handleFetchIngredientsFulfilled = (state, { payload }) => {
  state.ingredients = payload;
};

// Fetch categories
export const handleFetchCategoriesFulfilled = (state, { payload }) => {
  state.categories = payload;
};

// Fetch glasses
export const handleFetchGlassesFulfilled = (state, { payload }) => {
  state.glasses = payload;
};

// Fetch popular recipes
export const handleFetchPopularRecipesFulfilled = (state, { payload }) => {
  state.popular = payload;
};
