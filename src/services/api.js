import instance from '../shared/api/instance';

// ############### Recipes ##########################

export const fetchRecipes = async () => {
  const { data } = await instance.get('/recipes');
  return data;
};

export const addRecipe = async (recipe) => {
  const { data } = await instance.post('/own', recipe);
  return data;
};

export const fetchRecipesForPage = async ({ type, page, limit }) => {
  const { data } = await instance.get(`/${type}?page=${page}&limit=${limit}`);
  return data;
};

export const deleteRecipeType = async ({ _id, type }) => {
  const { data } = await instance.delete(`/${type}/${_id}`);
  return data;
};

// ############### Preparation #######################

export const fetchIngredients = async () => {
  const { data } = await instance.get('/ingredients');
  return data;
};

export const fetchCategories = async () => {
  const { data } = await instance.get('/category');
  return data;
};

export const fetchGlasses = async () => {
  const { data } = await instance.get('/glass');
  return data;
};
