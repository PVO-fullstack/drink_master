import instance from "../../shared/api/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = "";
  },
};

export const registerUser = createAsyncThunk(
  "user/singup",
  async (credentials, thunkAPI) => {
    try {
      const user = await instance.post("/auth/signup", credentials);
      token.set(user.data.token);
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const user = await instance.post("/auth/login", credentials);
      token.set(user.data.token);
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    try {
      const user = await instance.get("/auth/current");
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "user/logout",
  async (credentials, thunkAPI) => {
    try {
      const user = await instance.post("/auth/logout", credentials);
      token.unset(user.data.token);
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
