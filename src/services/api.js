// import axios from 'axios';
import instance from '../shared/api/instance';

// ############### Recipes ##########################

export const fetchRecipes = async () => {
  const { data } = await instance.get('/recipes');
  return data;
};

export const addRecipe = async (recipe) => {
  const { data } = await instance.post('/addrecipe', recipe);
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
