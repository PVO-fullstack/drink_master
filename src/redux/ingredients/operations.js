import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

export const fetchIngredients = createAsyncThunk(
  `ingredients`,
  async ({ rejectWithValue }) => {
    try {
      return await api.fetchIngredients;
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  }
);
export const fetchGlasses = createAsyncThunk(
  `ingredients/category`,
  async ({ rejectWithValue }) => {
    try {
      return await api.fetchCategories;
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  }
);
export const fetchCategories = createAsyncThunk(
  `ingredients/glass`,
  async ({ rejectWithValue }) => {
    try {
      return await api.fetchGlasses;
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  }
);
