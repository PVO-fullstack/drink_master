import axios from 'axios';

// ############### Recipes ##########################

export const fetchRecipes = async () => {
  const { data } = await axios.get('/recipes');
  return data;
};

export const addRecipe = async (recipe) => {
  const { data } = await axios.post('/addrecipe', recipe);
  return data;
};

// ############### Recipe Aux #######################

export const fetchIngredients = async () => {
  const { data } = await axios.get('/ingredients');
  console.log('data: ', data);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await axios.get('/category');
  return data;
};

export const fetchGlasses = async () => {
  const { data } = await axios.get('/glass');
  return data;
};
