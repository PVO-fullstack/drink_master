import Notiflix from "notiflix";
import instance from "../shared/api/instance";

// ############### Recipes ##########################

export const fetchRecipes = async () => {
  Notiflix.Loading.pulse();
  const { data } = await instance.get("/recipes");
  Notiflix.Loading.remove();
  return data;
};

export const fetchPopularRecipes = async () => {
  Notiflix.Loading.pulse();
  const { data } = await instance.get("/popular-recipes");
  Notiflix.Loading.remove();
  return data;
};

export const addRecipe = async (recipe) => {
  // const { data } = await instance.post('/own', recipe);
  Notiflix.Loading.pulse();
  const { data } = await instance.postForm("/own", recipe);
  Notiflix.Loading.remove();
  // const { data } = await instance.postForm('/own', recipe, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });

  return data;
};

export const fetchRecipesForPage = async ({ type, page, limit }) => {
  Notiflix.Loading.pulse();
  const { data } = await instance.get(`/${type}?page=${page}&limit=${limit}`);
  Notiflix.Loading.remove();
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
  Notiflix.Loading.pulse();
  const { data } = await instance.get(apiUrl);
  Notiflix.Loading.remove();
  return data;
};

export const deleteRecipeType = async ({ _id, type }) => {
  Notiflix.Loading.pulse();
  const { data } = await instance.delete(`/${type}/${_id}`);
  Notiflix.Loading.remove();
  return data;
};

export const updateFavRecipe = async ({ _id, type }) => {
  Notiflix.Loading.pulse();
  const { data } = await instance.patch(`/${type}/${_id}`);
  Notiflix.Loading.remove();
  return data;
};

export const fetchRecipesByCategory = async () => {
  Notiflix.Loading.pulse();
  const { data } = await instance.get("/recipes/main-page");
  Notiflix.Loading.remove();
  return data;
};
// ############### Preparation #######################

export const fetchIngredients = async () => {
  Notiflix.Loading.pulse();
  const { data } = await instance.get("/ingredients");
  Notiflix.Loading.remove();
  return data;
};

export const fetchCategories = async () => {
  Notiflix.Loading.pulse();
  const { data } = await instance.get("/category");
  Notiflix.Loading.remove();
  return data;
};

export const fetchGlasses = async () => {
  Notiflix.Loading.pulse();
  const { data } = await instance.get("/glass");
  Notiflix.Loading.remove();
  return data;
};

// ############### Search #######################
export const fetchAllRecipesForName = async ({ drink }) => {
  Notiflix.Loading.pulse();
  const { data } = await instance.get(`/recipes?search=${drink}`);
  Notiflix.Loading.remove();
  return data;
};
