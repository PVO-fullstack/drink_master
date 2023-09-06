import instance from "../../shared/api/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";

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
      Notiflix.Loading.pulse();
      const user = await instance.post("/auth/signup", credentials);
      token.set(user.data.token);
      Notiflix.Loading.remove();
      return user.data;
    } catch (e) {
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      Notiflix.Loading.pulse();
      const user = await instance.post("/auth/signin", credentials);
      token.set(user.data.token);
      Notiflix.Loading.remove();
      return user.data;
    } catch (e) {
      Notiflix.Loading.remove();
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
      Notiflix.Loading.pulse();
      const user = await instance.get("/auth/current");
      Notiflix.Loading.remove();
      return user.data;
    } catch (e) {
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "user/logout",
  async (credentials, thunkAPI) => {
    try {
      const user = await instance.post("/auth/signout", credentials);
      token.unset(user.data.token);
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeAvatar = createAsyncThunk(
  "user/refresh",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    try {
      const user = await instance.patch("/auth/update", data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const subscribeUser = createAsyncThunk(
  "user/subscribe",
  async (credentials, thunkAPI) => {
    try {
      const emailAdd = await instance.post("/subscribe", credentials);
      return emailAdd.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
