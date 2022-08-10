import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// "@testing-library/jest-dom": "^5.16.4",
// "@testing-library/react": "^13.3.0",
// "@testing-library/user-event": "^13.5.0",
