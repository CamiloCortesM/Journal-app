import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { JornalApp } from "./JornalApp";
import { store } from "./store";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <JornalApp />
    </Provider>
  </React.StrictMode>
);
