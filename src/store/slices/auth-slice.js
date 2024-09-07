import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    token: null,
  },
  reducers: {
    authSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      toast.success("Authentication Sucess", { position: "bottom-left" });
    },
    authFailure(state, action) {
      state.error = action.payload;
      toast.success("Authentication Failed", { position: "bottom-left" });
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = null;
      toast.success("Logged out", { position: "bottom-left" });
    },
  },
});

export const { authStart, authSuccess, authFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
