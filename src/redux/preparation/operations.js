import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

// ####################################################

const payloadCreator =
  (request) =>
  async (_, { rejectWithValue }) => {
    try {
      return await request();
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  };

// -------------* Ingredients *--------------------------

// Payload
const ingredientsPayload = payloadCreator(api.fetchIngredients);

// Operation
export const fetchIngredients = createAsyncThunk(
  'ingredients',
  ingredientsPayload
);

// -------------* Categories *---------------------------

// Payload
const categoriesPayload = payloadCreator(api.fetchCategories);

// Operation
export const fetchCategories = createAsyncThunk('category', categoriesPayload);

// ---------------* Glasses *----------------------------

// Payload
const glassesPayload = payloadCreator(api.fetchGlasses);

// Operation
export const fetchGlasses = createAsyncThunk('glass', glassesPayload);

// -------------* Popular Recipes *-----------------------

// Payload
const fetchPopularRecipesPayload = payloadCreator(api.fetchPopularRecipes);

// Operation
export const fetchPopularRecipes = createAsyncThunk(
  'popular-recipes',
  fetchPopularRecipesPayload
);

// --------------* AddRecipe *----------------------------

// Payload
const addRecipePayload = payloadCreator(api.addRecipe);

// Operation
export const addRecipe = createAsyncThunk('own', addRecipePayload);
