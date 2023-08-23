// Import required modules from React and other libraries
import React from "react";
import ReactDOM from "react-dom/client"; // Note: Use `react-dom` instead of `react-dom/client`
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import App from "./App.jsx"; // Import your main App component
import "./index.css"; // Import CSS for styling
import { Provider } from "react-redux"; // Import Provider to wrap your app with Redux store
import { store } from "./redux/store"; // Import your Redux store

// Use ReactDOM's createRoot method to start rendering the app
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the app with React's StrictMode for additional checks during development
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
