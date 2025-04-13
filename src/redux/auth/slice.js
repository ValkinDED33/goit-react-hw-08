import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register, refreshUser } from "./operations";

const setUserState = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: "",
      email: "",
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        setUserState(state, action);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        setUserState(state, action);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;

        state.user = { name: "", email: "" };
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export default authSlice.reducer;
