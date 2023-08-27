import { createSlice } from "@reduxjs/toolkit";
import { logInUser, registerUser } from "./authOperations";

const initialState = {
  user: { name: null, password: null },
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
      .addCase(logInUser.fulfilled, (state, payload) => {
        userIn(state, payload);
      }),
});

export default authSlice.reducer;
