import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("userInfo")) ?? {},
};
// Create a userSlice using createSlice
const userSlice = createSlice({
  name: "userInfo", // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Reducer functions for user login and logout
    login(state, action) {
      state.user = action.payload.user; // Update user state with payload
      localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
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
    dispatch(userSlice.actions.login({ user })); // Dispatch the login action with payload
  };
}

export function Logout() {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.logout()); // Dispatch the logout action
  };
}
