import { createSlice } from "@reduxjs/toolkit";

import { users } from "../utils/data";

const initialState = {
  user: JSON.parse(window?.localStorage.getItem("userInfo")) ?? {},
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    Login(state, action) {
      state.user = action.payload.user;
    },
    logout(state) {
      state.user = null;
      localStorage?.removeItem("userInfo");
    },
  },
});

export default userSlice.reducer;

export function Login(user) {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.Login({ user }));
  };
}

export function Logout() {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.logout());
  };
}
