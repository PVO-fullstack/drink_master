import { createSlice } from "@reduxjs/toolkit";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import {
  logInUser,
  logOutUser,
  refreshUser,
  registerUser,
} from "./authOperations";

const initialState = {
  user: { name: null, password: null, avatarUrl: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
  isLoading: false,
  isFirst: false,
  showModalTimeUsing: false,
};

const userIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.isFirst = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
        Loading.pulse("Loading");
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        userIn(state, action);
        Loading.remove();
      })
      .addCase(registerUser.rejected, (state, action) => {
        Loading.remove("Something went wrong");
      })
      .addCase(logInUser.pending, (state, action) => {
        state.isLoading = true;
        Loading.pulse("Loading");
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        userIn(state, action);
        state.showModalTimeUsing = action.payload.showModalTimeUsing;
        Loading.remove();
      })
      .addCase(logInUser.rejected, (state, action) => {
        Loading.remove("Something went wrong");
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefresh = true;
        if (state.isFirst) {
          Loading.pulse("Loading");
        }
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        Loading.remove();
        state.isLoggedIn = true;
        state.isRefresh = false;
        state.isFirst = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefresh = false;
        Loading.remove("Something went wrong");
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isFirst = false;
      }),
  // .addCase(changeAvatar.fulfilled, (state, action) => {
  //   state.user.avatarUrl = action.payload;
  // }),
});

export default authSlice.reducer;
