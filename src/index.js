import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet";
import "./styles/style.css";
import "loaders.css/src/animations/ball-grid-pulse.scss";
import store from "@store";
import { AuthContextProvider } from "@store";

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
