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

// ****************************************************

// Payload Ingredients
const ingredientsPayload = payloadCreator(api.fetchIngredients);

// Operation Ingredients
export const fetchIngredients = createAsyncThunk(
  'ingredients',
  ingredientsPayload
);

// ___________________________________________________

// Payload Categories
const categoriesPayload = payloadCreator(api.fetchCategories);

// Operation Categories
export const fetchCategories = createAsyncThunk('category', categoriesPayload);

// ___________________________________________________

// Payload Glasses
const glassesPayload = payloadCreator(api.fetchGlasses);

// Operation Glasses
export const fetchGlasses = createAsyncThunk('glass', glassesPayload);
