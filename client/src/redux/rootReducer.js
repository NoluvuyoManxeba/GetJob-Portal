import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  user: userSlice, // The 'user' reducer is coming from the 'userSlice' module
});

// Export the rootReducer
export { rootReducer };
