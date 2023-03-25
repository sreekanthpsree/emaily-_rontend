import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "./reducer";
const root = createRoot(document.getElementById("root"));
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
