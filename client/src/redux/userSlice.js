import { createSlice } from "@reduxjs/toolkit";

// Import user data from utils
import { users } from "../utils/data";

// Define initial state
const initialState = {
  user: JSON.parse(window?.localStorage.getItem("userInfo")) ?? {},
};
// Create a userSlice using createSlice
const userSlice = createSlice({
  name: "userInfo", // Name of the slice
  initialState, // Initial state defined above
  reducers: { 
  // Reducer functions for user login and logout
    Login(state, action) {
      state.user = action.payload.user; // Update user state with payload
    },
    logout(state) {
      state.user = null; // Reset user state to null
      localStorage?.removeItem("userInfo"); // Remove user info from localStorage
    },
  },
});
// Export the reducer from the slice
export default userSlice.reducer;

// Export thunks for user login and logout
export function Login(user) {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.Login({ user })); // Dispatch the login action with payload
  };
}

export function Logout() {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.logout()); // Dispatch the logout action
  };
}
