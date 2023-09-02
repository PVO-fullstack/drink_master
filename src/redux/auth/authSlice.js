import { createSlice } from "@reduxjs/toolkit";
import {
  changeAvatar,
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
};

const userIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        userIn(state, action);
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        userIn(state, action);
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefresh = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefresh = false;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      }),
  // .addCase(changeAvatar.fulfilled, (state, action) => {
  //   state.user.avatarUrl = action.payload;
  // }),
});

export default authSlice.reducer;
