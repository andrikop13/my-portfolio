import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet";
import "./styles/style.css";
import store from "./store";
import { Provider } from "react-redux";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </AuthContextProvider>
);

// "@testing-library/jest-dom": "^5.16.4",
// "@testing-library/react": "^13.3.0",
// "@testing-library/user-event": "^13.5.0",
