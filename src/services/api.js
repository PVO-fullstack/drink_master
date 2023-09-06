import instance from "../shared/api/instance";

// ############### Recipes ##########################

export const fetchRecipes = async () => {
  const { data } = await instance.get("/recipes");
  return data;
};

export const fetchPopularRecipes = async () => {
  const { data } = await instance.get("/popular-recipes");
  return data;
};

export const addRecipe = async (recipe) => {
  // const { data } = await instance.post('/own', recipe);

  const { data } = await instance.postForm("/own", recipe);

  // const { data } = await instance.postForm('/own', recipe, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });

  return data;
};

export const fetchRecipesForPage = async ({ type, page, limit }) => {
  const { data } = await instance.get(`/${type}?page=${page}&limit=${limit}`);
  return data;
};

export const fetchAllRecipesForPage = async ({
  type,
  page,
  limit,
  search,
  category,
  ingredient,
}) => {
  let apiUrl = `/${type}?page=${page}&limit=${limit}&search=${search}`;
  if (ingredient) {
    apiUrl += `&ingredient=${ingredient}`;
  }

  if (category) {
    apiUrl += `&category=${category}`;
  }

  const { data } = await instance.get(apiUrl);
  return data;
};

export const deleteRecipeType = async ({ _id, type }) => {
  const { data } = await instance.delete(`/${type}/${_id}`);
  return data;
};

export const updateFavRecipe = async ({ _id, type }) => {
  const { data } = await instance.patch(`/${type}/${_id}`);
  return data;
};

export const fetchRecipesByCategory = async () => {
  const { data } = await instance.get("/recipes/main-page");
  return data;
};
// ############### Preparation #######################

export const fetchIngredients = async () => {
  const { data } = await instance.get("/ingredients");
  return data;
};

export const fetchCategories = async () => {
  const { data } = await instance.get("/category");
  return data;
};

export const fetchGlasses = async () => {
  const { data } = await instance.get("/glass");
  return data;
};

// ############### Search #######################
export const fetchAllRecipesForName = async ({ drink }) => {
  const { data } = await instance.get(`/recipes?search=${drink}`);
  return data;
};
