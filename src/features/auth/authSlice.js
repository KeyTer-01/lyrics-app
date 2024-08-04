import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false, user: null, token: null };
const authSlice = createSlice({
  isAuthenticated: false,
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    // setToken: (state, action) => {
    //   state.token = action.payload;
    // },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
