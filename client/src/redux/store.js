import { configureStore } from "@reduxjs/toolkit";

// Import necessary functions from react-redux
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

// Import the rootReducer
import { rootReducer } from "./rootReducer";

// Configure the Redux store using the rootReducer
const store = configureStore({
  reducer: rootReducer,
});

// Destructure the dispatch function from the store
const { dispatch } = store;
const useSelector = useAppSelector; // Set up an alias for useSelector using react-redux's useDispatch
const useDispatch = () => useAppDispatch(); // Set up an alias for useDispatch using react-redux's useDispatch

// Export the store, dispatch, useSelector, and useDispatch
export { store, dispatch, useDispatch, useSelector };
